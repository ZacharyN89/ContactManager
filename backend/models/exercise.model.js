const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
 	title: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	sets: {
		type: Number,
		required: true,
	},
	reps: {
		type: Number,
		required: true,
	},
	day: {
		type: String,
		required: true,
	}
});
const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;