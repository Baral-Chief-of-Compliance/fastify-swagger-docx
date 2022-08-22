function convertJson(json){
    var obj = {};
    json.forEach(function (elem) {
        let key = elem["key"];
        let value = elem["value"];
        var o = { [key]: value };
        obj = Object.assign(obj, o);
    });

    return obj
}


module.exports = {
    convertJson
}