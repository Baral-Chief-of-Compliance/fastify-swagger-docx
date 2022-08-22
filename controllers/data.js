const {fillTemp} = require('../docx-template/docx-template')
const {convertJson} = require('./convert/convert.js')

const postData = (req, reply) => {

    
    let obj = convertJson(req.body)


    fillTemp(obj)

    reply.send({message: `http://localhost:5000/download/${obj.name_of_document}`})
}

module.exports = {
    postData
}