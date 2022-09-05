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

exports.listarNovos = async (req, res) => {
    //buscar usuario baseado no email

    await Anime.find({}).sort({ _id: -1 }).exec((err, animes) => {

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

        const dados = JSON.parse(req.body.data)
    // const { nome } = req.user;
    let video = "default.mp4";
    let videoDublado = "default.mp4";
    let filename = "capapadrao.png";

    let testando = dados.nomeAnime.split(' ').join('-');
    let file = null;
    if(req.files){
        videoNome = req.files.video.name;
        video = req.files.video;

        videoDubladoNome = "Dub" + req.files.videoDublado.name;
        videoDub = req.files.videoDublado;

        filename = req.files.screenshot.name;
        file = req.files.screenshot;

        let uploadPath = __dirname + `../../public/animes/${testando}/t${dados.temporada}/` + videoNome;
        let uploadPathDub = __dirname + `../../public/animes/${testando}/t${dados.temporada}/` + videoDubladoNome;
        let uploadPathImg = __dirname + `../../public/animes/${testando}/t${dados.temporada}/` + filename;

        video.mv(uploadPath);;
        videoDub.mv(uploadPathDub);;
        file.mv(uploadPathImg);;
    }

    const filter = {id: dados.id, nome: dados.nome, temporada: dados.temporada, numero: dados.numero}
    const update = {
       id: dados.id,
       nome: dados.nome,
       nomeAnime: dados.nomeAnime,
       numero: dados.numero,
       temporada: dados.temporada,
       video: `static/animes/${testando}/t${dados.temporada}/${videoNome}`,
       videoDublado: `static/animes/${testando}/t${dados.temporada}/${videoDubladoNome}`,
       animeImagem:  `static/animes/${testando}/t${dados.temporada}/${filename}`,
       inicioAbertura: dados.inicioAbertura,
       fimAbertura: dados.fimAbertura};
   
    const doc = await Episodios.findOneAndUpdate(filter, update, {
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

    //se novo user, criar novo user
    //  const episode = new Episodios(JSON.parse(req.body.data));
    //  await episode.save();

//     res.status(201).json({
//         message: "Cadastrado com sucesso!",
//     });
// };

}

exports.getEpisode = async (req, res) => {
    //buscar usuario baseado no email
    const temporada = req.params.temporada
    const id = req.params.id
    const numero = req.params.numero;
    await Episodios.findOne({ temporada, id, numero }).limit().exec((err, episodios) => {

        //retornar resposta para o usuario

        return res.json({
            episodios,
        });
    });
};


exports.getEpisodes = async (req, res) => {
    //buscar usuario baseado no email
    const temporada = req.params.temporada
    const id = req.params.id
    await Episodios.find({ temporada, id }).limit().exec((err, episodios) => {

        //retornar resposta para o usuario

        return res.json({
            episodios,
        });
    });
};
exports.getSeasonEpisodes = async (req, res) => {
    //buscar usuario baseado no email
    const temporada = req.params.temporada
    const id = req.params.id
    await Episodios.find({id, temporada }).exec((err, episodios) => {

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
exports.getAllEpisodesNovos = async (req, res) => {
    const id = req.params.id
    //buscar usuario baseado no email

    if (isNaN(id)) return res.json({
        Mensagem: "Número de eps inválido"
    });
    await Episodios.find({}).sort({ _id: -1 }).limit(id).exec((err, episodios) => {

        //retornar resposta para o usuario
        return res.json({
            episodios,
        });
    });
};

exports.setTeste = async (req, res) => {
    const dados = JSON.parse(req.body.data)
    // const { nome } = req.user;
    let filename = "capapadrao.png";
    let testando = dados.nome.split(' ').join('-');
    let file = null;
    if(req.files){
        filename = req.files.screenshot.name;
        file = req.files.screenshot;

        let createFolder = __dirname + `../../public/animes/${testando}/`;
        let uploadPath = __dirname + `../../public/animes/${testando}/` + filename;
        
        fs.mkdirSync(createFolder);
        file.mv(uploadPath);;
        
    }
    //  const filename = req.files.screenshot.name;
    //  const file = req.files.screenshot;
     
     
     
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
        nomeIngles: dados.nomeIngles,
        especiais: dados.especiais,
        filmes: dados.filmes,
        autor: dados.autor,
        diretor: dados.diretor,
        estudio: dados.estudio,
        ano: dados.ano,
        imagem: `static/animes/${testando}/${filename}`,
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

exports.setUpdateEpisode = async (req, res) => {
    const dados = JSON.parse(req.body.data)

    console.log(req.body.data)
     const filter = {
        id: dados.id,
        numero: dados.numero,
        temporada:dados.temporada,
        }
     const update = {
        id: dados.id,
        nome: dados.nome,
        video: dados.video,
        videoDublado: dados.videoDublado,
        thumbnail: dados.thumbnail,
        inicioAbertura: dados.inicioAbertura,
        fimAbertura: dados.fimAbertura,
};
        
    
     const doc = await Episodios.findOneAndUpdate(filter, update, {
        returnOriginal: false,
        new: true, 
        upsert: true
     });
    
     res.status(200).json({ imagem: doc.imagem })

    // console.log(req.body);
    // if(req.files == null){
    //     return res.status(200);    
    // }

}

exports.remEpisodio = async (req, res) => {
    const dados = JSON.parse(req.body.data)
    console.log(dados);

     Episodios.findOneAndDelete({id: dados.id, numero: dados.numero, temporada: dados.temporada})
     .exec((err, doc) => {
         if (err) return res.status(400).json({ success: false, err });
         res.status(200).json({ success: true, doc })
     })
};