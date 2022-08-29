const Temporadas = require("../models/temporadas")
const fs = require('fs');
require("dotenv").config();

exports.addTemporada = async (req, res, next) => {
    //testar se o user ja existe


    //se novo user, criar novo user
    const temporada = new Temporadas(req.body);
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
    await Temporadas.findOne({ idAnime }).limit(20).exec((err, animes) => {

        //retornar resposta para o usuario

        return res.json({
            temporadas,
        });
    });
};


