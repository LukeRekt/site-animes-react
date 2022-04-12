const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
//importar controllers
const { register, login, logout, getLoggedInUser, buscarUser, getFavorito } = require("../controllers/user")
const { registera, listar, getanime, getEpisodes, getAllEpisodes, getEpisodespage, AddEpisode, } = require("../controllers/animes")
//importar middlewares
const { userRegisterValidator, userById } = require('../middlewares/user')
const { verifyToken } = require("../middlewares/auth")

//api routes

router.post("/registrar", userRegisterValidator, register);
router.post("/login", login);
router.get("/logout", logout)

router.get("/user", verifyToken, userById, getLoggedInUser);


//animes

router.post("/addanimes", verifyToken, userById, registera)

router.get("/getanim", listar)

router.get("/getanim/:id", getanime)

router.post("/favoritar",   verifyToken, userById, getFavorito)
//Episodios

router.post("/getanim/addep/", AddEpisode)

router.get("/getanim/episodios/todos", getAllEpisodes)

router.get("/getanim/episodios/:id", getEpisodespage)

router.get("/getanim/episodios/:temporada/:id", getEpisodes)

//editar infos

// router.post("/edit", verifyToken, userById, Teste)

//buscar usuario
router.post("/buscar", buscarUser)

//

module.exports = router;