const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
//importar controllers
const { register, login, logout, getLoggedInUser, buscarUser, trocarAvatar,  } = require("../controllers/user")
const { addAnime, listar, getanime, getEpisode, getEpisodes, getAllEpisodes,
     getEpisodespage, getSeasonEpisodes, AddEpisode,
      setTeste, setUpdateEpisode, remEpisodio, listarNovos} = require("../controllers/animes")
const { getFavorito, getAllFavoritos, addFavorito, remFavorito } = require("../controllers/favoritos")
const { getProgresso, addProgresso, remProgresso, updateProgresso, getAllProgresso } = require("../controllers/progresso")
//importar middlewares
const { userRegisterValidator, userById, getUserPermission } = require('../middlewares/user')
const { verifyToken } = require("../middlewares/auth");
const { addTemporada, listarTemporada, getTemporada } = require('../controllers/temporadas');

//api routes

router.post("/registrar", userRegisterValidator, register);
router.post("/login", login);
router.get("/logout", logout)

router.get("/user", verifyToken, userById, getLoggedInUser);

router.get("/adminzada", verifyToken, userById, getUserPermission);


//animes

router.post("/addanimes", verifyToken, userById, addAnime)

router.get("/getanim", listar)

router.get("/getnovosanim", listarNovos)

router.get("/getanim/:id", getanime)

//favoritos
router.post("/getfavorito", verifyToken, userById, getFavorito)
router.post("/getallfavoritos", getAllFavoritos)
router.post("/favoritar", verifyToken, userById, addFavorito)
router.post("/remfavorito", verifyToken, userById, remFavorito)

//tempo
router.post("/getprogresso", verifyToken, userById, getProgresso)
router.post("/addprogresso", verifyToken, userById, addProgresso)
router.post("/updateprogresso", verifyToken, userById, updateProgresso)
router.post("/remprogresso", verifyToken, userById, remProgresso)
router.post("/getallprogresso", getAllProgresso)

//Episodios

// router.post("/getanim/addep/", AddEpisode)

router.get("/getanim/episodios/todos/:id", getAllEpisodes)

router.get("/getanim/episodios/:id", getEpisodespage)

router.get("/getanim/episodios/:temporada/:id/:numero", getEpisode);

router.get("/getanim/episodios/:temporada/:id", getEpisodes)





router.get("/getanim/episodios/admin/:id/:temporada", getSeasonEpisodes)

router.post("/episodios/admin/editep", verifyToken, userById, getUserPermission, setUpdateEpisode)

router.post("/episodios/admin/remep", verifyToken, userById, getUserPermission, remEpisodio)

router.post("/episodios/admin/addep", AddEpisode)
//editar infos

// router.post("/edit", verifyToken, userById, Teste)

//buscar usuario
router.post("/buscar", buscarUser)

//testes
router.post("/testes", setTeste)


//teste avatar

router.post("/trocaravatar", verifyToken, userById, trocarAvatar)
// router.post("/trocaravatar", verifyToken, userById, trocarBanner)




//Temporadas
router.post("/addtemporada", verifyToken, userById, addTemporada)
router.get("/listartemporada", listarTemporada)
router.get("/gettemporada/:idAnime", getTemporada)


module.exports = router;