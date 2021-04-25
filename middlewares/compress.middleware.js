const {heliumCompress} = require("../utils/compressors/heliumCompressor")

function compressor(req, res, next) {
    switch(req.body.type){
        case "helium":
            res.compressed =  heliumCompress(req.body.inputString);
            break
        case "lz":
            // TO DO
        default:
            res.compressed =  heliumCompress(req.body.inputString);
    }
    next()
}

module.exports = { compressor }