const skygearCloud = require('skygear/cloud')
const reverse = require('lodash.reverse')

const fetcher = require('./handlers/fetcher')
const cheerioHandler = require('./handlers/cheerio')
// const puppeteerHandler = require('./handlers/puppeteer'); // not supported on skygear
// {"error":{"name":"UnexpectedError","code":10000,"message":"Error: Failed to launch chrome!\n/usr/src/app/node_modules/puppeteer/.local-chromium/linux-588429/chrome-linux/chrome: error while loading shared libraries: libX11.so.6: cannot open shared object file: No such file or directory\n\n\nTROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md\n"}}

/* Visit https://vidii.skygeario.com/ping/ to view */
skygearCloud.handler('ping/', () => reverse('pong!'.split('')).join(''), {
  method: ['GET'],
  userRequired: false
})

/* Tunnel / Proxy */
skygearCloud.handler('fetch', req => fetcher(req.url.query), {
  method: ['GET'],
  userRequired: false
})

/* HTML Parser */
skygearCloud.handler('cheerio', req => cheerioHandler(req), {
  method: ['GET'],
  userRequired: false
})

/* Headless HTML Parser */
/*
skygearCloud.handler(
  'puppeteer',
  (req) => puppeteerHandler(req),
  {
    method: ['GET'],
    userRequired: false
  }
);
*/
