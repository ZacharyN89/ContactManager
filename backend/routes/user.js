const router = require('express').Router();
let User = require('../models/user.model.js');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: +' + err));
});

router.route('/:email').get((req, res) => {
    var email = req.body.email;
    User.findOne({email: email})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: +' + err));
});

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const fName = req.body.fName;
    const lName = req.body.lName;
    const verified = req.body.verified;

    const newUser = new User({email,password,fName,lName, verified})

    newUser.save()
    .then(() => res.json("USER ADDED"))
    .catch(err => res.status(400).json('Error: +' + err));
});

router.route('/update/:email').post((req, res) => {
    var email = req.body.email;
    User.findOne({email: email})
    .then((user) => {
        user.password = req.body.password;
        user.fName = req.body.fName;
        user.lName = req.body.lName;

        user.save()
            .then(() => res.json("USER UPDATED!"))
            .catch(err => res.status(400).json('Error: +' + err));
    })
    .catch(err => res.status(400).json('Error: +' +err));
});

router.route('/:email').delete((req, res) => {
    var email = req.body.email;
    User.findOneAndDelete({email: email})
    .then(() => res.json("USER DELETED!"))
    .catch(err => res.status(400).json('Error: +' + err));
});

module.exports = router;