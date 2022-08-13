const {postData} = require('../controllers/data')

// Options for add data
const postDataOpts = {
    schema: {
        body: {
            type: 'object'
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {type: 'string'}
                }
            }
        }
    },
    handler: postData,
}

function dataRoutes (fastify, options, done)
{   
    // Add data
    fastify.post('/data_for_docx', postDataOpts)
      
    done()
}

module.exports = dataRoutes