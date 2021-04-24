const express = require("express");
const router = express.Router();

const {heliumZip, heliumUnZip} = require("./../utils/compressors/standardCompressor")

router.use(express.json());

router.route("/")
.get((req,res) => {
    res.json({success:true});
})
.post((req,res) => {
  if(req.body.operation === "zip"){
    const compressed = heliumZip(req.body.inputString);
    res.json({compressed})
  }
  else if(req.body.operation === "unzip"){
    const uncompressed = heliumUnZip(req.body.inputString);
    res.json({uncompressed})  
  }
  
})

module.exports = router