import { parse } from 'node-html-parser';

export default  (html) => {
    const HTML_TAG_REGEXP = /(<([^>]+)>)/ig
    return html?.replace(HTML_TAG_REGEXP, "").replace("&nbsp;", " ")
}
export const removeTable  = (html, replaceWith = "__TABLE__") => {
    const TABLE_REGEXP = /\<table\>.*\<\/table\>/ig
    const FIGURE_REGEXP = /\<figure.*\>.*\<\/figure\>/ig
    const table_free = (html?.replace(TABLE_REGEXP, ""))
    return (table_free?.replace(FIGURE_REGEXP, replaceWith))
}

export const parseTable = (tableName, data) => {
    const doc = parse(data);
    const rows = [...doc.querySelectorAll(tableName ? `.wp-block-table.${tableName} tr` : '.wp-block-table tr')]
    return rows.map((row) => [...row.querySelectorAll("td").map((col => col.innerHTML))])
}

export const parseAccordion = (html) =>  {
    const doc = parse(html)
    const items = [...doc.querySelectorAll(".wp-block-table.accordions tr")].map(tr => ({title: tr.querySelectorAll("td")[0].innerHTML, content: tr.querySelectorAll("td")[1].innerHTML}))
    return items
  }