const postData = (req, reply) => {
    var count = Object.keys(req.body).length
    
    let counter = 0

    function getQuantityParis(obj) {
        getProp(obj);
    
        function getProp(o) {
            for(var prop in o) {
                if((o[prop]) === 'value') {
                    getProp(o[prop]);
                } else {
                    counter++;
                }
            }
        }
    }

    getQuantityParis(req.body)
    reply.send({message: `number of pairs ${counter}`})
}

module.exports = {
    postData
}