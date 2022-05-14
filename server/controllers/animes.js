const Anime = require("../models/animes")
const Episodios = require("../models/episodios")
const fs = require('fs');
require("dotenv").config();

exports.addAnime = async (req, res, next) => {
    //testar se o user ja existe


    //se novo user, criar novo user
    const anime = new Anime(req.body);
    await anime.save();

    res.status(201).json({
        message: "Anime cadastrado com sucesso!",
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
    const temporada = req.params.temporada
    const id = req.params.id
    await Episodios.find({ temporada, id }).exec((err, episodios) => {

        //retornar resposta para o usuario

        return res.json({
            episodios,
        });
    });
};
exports.getEpisodespage = async (req, res) => {
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
    const id = req.params.id
    //buscar usuario baseado no email

    if (isNaN(id)) return res.json({
        Mensagem: "Número de eps inválido"
    });
    await Episodios.find({}).limit(id).exec((err, episodios) => {

        //retornar resposta para o usuario
        return res.json({
            episodios,
        });
    });
};

exports.setTeste = async (req, res) => {
    const dados = JSON.parse(req.body.data)
    // const { nome } = req.user;
     const filename = req.files.screenshot.name;
     const file = req.files.screenshot;
     let uploadPath = __dirname + "../../public/imagens/assets/capasanimes/" + filename;
     file.mv(uploadPath);;

     const filter = {nome: dados.nome}
     const update = {
        id: dados.id,
        nome: dados.nome,
        descricao: dados.descricao,
        nota: dados.nota,
        temporadas: dados.temporadas,
        episodios: dados.episodios,
        lancamento: dados.lancamento,
        diaLancamento: dados.diaLancamento,
        especiais: dados.especiais,
        filmes: dados.filmes,
        autor: dados.autor,
        diretor: dados.diretor,
        estudio: dados.estudio,
        ano: dados.ano,
        imagem: `http://localhost:3232/static/imagens/assets/capasanimes/${filename}`,
        temas: dados.temas};
        
    
     const doc = await Anime.findOneAndUpdate(filter, update, {
        returnOriginal: false,
        new: true, 
        upsert: true
     });
    
     res.status(200).json({ imagem: doc.imagem })

    // console.log(req.body);
    // if(req.files == null){
    //     return res.status(200);    
    // }
    console.log(req.body.data)

}
