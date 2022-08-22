// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')

//swagger
const swagger = require('../config/swagger')
fastify.register(require('@fastify/swagger'), swagger.options)

const PORT = 5000

fastify.register(require('../routes/data'))

fastify.register(require('@fastify/static'),{
  root: path.join(__dirname),
  prefix: '/',
})

fastify.get('/download/:documentName', function (req, reply){
  const { documentName } = req.params
  reply.download(`./documents/redy-documents/${req.params.documentName}.docx`)
})

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