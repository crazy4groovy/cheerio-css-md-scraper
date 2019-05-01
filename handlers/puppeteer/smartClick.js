const delay = require('./delay')

module.exports.smartClick = async function(selector, delayByMs = 100) {
  const page = this
  const el = await page.waitForSelector(selector)
  await delay(delayByMs)
  await el.hover()
  await delay(delayByMs)
  await el.click()
  return el
}
