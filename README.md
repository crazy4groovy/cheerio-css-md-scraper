# cheerio-css-md-scraper

Use css selectors and cheerio to scrape content into markdown. (phew!)

## How To Use

`$ npm run server`

## API Routes

- `/` : UI form
- `/help` : see payload below
- `/cheerio` query params:

```js
  url= 'REQUIRED: HTTP endpoint (overrides q)'
  q= 'REQUIRED: wikipedia search query (if no url)'
  selector= 'REQUIRED: CSS selector(s) for url HTML elements'
  json= 'parse selector elements as json'
  markdown= 'parse selector elements as markdown'
```
