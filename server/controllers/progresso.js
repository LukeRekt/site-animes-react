const Progresso = require("../models/Progresso");

exports.getProgresso = async (req, res) => {
    Progresso.findOne({ "idAnime": req.body.idAnime, "nomeUsuario": req.body.nomeUsuario, "temporadaAnime": req.body.temporadaAnime })
        .exec((err, subscribe) => {
            if (err) return res.status(400).send(err)
           
            let result = false;
            if (subscribe.tempoAtual > 10) {
                result = subscribe.tempoAtual;
            }
            res.status(200).json({ success: true, tempoAtual: result })
            
        })

};


exports.addProgresso = async (req, res) => {
    const progress = new Progresso(req.body);
    progress.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

};
// exports.remFavorito = async (req, res) => {
//     Favoritos.findOneAndDelete({nomeUsuario: req.body.nomeUsuario, idAnime: req.body.idAnime })
//     .exec((err, doc) => {
//         if (err) return res.status(400).json({ success: false, err });
//         res.status(200).json({ success: true, doc })
//     })
// };

// exports.getAllFavoritos = async (req, res) => {

//     //Need to find all of the Users that I am subscribing to From Subscriber Collection 
//     Favoritos.find({ 'nomeUsuario': req.body.nomeUsuario })
//         .exec((err, favorites) => {
//             if (err) return res.status(400).send(err);
//             return res.status(200).json( {favoritos: favorites} )
//         })
// };

