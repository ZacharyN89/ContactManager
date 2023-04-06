const router = require('express').Router();
let Exercise = require('../models/exercise.model.js');

router.route('/').get((req, res) =>
{
	Exercise.find()
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json('Error: +' + err));
});

router.route('/add').post((req, res) =>
{
	const title = req.body.title;
	const sets = req.body.sets;
	const reps = req.body.reps;
	const day = req.body.day;

	const newExercise = new Exercise({ title, sets, reps, day })

	newExercise.save()
		.then(() => res.json("EXERCISE ADDED"))
		.catch(err => res.status(400).json('Error: +' + err));
});


module.exports = router;