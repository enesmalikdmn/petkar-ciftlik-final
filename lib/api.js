import r, { parseAccordion, removeTable, parseTable } from '../utils/removeHTML'
const API_URL = process.env.WORDPRESS_API_URL

export async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(`${API_URL}/graphql`, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
    // Only some of the fields of a revision are considered as there are some inconsistencies
    isRevision
      ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
      : ''
    }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}

export const getPageWithName = async (name, locale) => {
  const PAGE_QUERY = `
  query GetPageWithName($name: String = "hero-en") {
      pages(where: {name: $name}) {
        nodes {
          title
          content
          databaseId
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `
  const data = await fetchAPI(PAGE_QUERY, { variables: { name: locale ? `${name}-${locale}` : name } })
  const page = data.pages.nodes[0]
  if (!page) {
    return getPageWithName("404", locale || "en");
  }
  return (page)
}



export const getPageWithNameLocale = async (name, locale) => {
  const PAGE_QUERY = locale ?
    `
  query GetPageWithSlug($name: String = "benefits-en", $locale: LanguageCodeEnum = TR) {
    pages(where: {name: $name}) {
      nodes {
        translation(language: $locale) {
          title
          content
          databaseId
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
  `
    : `
  query GetPageWithName($name: String = "hero-en") {
      pages(where: {name: $name}) {
        nodes {
          title
          content
          databaseId
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `
  const data = await fetchAPI(PAGE_QUERY, { variables: { name: name, locale: locale.toUpperCase() } })
  // console.log(PAGE_QUERY);
  const page = locale ? data.pages.nodes[0].translation : data.pages.nodes[0]
  if (!page) {
    return getPageWithName("404", locale || "en");
  }
  return page
}





const parseSection = (s) => {
  return s[0]?.split('. . .')
}

const parsePost = ({ title, content, databaseId, slug, featuredImage }) => {
  return {
    title,
    miniContent: r(content).slice(0, 140) + '...',
    content: r(removeTable(content)),
    sections: parseTable('content', content).map(parseSection),
    postHeader: parseTable('postHeader', content).map((r) => r[0]),
    databaseId,
    image: featuredImage?.node?.sourceUrl || null,
    slug
  }
}

export const getPostWithName = async (name) => {
  const POST_QUERY = `
  query GetPostWithName($name: String = "about-us") {
    postBy(slug: $name) {
      content
      title
      databaseId
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  `
  const data = await fetchAPI(POST_QUERY, { variables: { name } })
  console.log(name)
  const post = parsePost(data.postBy)
  return post;
}


export const getPageWithParentId = async (parentID) => {
  const PAGE_QUERY = `
  query GetPageWithParentId($parentId: ID = 57) {
    pages(where: {parent: $parentId, orderby:{field:MENU_ORDER, order:ASC}}, last: 20) {
      nodes {
        title
        content
        databaseId
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
  `
  const data = await fetchAPI(PAGE_QUERY, { variables: { parentId: parentID } })
  const pages = data.pages.nodes
  return pages
}



const parseService = ({ title, content, databaseId, slug, featuredImage }) => {
  return {
    title,
    miniContent: r(content).slice(0, 140) + '...',
    content: (removeTable(content)),
    sections: parseTable('content', content).map(parseSection),
    accordionItems: parseAccordion(content),
    postHeader: parseTable('postHeader', content).map((r) => r[0]),
    databaseId,
    image: featuredImage?.node?.sourceUrl || null,
    slug
  }
}

export const getService = async (name, locale) => {
  const service = await getPageWithNameLocale(name, locale);
  return parseService(service)
}

export const getServices = async (locale) => {
  const servicesPage = await getPageWithNameLocale('medical-procedures', locale)
  const services = (await getPageWithParentId(servicesPage.databaseId)).map(parseService)

  const cosmeticServicesPage = await getPageWithNameLocale('cosmetic-surgeries', locale)
  const cosmeticServices = (await getPageWithParentId(cosmeticServicesPage.databaseId)).map(parseService)

  const aboutUsPage = await getPageWithNameLocale('about-us', locale)
  const abouts = (await getPageWithParentId(aboutUsPage.databaseId)).map(parseService)
  return {
    servicesPage,
    services,
    cosmeticServicesPage,
    cosmeticServices,
    aboutUsPage,
    abouts
  }
}

export const getCosmeticServices = async (locale) => {
  const cosmeticServicesPage = await getPageWithName('cosmetic-surgeries', locale)
  const cosmeticServices = (await getPageWithParentId(cosmeticServicesPage.databaseId)).map(parseService)
  console.log(cosmeticServices.length)
  return {
    cosmeticServicesPage,
    cosmeticServices
  }
}