const path = require('path')


module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    i18n: {
      locales: ["tr", "en", "de"],
      defaultLocale: "en"
    },
    images: {
        domains: [
          '2.gravatar.com',
          'secure.gravatar.com',
          'source.unsplash.com'
        ],
      },
}