import React, {Component} from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {addUser, findAllUsers, findSpecUsers} from '../features/FrontPage';

async function createUser(e){
    e.preventDefault();
    let err = document.getElementById("errorReg")
    let firstName = (document.getElementById("firstName").value);
    
    let lastName = (document.getElementById("lastName").value);
    
    let email = (document.getElementById("emailR").value);


    //email filtering
    if(!validateEmail(email))
    {
        err.innerHTML = "Please enter a valid email address.";
        return;
    }
    
    let password = (document.getElementById("passwordR").value);
    let passwordR = (document.getElementById("passwordRetype").value);
    //password filtering
     if(password.length <5)
    {
        err.innerHTML = "Please enter a longer password.";
        return;
    }
    if(passwordR != password)
    {
        err.innerHTML = "Please retype your password correctly.";
        return;

    }

    let user = {
        fName: firstName,
        lName: lastName,
        email: email,
        password:password
    }

    let userExistCheck = await findSpecUsers(user);
    if (userExistCheck.length !== 0)
    {
        err.innerHTML = "Username already taken";
        return;
    }

    await addUser(user)

    err.innerHTML = "USER ADDED";

    localStorage.setItem("user",(email))
    localStorage.setItem("fName",(firstName))
    localStorage.setItem("lName",(lastName))
    window.location.reload(false);

}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function  loginToggle(e){
    let login = document.getElementById("LoginUser");
    let buttons = document.getElementById("disappearAfter")
    login.removeAttribute("hidden"); 
    buttons.setAttribute("hidden", true);

}
function  registerToggle(e){
    let register = document.getElementById("CreateUser");
    let buttons = document.getElementById("disappearAfter")
    register.removeAttribute("hidden"); 
    buttons.setAttribute("hidden", true);
}
function  registerloginToggle(e){
    let register = document.getElementById("CreateUser");
    let login = document.getElementById("LoginUser");

    //If the change user type screen was hidden before, unhide it
    if(login.getAttribute("hidden") !== null){
        login.removeAttribute("hidden"); 
        register.setAttribute("hidden", true);
    }
    //otherwise, hide everything and show the general page
    else{
        register.removeAttribute("hidden"); 
        login.setAttribute("hidden", true);
    }
}

function toggleLogintest(){
    console.log(document.getElementById("Login").className)
}


function getUserData(){
    console.log(localStorage.getItem("user"));
}

function logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("fName");
    localStorage.removeItem("lName");
    console.log("logged out");
}

class FrontPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            fName:"",
            lName:"",
            email:"",
            password:"",
        }
    }

Login = async(e)=>{
    e.preventDefault();
    let err = document.getElementById("errorLogin")
    let email = (document.getElementById("emailL").value);
    let password = (document.getElementById("passwordL").value);
    let user = {
        email: email,
        password: password
    }

    //err.innerHTML = email;
    //let userdata = await findAllUsers();
    let userdata = await findSpecUsers(user)
    console.log(userdata.length); 
    if (userdata.length === 0)
    {
        err.innerHTML = "Please enter a valid user or register now.";
        return;
    }

    if (userdata[0].password !== password)
    {
        console.log(userdata[0].password)
        console.log(password)
        err.innerHTML = "Password does not match";
        return;
    }
    console.log("LOGIN SUCCESSFUL")
    console.log(userdata[0])
    err.innerHTML = "";
    localStorage.setItem("user",(userdata[0].email))
    localStorage.setItem("fName",(userdata[0].fName))
    localStorage.setItem("lName",(userdata[0].lName))
    window.location.reload(false); 



};


render(){
    return(
        <div className = "backgroundImgF">
            <div className='FrontPage' id="FrontPage">
                <h2 className='welcomeTitle'>Welcome to</h2>    
                <div className='box'>
                    <img src={require('../images/icon3.png')} alt="logo2"  className='logo2'/>
                    <img src={require('../images/icon.png')} alt="logo" className='logo1'/>
                </div>
                <h2 className='welcomeTitle'><strong>The MountainTop Workout Planner</strong></h2>
            </div>
            <div id="disappearAfter">
            <Button type = "button" className ="button" id="addUser"onClick={loginToggle}><strong>Log in</strong></Button>
            <Button type = "button" className ="button" id="addUser"onClick={registerToggle}><strong>Register</strong></Button>
            </div>
            <br/>

            <div id = "CreateUser" className = "Register" onSubmit={createUser} hidden>
                <h2><strong>Register</strong></h2>
                <form>
                    <label>First Name</label>
                    <div>
                       <Form.Control id = "firstName" required className = "input" placeholder ="Enter your first name"></Form.Control> 
                    </div>
                    <label>Last Name</label> 
                    <div>
                        <Form.Control id = "lastName" required className = "input" placeholder ="Enter your last name"></Form.Control>
                    </div>
                    <label>Email</label>
                    <div>
                        <Form.Control id = "emailR" required  className = "input" placeholder ="Enter your email"></Form.Control>
                    </div>
                    
                    <label>Password</label>
                    <div>
                        <Form.Control id = "passwordR" required className = "input" placeholder ="Enter your password"></Form.Control>
                    </div>
                    <label>Retype Password</label>
                    <div>
                        <Form.Control id = "passwordRetype" required className = "input" placeholder ="Retype your password"></Form.Control>
                    </div>
                    <p id = "errorReg"></p>
                    <Button type = "Submit" className ="button" id="addUser">Create Account</Button>
                    <p onClick ={registerloginToggle}style ={{cursor:"pointer"}}>Already have an account? Login here</p>


                </form>
                


            </div>
            <div id = "LoginUser" className = "Login" onSubmit={this.Login} hidden>
                <h2>Log in</h2>

                <form>
                <label>Email</label>
                    <div>
                        <Form.Control id = "emailL" required className = "input" placeholder ="Enter your email"></Form.Control>
                    </div>
                    
                    <label>Password</label>
                    <div>
                        <Form.Control id = "passwordL" required className = "input" placeholder ="Enter your password"></Form.Control>
                    </div>
                    <label id = "errorLogin"></label><br/>
                    <Button type = "Submit" className = "button" id="login"><strong>Log in</strong></Button>
                    <p onClick ={registerloginToggle} style ={{cursor:"pointer"}}>Don't have an account yet? Register here.</p>

                </form>
                

            </div>
        </div>
    )
}





}

export default FrontPage;