// Import mongodb's functions
const mongoose = require('mongoose');
// Calls a new "schema"
const Schema = mongoose.Schema;
// Defines the schema
const userSchema = new Schema({
    // Username
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    fName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    lName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
}, {
    // Includes timestamps
    timestamps: true,
});

// Create the user using schema
const User = mongoose.model('User', userSchema);
// Export the User model with the newly createdcd variable
module.exports = User;