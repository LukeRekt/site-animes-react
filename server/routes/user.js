const express = require('express');
const router = express.Router();

//importar controllers
const {register, login, logout, getLoggedInUser, Teste} = require("../controllers/user")
//importar middlewares
const {userRegisterValidator, userById} = require('../middlewares/user')
const {verifyToken} = require("../middlewares/auth")

//api routes

router.post("/registrar", userRegisterValidator, register);
router.post("/login", login);
router.get("/logout", logout)

router.get("/user", verifyToken, userById, getLoggedInUser);

//editar infos

router.post("/edit", verifyToken, userById, Teste)

module.exports = router;