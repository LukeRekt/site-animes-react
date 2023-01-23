const mongoose = require("mongoose");
// slug = require('mongoose-slug-generator');
// mongoose.plugin(slug);

const animesSchema = new mongoose.Schema(
	{
		idUsuario: {
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
		comentario: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		dataComentario: {
			type: Date,
			required: true,
			trim: true,
			lowercase: false,
		},

    }
);


module.exports = mongoose.model("Animes", animesSchema);