const router = require('express').Router();
let User = require('../models/user.model.js');

router.route("/findAllUsers").post(async (req,res)=>{
    try
    {
        const users = await User.find();
        if(users == null){
            res.status(201).json(null);
        }
        res.status(201).json(users)
    }
    catch(Error)
    {
        res.json(null)
    }
});

router.route("/findSpecUsers").post(async (req,res)=>{
    try
    {
        let filter = {email : req.body.email};
        const users = await User.find(filter);
        if(users == null){
            console.log("error");
            res.status(201).json(null);
        }
        else
            res.status(201).json(users)
    }
    catch(Error)
    {
        console.log(Error);
        res.json(null)
    }
});

router.route('/').get((req, res) => {
    User.find({})
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

    const newUser = new User({email,password,fName,lName})

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

router.route('/delete/:email').delete((req, res) => {
    var email = req.body.email;
    User.findOneAndDelete({email: email})
    .then(() => res.json("USER DELETED!"))
    .catch(err => res.status(400).json('Error: +' + err));
    //should be updated to delete all exercises associated with user as well. probably easier to manage taht in front end though
});

module.exports = router;