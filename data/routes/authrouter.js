const express = require('express');
//const CryptoJS = require('crypto-js');
//const jwt = require('jsonwebtoken');
//const User = require("../../model/user.model");

const signupHandler = require("../../controllers/signupController");
const loginHandler = require("../../controllers/loginController");
const {decode} = require('punycode');

const router = express.Router();

router.route("/register" )
.post(signupHandler)

 router.route("/login")
 .post(loginHandler)


 
 module.exports = router;