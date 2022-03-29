const Anime = require("../models/animes")
const Episodios = require("../models/episodios")
require("dotenv").config();

exports.registera = async (req, res, next) => {
    //testar se o user ja existe


    //se novo user, criar novo user
    const anime = new Anime(req.body);
    await anime.save();

    res.status(201).json({
        message: "Cadastrado com sucesso!",
    });
    next();
};
exports.listar = async (req, res) => {
    //buscar usuario baseado no email

    await Anime.find({}).exec((err, animes) => {

        //retornar resposta para o usuario

        return res.json({
            animes,
        });
    });
};

exports.getanime = async (req, res) => {
    //buscar usuario baseado no email
    const id = req.params.id
    await Anime.findOne({ id }).limit(20).exec((err, animes) => {

        //retornar resposta para o usuario

        return res.json({
            animes,
        });
    });
};


exports.AddEpisode = async (req, res) => {
    //testar se o user ja existe


    //se novo user, criar novo user
    const episode = new Episodios(req.body);
    await episode.save();

    res.status(201).json({
        message: "Cadastrado com sucesso!",
    });
};
exports.getEpisodes = async (req, res) => {
    //buscar usuario baseado no email
    const id = req.params.id
    await Episodios.find({ id }).exec((err, episodios) => {

        //retornar resposta para o usuario

        return res.json({
            episodios,
        });
    });
};
exports.getAllEpisodes = async (req, res) => {
    //buscar usuario baseado no email
    await Episodios.find({}).limit(20).exec((err, episodios) => {

        //retornar resposta para o usuario
        return res.json({
            episodios,
        });
    });
};

