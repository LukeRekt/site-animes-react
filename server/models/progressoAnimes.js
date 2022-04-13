const mongoose = require("mongoose");

const progressoAnimesSchema = new mongoose.Schema(
	{
		nomeUsuario: {
			type: String,
			required: true,
			trim: true,
		},
		idAnime: {
			type: Number,
			required: true,
			trim: true,
		},
        tempoAtual:{
            type: Number,
            require: false,
            trim: true,
        }
    }
);


module.exports = mongoose.model("ProgessoAnimes", progressoAnimesSchema);