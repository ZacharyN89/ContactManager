// Function libaries
const express = require('express');
const cors = require('cors');
// Importing mongoose to connect to mongodb
const mongoose = require('mongoose');

require('dotenv').config();

// App will reference express functions
const app = express();
// Port is where our backend is
const port = process.env.PORT || 5000;

// Call these two functions
app.use(cors());
app.use(express.json());

// Call atlas connect command
const uri = process.env.ATLAS_URI;
// Connecting using command
mongoose.connect(uri, {useNewUrlParser: true});
// Define connection
const connection = mongoose.connection;
// Once connected, console log
connection.once('open', () =>{
    console.log("MongoDB database connection successfully established!");
})

// Call the file for userRouter
const userRouter = require('./routes/user');
const exerciseRouter = require('./routes/exercise');
// Include the /users as the url to access the function
app.use('/users', userRouter);
app.use('/exercise', exerciseRouter);


// If successful, there will be an output
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})