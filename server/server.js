// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

//swagger
const swagger = require('../config/swagger')
fastify.register(require('@fastify/swagger'), swagger.options)

const PORT = 5000

fastify.register(require('../routes/data'))

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT)
    fastify.swagger()
  } catch (errpr) {
    fastify.log.error(error)
    process.exit(1)
  }
}
start()