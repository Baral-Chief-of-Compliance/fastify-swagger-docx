const { createDocx } = require('../docx/docx')

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

    createDocx(req.body)
    
    
    // const blob = new Blob(["da"], {type: "octet-stream"});

    // const href = URL.createObjectURL(blob);

    // const a = Object.assign(document.createElement('a'), {
    //     href, 
    //     style:"display:none", 
    //     download:"myData.docx",
    // });
    // document.body.appendChild(a)

    // a.click();
    // URL.revokeObjectURL(href);
    // a.remove();


    reply.send({message: `number of pairs  ${counter}`})
}

module.exports = {
    postData
}