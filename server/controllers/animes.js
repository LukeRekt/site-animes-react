const Anime = require("../models/animes")
require("dotenv").config();

exports.registera = async (req, res) => {
    //testar se o user ja existe
    

    //se novo user, criar novo user
    const anime = new Anime(req.body);
    await anime.save();

    res.status(201).json({
        message: "Cadastrado com sucesso!",
    });
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
    await Anime.findOne({id}).exec((err, animes) => {

        //retornar resposta para o usuario
        
        return res.json({
            animes,
        });
    });
};


