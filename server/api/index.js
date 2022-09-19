const express=require('express');
const router =express.Router();

router.use("/todos",require("./router"));


module.exports=router;