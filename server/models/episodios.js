const mongoose = require("mongoose");

const episodeosSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			required: true,
			trim: true,
		},
		numero: {
			type: Number,
			required: true,
			trim: true,
			lowercase: false,
		},
		nome: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		},
		video: {
			type: String,
			required: true,
			trim: true,
		},
		
    }
);


module.exports = mongoose.model("Episodios", episodeosSchema);