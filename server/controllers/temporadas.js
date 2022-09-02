const Temporadas = require("../models/temporadas")
const Anime = require("../models/animes")
const fs = require('fs');
require("dotenv").config();

exports.addTemporada = async (req, res, next) => {
    //testar se o user ja existe
    teste = JSON.parse(req.body.data)
    const id = parseInt(teste.idAnime)
        
    
     await Anime.findOne({ id }).limit(20).exec((err, animes) => {
         console.log(animes)
         let testando = animes.nome.split(' ').join('-');
         let createFolder = __dirname + `../../public/animes/${testando}/t${teste.temporadaAnime}`;
         fs.mkdirSync(createFolder);

         //retornar resposta para o usuario
          console.log(animes)

     });



    //se novo user, criar novo user
     const temporada = new Temporadas(JSON.parse(req.body.data));
     await temporada.save();

    res.status(201).json({
        message: "Temporada cadastrada com sucesso!",
    });
    next();
};
exports.listarTemporada = async (req, res) => {
    //buscar usuario baseado no email

    await Temporadas.find({}).exec((err, animes) => {

        //retornar resposta para o usuario

        return res.json({
            temporadas,
        });
    });
};

exports.getTemporada = async (req, res) => {
    //buscar usuario baseado no email
    const idAnime = req.params.idAnime
    await Temporadas.find({ idAnime }).limit(20).exec((err, temporadas) => {

        //retornar resposta para o usuario

        return res.json({
            temporadas,
        });
    });
};


