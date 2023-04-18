/*
----------------------------------------------------------------------
    This page contained routes done from the tutorial
    All the proper routes with proper naming will be done
    in UserAuth.js now
----------------------------------------------------------------------

// Import express an the user model schema
const router = require('express').Router();
let User = require('../models/users.model.js');

// Function to get all users in an array
router.route('/').post((req, res) => {
    // Call the find command from mongoose
    User.find()
    .then(users => res.json(users)) // This outputs the json
    .catch(error => res.status(400).json('Error: +' +error)) // Catches any errors that occur
});

// Function to get all users in an array
router.route('/filter').post((req, res) => {
    const filter = {username: req.body.username}
    User.find(filter)
    .then(users => res.json(users)) // This outputs the json
    .catch(error => res.status(400).json('Error: +' +error)) // Catches any errors that occur
});

router.route('/add').post((req, res) => {
    // Get the user info
    const username = req.body.username;
    const password = req.body.password;
    const fName = req.body.fName;
    const lName = req.body.lName;
    // Create a new user with it
    const newUser = new User({username, password, fName, lName})
    // Save the entry to the database
    newUser.save()
    .then(() => res.json("USER ADDED")) // Output if successful
    .catch(error => res.status(400).json('Error: +' +error)) // Catches any errors that occur
});

// Search by email, which was edited from backend tutorial
router.route('/:email').post((req, res) => {
    User.findOne({username: req.username})
    .then((user) => res.json(user))
    .catch(error => res.status(400).json('Error +' +error));
});

router.route("/findAll").post(async(req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        if(users == null) {
            res.status(201).json(null);
        }

        res.status(201).json(users);
    } catch(Error) {
        res.json(null);
    };
});

This probably wont be needed, but just here for reference
// Update by id
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then((user) => {
        user.username = req.body.username;
        user.password = req.body.password;
        user.fName = req.body.fName;
        user.lName = req.body.lName;

        user.save()
            .then(() => res.json("USER UPDATED"))
            .catch(error => res.status(400).json('Error +' +error));
    })
    .catch(error => res.status(400).json('Error +' +error));
})

// Delete by id
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted!"))
    .catch(error => res.status(400).json('Error +' +error));
})


// Export it to the router
module.exports = router;
*/