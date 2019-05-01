const cheerio = require('cheerio')
// const html2json = require('html2json').html2json;
const {parse} = require('himalaya')
const TurndownService = require('turndown')
const cleanHtml = require('clean-html')

const fetcher = require('./fetcher')

const t = new TurndownService()
const clean = html =>
  new Promise((resolve, reject) => cleanHtml.clean(html, resolve) || reject)

const cheerioConfig = {
  xml: {
    lowerCaseAttributeNames: true,
    lowerCaseTags: true,
    normalizeWhitespace: true,
    recognizeSelfClosing: true
  }
}

module.exports = async function(req) {
  const {query} = req.url
  const replyHtml = await fetcher(query)

  const $ = cheerio.load(replyHtml, cheerioConfig)

  let data = $(query.selector || (query.q && '#mw-content-text'))
    // .map((i, el) => ($(el).html() || $(el).parent().html()).trim().replace(/\s+/g, ' '))
    .map((i, el) =>
      $(el)
        .toString()
        .trim()
        .replace(/\s+/g, ' ')
    )
    .get()

  if (query.json != null) {
    // data = data.map(p => html2json(p))
    data = await Promise.all(data.map(async p => parse(await clean(p))))
  } else if (query.markdown != null || query.q) {
    data = await Promise.all(data.map(async p => t.turndown(await clean(p))))
  }

  return {
    selector: query.selector,
    url: query.url,
    q: query.q,
    json: query.json != null,
    markdown: query.markdown != null,
    data
  }
}
