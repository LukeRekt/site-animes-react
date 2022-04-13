const mongoose = require("mongoose");

const favoritosSchema = new mongoose.Schema(
	{
		nomeUsuario: {
			type: String,
			required: true,
			trim: true,
		},
		nomeAnime: {
			type: String,
			required: true,
			trim: true,
		},
		idAnime: {
			type: Number,
			required: true,
			trim: true,
		},
    }
);


module.exports = mongoose.model("Favoritos", favoritosSchema);