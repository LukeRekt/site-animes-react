const mongoose = require("mongoose");

const temporadasSchema = new mongoose.Schema(
	{
		idAnime: {
			type: Number,
			required: true,
			trim: true,
		},
		temporadaAnime: {
			type: Number,
			required: true,
			trim: true,
		},
		nomeTemporada: {
			type: String,
			required:true,
			trim: true,
		},
    }
);


module.exports = mongoose.model("Temporadas", temporadasSchema);