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
	},
  email: {
    type: String,
    required: true,
  }
});
const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;

/*
hopefully working examples of crud operations with this schema

create:
const Exercise = require('./exercise.js')

const newExercise = new Exercise({
  title: 'Bench Press',
  sets: 3,
  reps: 10,
  day: 'Monday'
})

newExercise.save()
    .then(exercise => {
        console.log(`New exercise created: ${exercise}`);
    })
    .catch(error => {
        console.error(`Error creating new exercise: ${error}`);
    });



read:
const Exercise = require('./exercise.js')

Exercise.find({})
    .then(exercises => {
        console.log(`All exercises: ${exercises}`);
    })
    .catch(error => {
        console.error(`Error getting exercises: ${error}`);
    });



update:
const Exercise = require('./exercise');

const exerciseTitle = "Bench Press";
const updatedExercise = {
  title: "Barbell Bench Press",
  sets: 4,
  reps: 12,
  day: "Monday",
};

Exercise.findOneAndUpdate({ title: exerciseTitle }, updatedExercise, { new: true })
  .then(exercise => {
    if (exercise) {
      console.log(`Updated exercise: ${exercise.title}`);
      console.log(exercise);
    } else {
      console.log(`Exercise with title ${exerciseTitle} not found`);
    }
  })
  .catch(err => console.error(err));



delete:
const Exercise = require('./exercise.js')

const exerciseTitle = "Bench Press";

Exercise.findOneAndDelete({ title: exerciseTitle })
  .then(exercise => {
    if (exercise) {
      console.log(`Deleted exercise: ${exercise.title}`);
      console.log(exercise);
    } else {
      console.log(`Exercise with title ${exerciseTitle} not found`);
    }
  })
  .catch(err => console.error(err));
*/