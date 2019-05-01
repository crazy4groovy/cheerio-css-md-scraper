// const puppeteer = require('puppeteer')

// // const delay = require('./delay')
// const gotoConfig = require('./goto')

// const launchConfig = {
//   args: [
//     '--disable-http2',
//     '--no-sandbox',
//     '--disable-setuid-sandbox',
//     '--disable-dev-shm-usage'
//   ],
//   // >> dumpio: true,
//   // >> devtools: true,
//   // >> headless: false,
//   ignoreHTTPSErrors: true,
//   slowMo: 20,
//   timeout: 50000
// }

// function handleDialog(dialog) {
//   console.log('DIALOG>>', dialog.message(), '<dismissed>')
//   dialog.dismiss()
// }

// module.exports = async function(req) {
//   const {query} = req.url

//   const browser = await puppeteer.launch(launchConfig)
//   const pages = await browser.pages()
//   const page = pages.length > 0 ? pages[0] : await browser.newPage()
//   page.smartClick = smartClick.bind(page)
//   page.on('dialog', handleDialog)

//   await page.setBypassCSP(true)
//   await page.goto(query.url, gotoConfig())

//   if (query.selector) {
//     await page.waitForSelector(query.selector)
//   }
//   const {selector = 'body'} = query
//   const data = page.$(selector).toString()

//   return {
//     selector: query.selector,
//     url: query.url,
//     json: query.json != null,
//     data
//   }
// }
