// Necessary import
import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {registerUser} from '../features/UserMethods';

async function register(e){
    // Prevents page from refreshing
    e.preventDefault();

    // Get html values
    let output = document.getElementById("nameoutput");
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Checks to make sure inputs are valid before sending them to the database
    let checkFirstName = firstName.length >= 3;
    let checkLastName = lastName.length >= 3;
    // This was taken from our last project because I was too lazy to figure out how to do regex stuff
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    let checkPassword = password === confirmPassword;
    let outputMessage = '';

    /*
        Not sure if its proper to write the error handling here in the frontend or leave it to the backend
        to send some sort of message. To be honest, I didn't want to figure out how to get the message from backend
        if I can just filter it out here (sorry about that).
    */

    // This check is here, if we have time to have the boxes do outlines, then we can change accordingly
    if(checkFirstName && checkLastName && checkPassword && isValidEmail(email)){
        let user = {
            email: email,
            password: password,
            fName: firstName,
            lName: lastName
        }

        await registerUser(user);
        output.innerHTML = "USER ADDED";
    } else{
        if(!checkFirstName)
            outputMessage += "First name must be 3 characters or more\n";
        
        if(!checkLastName)
            outputMessage += "Last name must be 3 characters or more\n";

        if(!isValidEmail(email))
            outputMessage += "Invalid email\n";

        if(!checkPassword)
            outputMessage += "Passwords do not match\n";

        if(password === "")
            outputMessage += "Please enter a password"

        output.innerHTML = outputMessage;
    }
}

// Create a class that extends component
class RegisterPage extends Component{

    // Render is syntax correct
    render(){
        return(
            <div>
                <center>
                    <h1>Exercise Manager</h1>
                    <h2>Register</h2>
                    <form onSubmit={register}>
                        <label>First Name:</label>
                        <Form.Control id = "firstName" className = "input" placeholder = "Enter your first name"></Form.Control><br />
                        <label>Last Name:</label>
                        <Form.Control id = "lastName" className = "input" placeholder = "Enter your last name"></Form.Control><br />
                        <label>Email:</label>
                        <Form.Control id = "email" className = "input" placeholder = "Enter your email"></Form.Control><br />
                        <label>Password:</label>
                        <Form.Control id = "password" className = "input" placeholder = "Enter your password"></Form.Control><br />
                        <label>Confirm Password:</label>
                        <Form.Control id = "confirmPassword" className = "input" placeholder = "Confirm your password"></Form.Control><br />
                        <Button type = "submit" id="sendRequest">Register</Button>
                    </form>
                    <p id = "nameoutput"></p>
                    <Link to = "/"><Button>Go to login page</Button></Link>
                </center>
            </div>
        )
    }
}

// Export, but not, it has to have a capitalized name
export default RegisterPage;