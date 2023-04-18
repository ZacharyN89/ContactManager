// Import express an the user model schema
const router = require('express').Router();
let User = require('../models/users.model.js');

router.route('/add').post((req, res) => {
    // Create a new user based off of the request
    const newUser = new User({email: req.body.email, 
                            password: req.body.password, 
                            fName: req.body.fName, 
                            lName: req.body.lName});
    
    // Save the entry to the database
    newUser.save()
    .then(() => res.json("USER ADDED")) // Output if successful
    .catch(error => res.status(400).json('Error: +' +error)) // Catches any errors that occur
});

router.route('/login').post((req, res) => {
    // Not sure why this actually doesn't need to use findUser... But it works I guess? I'll ask questions later
    const findUser = User.findOne({email: req.body.email})
    .then(users => res.json(users)) // This outputs the json
    .catch(error => res.status(400).json('Error: +' +error)) // Catches any errors that occur
});


module.exports = router;