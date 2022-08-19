const {postData} = require('../controllers/data')

// Options for add data
const postDataOpts = {
    schema: {
        description: 'post some paris key and value',
        tags: ['data for docx'],
        body: {
            type: 'array',
            items: {
                type: 'object',
                required:  ["key", "value"],
                properties : {
                    key: { type: 'string' },
                    value: { type: 'string' },
                }
            }
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