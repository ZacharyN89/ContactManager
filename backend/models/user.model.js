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
	fname: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	lname: {
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



/*
hopefully working examples of crud operations with this schema

create:
const User = require('./userSchema');

const user = new User({
  email: 'example@example.com',
  password: 'mypassword',
  fname: 'John',
  lname: 'Doe'
});

user.save()
  .then(() => console.log('User created successfully!'))
  .catch(error => console.error(error));



read by email:
const User = require('./userSchema');

User.findOne({ email: 'example@example.com' })
  .then(user => console.log(user))
  .catch(error => console.error(error));



update fname:
const User = require('./userSchema');

User.findOneAndUpdate(
  { email: 'example@example.com' },
  { fname: 'Jane' },
  { new: true }
)
  .then(user => console.log(user))
  .catch(error => console.error(error));



delete:
const User = require('./userSchema');

User.findOneAndDelete({ email: 'example@example.com' })
  .then(() => console.log('User deleted successfully!'))
  .catch(error => console.error(error));
*/