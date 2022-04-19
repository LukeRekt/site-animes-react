const Progresso = require("../models/Progresso");

exports.getProgresso = async (req, res) => {
//     Progresso.findOne({ "idAnime": req.body.idAnime, "nomeUsuario": req.body.nomeUsuario, "temporadaAnime": req.body.temporadaAnime, "episodioAnime": req.body.episodioAnime,  })
//         .exec((err, subscribe) => {
//             if (err) return res.status(400).send(err)
           
//             let result = false;
//             if (subscribe.tempoAtual > 10) {
//                 result = subscribe.tempoAtual;
//             }
//             res.status(200).json({ success: true, tempoAtual: result })
            
//         })

// };
const filter = { idAnime: req.body.idAnime, nomeUsuario: req.body.nomeUsuario, temporadaAnime: req.body.temporadaAnime, episodioAnime: req.body.episodioAnime, nomeAnime: req.body.nomeAnime };
const update = { idAnime: req.body.idAnime, nomeUsuario: req.body.nomeUsuario, temporadaAnime: req.body.temporadaAnime, episodioAnime: req.body.episodioAnime, tempoTotal: req.body.tempoTotal, nomeEp: req.body.nomeEp, animeImagem: req.body.animeImagem, nomeAnime: req.body.nomeAnime};
const doc = await Progresso.findOneAndUpdate(filter, update,{
  returnOriginal: false,
  new: true, 
  upsert: true
});
 if(doc.tempoAtual > 10){
     res.status(200).json({ tempoAtual: doc.tempoAtual, tempoTotal: doc.tempoTotal })
 }
// else if(doc.tempoAtual > 10){
//     result = doc.tempoAtual;
// }

};


exports.addProgresso = async (req, res) => {
    const progress = new Progresso(req.body);
    progress.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

};
exports.updateProgresso = async (req, res) => {
    const filter = { idAnime: req.body.idAnime, nomeUsuario: req.body.nomeUsuario, temporadaAnime: req.body.temporadaAnime, episodioAnime: req.body.episodioAnime};
    const update = { tempoAtual: req.body.tempoAtual, tempoTotal: req.body.tempoTotal, nomeEp: req.body.nomeEp, animeImagem: req.body.animeImagem };
    
    const doc = await Progresso.findOneAndUpdate(filter, update, {
      returnOriginal: false,
      new: true, 
      upsert: true
    });
    res.status(200).json({ novoTempo: doc.tempoAtual })

};

//por enquanto nao sera utilizado
exports.remProgresso = async (req, res) => {
    Progresso.findOneAndDelete({nomeUsuario: req.body.nomeUsuario, idAnime: req.body.idAnime, temporadaAnime: req.body.temporadaAnime, episodioAnime: req.body.episodioAnime})
    .exec((err, doc) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true, doc })
    })
};

 exports.getAllProgresso = async (req, res) => {

     Progresso.find({ 'nomeUsuario': req.body.nomeUsuario })
        .exec((err, progressos) => {
            if (err) return res.status(400).send(err);
             return res.status(200).json( {progresso: progressos} )
         })
 };

