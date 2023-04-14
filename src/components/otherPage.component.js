// import these because we need them
import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addUser, findUser } from "../features/UserMethods";

async  function send(e){
    // stops page from refreshing
    e.preventDefault();
    // get each html value
    let output = document.getElementById("nameoutput");
    let firstName = (document.getElementById("firstName").value);

    // set the textbox's inner html to the firstName string
    output.innerHTML = firstName;
}

async function add(e){
    // stops page from refreshing
    e.preventDefault();
    // get each html value
    let output = document.getElementById("nameoutput");
    let firstName = (document.getElementById("firstName").value);
    let lastName = (document.getElementById("lastName").value);
    let email = (document.getElementById("email").value);
    let password = (document.getElementById("password").value);

    // make it a json object
    let user = {
        email: email,
        password: password,
        fName: firstName,
        lName: lastName
    }

    await addUser(user);
    output.innerHTML = "USER ADDED!!!";
}

async function getUsersCL(e) {
    e.preventDefault();
    let userData2 = await findUser();
    console.log(userData2);
    console.log(userData2[0]);
}

// we create a class of type component
class OtherPage extends Component{

    // render is kinda syntax correct
    render(){
        return(
            <div>
                <h1>THIS IS THE OTHER PAGE</h1>
                <form onSubmit={add}>
                    <label>First Name:</label>
                    <Form.Control id="firstName" className = "input" placeholder="Enter your first name"></Form.Control>
                    <label>Last Name:</label>
                    <Form.Control id="lastName" className="input" placeholder="Enter your last name"></Form.Control>
                    <label>Email:</label>
                    <Form.Control id="email" className="input" placeholder="Enter your email"></Form.Control>
                    <label>Password:</label>
                    <Form.Control id="password" type="password" className="input" placeholder="Enter your password"></Form.Control>
                    <Button type="submit" id="sendRequest">SEND</Button>
                </form>
                <p id="nameoutput"></p>
                <Button type="button" id="getUsers" onClick={getUsersCL}>Click Me</Button>

            </div>
        )
    }
}
// export it!
export default OtherPage;