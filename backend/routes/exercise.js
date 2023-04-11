const router = require('express').Router();
let Exercise = require('../models/exercise.model.js');

router.route('/').get((req, res) =>
{
	Exercise.find()
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json('Error: +' + err));
});

router.route('/:email').get((req, res) =>
{
	var email = req.body.email;
	Exercise.find({ email: email })
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json('Error: +' + err));
});

router.route('/add').post((req, res) =>
{
	const title = req.body.title;
	const sets = req.body.sets;
	const reps = req.body.reps;
	const day = req.body.day;
	const email = req.body.email;

	const newExercise = new Exercise({ title, sets, reps, day, email })

	newExercise.save()
		.then(() => res.json("EXERCISE ADDED"))
		.catch(err => res.status(400).json('Error: +' + err));
});

router.route('/delete/:email').delete((req, res) =>
{
	var email = req.body.email;
	var title = req.body.title;
	Exercise.findOneAndDelete({ email: email, title: title })
		.then(() => res.json("EXERCISE DELETED!"))
		.catch(err => res.status(400).json('Error: +' + err));
});

router.route('/update/:email').post((req, res) =>
{
	var email = req.body.email;
	var title = req.body.title;
	Exercise.findOne({ email: email, title: title })
		.then((exercise) => {
			exercise.sets = req.body.sets;
			exercise.reps = req.body.reps;
			exercise.day = req.body.day;

			exercise.save()
				.then(() => res.json("EXERCISE UPDATED!"))
				.catch(err => res.status(400).json('Error: +' + err));
		})
});

module.exports = router;