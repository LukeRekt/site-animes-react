const mongoose = require("mongoose");

const animesSchema = new mongoose.Schema(
	{
		nome: {
			type: String,
			required: true,
			trim: true,
			lowercase: false,
		}
    }
);


module.exports = mongoose.model("Animes", animesSchema);