const mongoose = require("mongoose");
// slug = require('mongoose-slug-generator');
// mongoose.plugin(slug);

const animesSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			required: true,
			trim: true,
			unique: true,
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
		episodios: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		temas: {
			type: Array,
			required: true,
			trim: true,
		},
		lancamento: {
			type: Boolean,
			required: true,
			trim: true,
		},
		nomeIngles: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
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
		slug: {

				type: String,
				required: true,
				trim: true,
				lowercase: true,
		},
		imagem: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},

    }
);


module.exports = mongoose.model("Animes", animesSchema);