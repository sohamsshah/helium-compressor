const {heliumDecompress} = require("../utils/compressors/heliumCompressor")

function decompressor(req, res, next) {
    
    switch(req.body.type){
        case "helium":
            res.decompressed =  heliumDecompress(req.body.inputString);
            break
        case "gzip":
            // TO DO
        default:
            res.decompressed =  heliumDecompress(req.body.inputString);
    }
    next()
}

module.exports = { decompressor }