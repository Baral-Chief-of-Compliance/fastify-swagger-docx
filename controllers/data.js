const postData = (req, reply) => {
    var count = Object.keys(req.body).length
    reply.send({message: `number of pairs ${count}`})
}

module.exports = {
    postData
}