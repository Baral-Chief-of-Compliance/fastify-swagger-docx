const postData = (req, reply) => {
    var count = Object.keys(req.body).length
    
    let counter = 0

    function getFiniteValue(obj) {
        getProp(obj);
    
        function getProp(o) {
            for(var prop in o) {
                if(typeof(o[prop]) === 'object') {
                    getProp(o[prop]);
                } else {
                    console.log('Finite value: ',o[prop])
                    counter++
                }
            }
        }
    }

    getFiniteValue(req.body)
    reply.send({message: `number of pairs ${counter}`})
}

module.exports = {
    postData
}