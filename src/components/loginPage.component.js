// Necessary import
import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {loginUser} from '../features/UserMethods';



async function login(e){
    // Prevents page from refreshing
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {email: email, password: password};
    
    await loginUser(user);
}

// Create a class that extends component
class LoginPage extends Component{

    // Render is syntax correct
    render(){
        return(
            <div>
                <center>
                    <h1>Exercise Manager</h1>
                    <h2>Login</h2>
                    <form onSubmit={login}>
                        <label>Email:</label>
                        <Form.Control id = "email" className = "input" placeholder = "Enter your email"></Form.Control><br />
                        <label>Password:</label>
                        <Form.Control id = "password" className = "input" placeholder = "Enter your password"></Form.Control><br />
                        <Button type = "submit" id="sendRequest">Log in</Button>
                    </form>
                    <p id = "nameoutput"></p>
                    <Link to = "/register"><Button>Go to register page</Button></Link>
                </center>  
            </div>
        )
    }
}

// Export, but not, it has to have a capitalized name
export default LoginPage;