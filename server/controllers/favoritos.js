const Favoritos = require("../models/Favoritos");

exports.getFavorito = async (req, res) => {
    Favorito.find({ "movieId": req.body.movieId, "userFrom": req.body.userFrom })
        .exec((err, subscribe) => {
            if (err) return res.status(400).send(err)

            let result = false;
            if (subscribe.length !== 0) {
                result = true
            }

            res.status(200).json({ success: true, subcribed: result })
        })

};


exports.addFavorito = async (req, res) => {
    const favorite = new Favorito(req.body);
console.log(req.body)
    favorite.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

};
exports.remFavorito = async (req, res) => {
    let nome = req.body.nomeUsuario
    let idAnime = req.body.idAnime
    console.log(nome)
    Favoritos.findOneAndDelete({nomeUsuario: nome, idAnime: idAnime })
    .exec((err, doc) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true, doc })
    })
};

