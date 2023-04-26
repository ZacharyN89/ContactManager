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

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open',()=> {
    console.log("MongoDB database connection successfully established!") 
})

const userRouting = require("./routing/user");
const exerciseRouting = require("./routing/exercise")
app.use('/user',userRouting);
app.use('/exercise', exerciseRouting);

app.listen(port,()=>{

    console.log(`Server is running on port ${port}`);
})