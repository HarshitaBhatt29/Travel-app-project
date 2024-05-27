const express = require('express');
const router = express.Router();

 const hotels = require("../hotel");

 router.route("/")
 .get((req,res)=>{
    res.json(hotels.data)
 })
 module.exports = router;