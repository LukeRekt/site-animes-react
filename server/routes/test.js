const express = require('express');
const router = express.Router();

//importar controllers
const {getTeste} = require("../controllers/teste")
//importar middlewares

//api routes
router.get('/teste', getTeste);

module.exports = router;
