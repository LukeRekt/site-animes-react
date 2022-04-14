const Favoritos = require("../models/Favoritos");

exports.getFavorito = async (req, res) => {
    Favoritos.find({ "idAnime": req.body.idAnime, "nomeUsuario": req.body.nomeUsuario })
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
    const favorite = new Favoritos(req.body);
    favorite.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

};
exports.remFavorito = async (req, res) => {
    Favoritos.findOneAndDelete({nomeUsuario: req.body.nomeUsuario, idAnime: req.body.idAnime })
    .exec((err, doc) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true, doc })
    })
};

exports.getAllFavoritos = async (req, res) => {

    //Need to find all of the Users that I am subscribing to From Subscriber Collection 
    Favoritos.find({ 'nomeUsuario': req.body.nomeUsuario })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json( {favoritos: favorites} )
        })
};
