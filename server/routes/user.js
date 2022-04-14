const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
//importar controllers
const { register, login, logout, getLoggedInUser, buscarUser } = require("../controllers/user")
const { registera, listar, getanime, getEpisodes, getAllEpisodes, getEpisodespage, AddEpisode, } = require("../controllers/animes")
const { getFavorito, getAllFavoritos, addFavorito, remFavorito } = require("../controllers/favoritos")
const { getProgresso, addProgresso } = require("../controllers/progresso")
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

//favoritos
router.post("/getfavorito", verifyToken, userById, getFavorito)
router.post("/getallfavoritos", getAllFavoritos)
router.post("/favoritar", verifyToken, userById, addFavorito)
router.post("/remfavorito", verifyToken, userById, remFavorito)

//tempo
router.post("/getprogresso", verifyToken, userById, getProgresso)
router.post("/addprogresso", verifyToken, userById, addProgresso)

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