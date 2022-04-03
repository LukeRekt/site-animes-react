const mongoose = require("mongoose");

const animesSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			required: true,
			trim: true,
		},
		nome: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		descricao: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		nota: {
			type: Number,
			required: true,
			trim: true,
		},
		temporadas: {
			type: Number,
			required: true,
			trim: true,
		},
		episodios: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		lancamento: {
			type: Boolean,
			required: true,
			trim: true,
		},
		diaLancamento: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		especiais: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		filmes: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		autor: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		diretor: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		estudio: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		ano: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		imagem: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		}
    }
);


module.exports = mongoose.model("Animes", animesSchema);