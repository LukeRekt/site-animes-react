const express = require('express');
const router = express.Router();

//importar controllers
const { register, login, logout, getLoggedInUser, buscarUser } = require("../controllers/user")
const { registera, listar} = require("../controllers/animes")
//importar middlewares
const { userRegisterValidator, userById } = require('../middlewares/user')
const { verifyToken } = require("../middlewares/auth")

//api routes

router.post("/registrar", userRegisterValidator, register);
router.post("/login", login);
router.get("/logout", logout)

router.get("/user", verifyToken, userById, getLoggedInUser);

router.post("/animes", registera)

router.get("/getanim", listar)

//editar infos

// router.post("/edit", verifyToken, userById, Teste)

//buscar usuario
router.post("/buscar", buscarUser)

module.exports = router;