const mongoose = require("mongoose")

const userSchema =  mongoose.Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		goal: { type: String, required: true },
		height: { type: String, required: true },
		weight: { type: String, required: true },
		age: { type: String, required: true },
		active: { type: String, required: true },
		workout: { type: String, required: true },
		
	},
	{ versionKey: false, timestamps: true }
);

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel