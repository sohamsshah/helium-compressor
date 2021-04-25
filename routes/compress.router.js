const express = require("express");
const router = express.Router();

const {compressor} = require("./../middlewares/compress.middleware")

router.use(express.json());

router.use("/compress", compressor)
router.route("/compress")
.get((req,res) => {
    res.json({success:true, page: "compress"});
})
.post((req,res) => {

  res.json({compressed: res.compressed})
})

module.exports = router