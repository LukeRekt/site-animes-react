const mongoose = require("mongoose");
const uuidv1 = require("uuidv1");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: false,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
		},
		userAvatar: {
			type: String,
			required: true,
		},
		userBanner: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false
		},
		hashedPassword: {
			type: String,
			required: true,
		},
		salt: String,
	},
	{
		timestamps: true,
	}
);

//campo virtual
userSchema.virtual("password").set(function (password) {
	// cria uma variavel temporaria com nome de _password
	this._password = password;

	// uuidv1 gera uma timestamp
	this.salt = uuidv1();

	// encripta a funcao de chamada de senhas
	this.hashedPassword = this.encryptPassword(password);
});

//metodos
userSchema.methods = {
	encryptPassword: function (password) {
		if (!password) return "";

		try {
			return crypto
				.createHmac("sha256", this.salt)
				.update(password)
				.digest("hex");
		} catch (err) {
			return "";
		}
	},
	authenticate: function (plainText) {
		return this.encryptPassword(plainText) === this.hashedPassword;
	},
};

module.exports = mongoose.model("User", userSchema);