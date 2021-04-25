const express = require("express");
const router = express.Router();

const {decompressor} = require("./../middlewares/decompress.middleware")
router.use(express.json());


router.use("/decompress", decompressor)
router.route("/decompress")
.get((req,res) => {
    res.json({success:true, page: "decompress"});
})
.post((req,res) => {
  res.json({decompressed: res.decompressed})
})

module.exports = router