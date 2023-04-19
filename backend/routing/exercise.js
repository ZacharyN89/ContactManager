const router = require('express').Router();
let Exercise = require('../models/exercise.model.js');

router.route('/').get((req, res) =>
{
	Exercise.find()
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json('Error: +' + err));
});

router.route('/findDay').post((req, res) =>
{   let filter = {email: req.body.email, day : req.body.day};
	Exercise.find(filter)
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json('Error: +' + err));
});

router.route('/:email').get((req, res) =>
{
	var res_email = req.body.email;
	Exercise.find({ email: res_email })
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json('Error: +' + err));
 });
   
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: +' + err));
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