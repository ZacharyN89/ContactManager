const mongoose = require('mongoose')
const Schema = mongoose.Schema

var validateEmail = function (email)
{
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email)
};

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		lowercase: true,
		validate: [validateEmail, 'Please fill a valid email address'], //checking format not email link verification
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 5
	},
	fName: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	lName: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	verified: {
		type: Boolean,
		required: true,
		default: false
	},
}, {
	timestamps: true,
});
const User = mongoose.model('User', userSchema);
module.exports = User;