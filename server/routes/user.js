const express = require('express');
const router = express.Router();

//importar controllers
const {register} = require("../controllers/user")
//importar middlewares
const {userRegisterValidator} = require('../middlewares/user')
//api routes

router.post("/registrar", userRegisterValidator, register);

module.exports = router;