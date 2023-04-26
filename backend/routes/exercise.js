const router = require('express').Router();
let Exercise = require('../models/exercise.model.js');

router.route('/find').post(async(req, res) =>
{
 	const findUser = Exercise.find()
    .then(users => res.json(users)) // This outputs the json
    .catch(error => res.status(400).json('Error: +' +error)) // Catches any errors that occur
 });

 router.route('/findDay').post(async(req, res) =>
{
 	const findUser = Exercise.find({email: req.body.email, day: req.body.day})
    .then(users => res.json(users)) // This outputs the json
    .catch(error => res.status(400).json('Error: +' +error)) // Catches any errors that occur
 });
   
router.route('/add').post((req, res) =>
{
	const email = req.body.email;
	const title = req.body.title;
	const sets = req.body.sets;
	const reps = req.body.reps;
	const day = req.body.day;

	const newExercise = new Exercise({ email, title, sets, reps, day })

	newExercise.save()
		.then(() => res.json("EXERCISE ADDED"))
		.catch(err => res.status(400).json('Error: +' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
    .then((exercise) => {

		exercise.title = req.body.title;
		exercise.sets = req.body.sets;
		exercise.reps = req.body.reps;
		exercise.day = req.body.day;

        exercise.save()
            .then(() => res.json("EXERCISE UPDATED!"))
            .catch(err => res.status(400).json('Error: +' + err));
    })
    .catch(err => res.status(400).json('Error: +' +err));
});

router.route('/delete/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("EXERCISE DELETED!"))
    .catch(err => res.status(400).json('Error: +' + err));
});

module.exports = router;