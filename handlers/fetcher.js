const fetch = require('cross-fetch')

module.exports = ({q, url}) =>
  fetch(
    url
      ? decodeURIComponent(url)
      : `https://en.wikipedia.org/wiki/${decodeURIComponent(q)}`
  ).then(res => res.text())
