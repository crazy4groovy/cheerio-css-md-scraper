const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

const myEnv = dotenv.config()
dotenvExpand(myEnv)

// const { parse, stringify } = require('flatted/cjs');

const fastify = require('fastify')({
  logger: true
})

fastify.register(require('point-of-view'), {
  engine: {
    marko: require('marko')
  }
})

const cheerioHandler = require('./handlers/cheerio')

fastify.use(require('cors')())

fastify.get('/', (req, reply) => {
  reply.view('/templates/index.marko', {text: 'text'})
})

fastify.get('/help', async (req, res) => {
  res.type('application/json').code(200)
  return {
    '/cheerio': {
      url: 'REQUIRED: HTTP endpoint (overrides q)',
      q: 'REQUIRED: wikipedia search query (if no url)',
      selector: 'REQUIRED: CSS selector(s) for url HTML elements',
      json: 'parse selector elements as json',
      markdown: 'parse selector elements as markdown'
    }
  }
})

fastify.get('/cheerio', async (req, res) => {
  const {query} = req
  res.type('application/json').code(200)
  const resp = await cheerioHandler({url: {query}})
  // console.log(resp)
  return resp
})

fastify.listen(Number(process.env.PORT) || 3000, '0.0.0.0', (err, address) => {
  if (err) throw err
  // fastify.log.info(`server listening on ${address}`)
  console.log(`server listening on ${address}`)
})
