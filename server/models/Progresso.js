const mongoose = require("mongoose");

const progressoSchema = new mongoose.Schema(
	{
		idAnime: {
			type: Number,
			required: true,
			trim: true,
		},
		nomeUsuario: {
			type: String,
			required: true,
			trim: true,
		},
		temporadaAnime: {
			type: Number,
			required: true,
			trim: true,
		},
		episodioAnime: {
			type: Number,
			required:true,
			trim: true,
		},
        tempoAtual:{
            type: Number,
            require: false,
            trim: true,
        }
    }
);


module.exports = mongoose.model("Progresso", progressoSchema);