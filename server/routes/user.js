const express = require('express');
const router = express.Router();

//importar controllers
const {register, login, logout} = require("../controllers/user")
//importar middlewares
const {userRegisterValidator} = require('../middlewares/user')
//api routes

router.post("/registrar", userRegisterValidator, register);
router.post("/login", login);
router.get("/logout", logout)
module.exports = router;