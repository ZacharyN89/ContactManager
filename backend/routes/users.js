const router = require('express').Router();
let User = require('../models/users.model.js');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: +' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: +' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const fName = req.body.fName;
    const lName = req.body.lName;

    const newUser = new User({username,password,fName,lName})

    newUser.save()
    .then(() => res.json("USER ADDED"))
    .catch(err => res.status(400).json('Error: +' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then((user) => {
        user.username = req.body.username;
        user.password = req.body.password;
        user.fName = req.body.fName;
        user.lName = req.body.lName;
    
        user.save()
            .then(() => res.json("USER UPDATED!"))
            .catch(err => res.status(400).json('Error: +' + err));
    })
    .catch(err => res.status(400).json('Error: +' +err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json("USER DELETED!"))
    .catch(err => res.status(400).json('Error: +' + err));
});

module.exports = router;