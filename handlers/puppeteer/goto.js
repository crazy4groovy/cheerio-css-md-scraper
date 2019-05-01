module.exports = isIdle => ({
  waitUntil: isIdle ? 'networkidle0' : 'load',
  timeout: 0
})
