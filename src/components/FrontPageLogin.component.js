import React, {Component} from 'react'
import Form from "react-bootstrap/Form"

import Button from "react-bootstrap/Button"
import { addUser, findAllUsers, findSpecUsers } from '../features/FrontPage';


async function createUser(e){
    e.preventDefault();
    let err = document.getElementById("errorReg")
    let firstName = (document.getElementById("firstName").value);
    
    let lastName = (document.getElementById("lastName").value);
    
    let email = (document.getElementById("emailR").value);


    //email filtering
    /*if(!email.match("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;"))
    {
        err.innerHTML = "Please enter a valid email address.";
        return;
    }*/
    
    let password = (document.getElementById("passwordR").value);
    //password filtering
     if(password.length <5)
    {
        err.innerHTML = "Please enter a longer password.";
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

function  loginToggle(e){
    let login = document.getElementById("LoginUser");
    let FrontPage = document.getElementById("FrontPage");

    //If the change user type screen was hidden before, unhide it
    if(FrontPage.getAttribute("hidden") !== null){
        FrontPage.removeAttribute("hidden"); 
        login.setAttribute("hidden", true);
    }
    //otherwise, hide everything and show the general page
    else{
        login.removeAttribute("hidden"); 
        FrontPage.setAttribute("hidden", true);
    }
}
function  registerToggle(e){
    let register = document.getElementById("CreateUser");
    let FrontPage = document.getElementById("FrontPage");

    //If the change user type screen was hidden before, unhide it
    if(FrontPage.getAttribute("hidden") !== null){
        FrontPage.removeAttribute("hidden"); 
        register.setAttribute("hidden", true);
    }
    //otherwise, hide everything and show the general page
    else{
        register.removeAttribute("hidden"); 
        FrontPage.setAttribute("hidden", true);
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
        <div style = {{textAlign: "center", backgroundImage:`url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Mountain_Sunset_%2833696907845%29.jpg/2560px-Mountain_Sunset_%2833696907845%29.jpg)`, backgroundSize: "cover",  boxSizing: "border-box", height:"100vh",paddingBottom:"50%", backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundAttachment:"fixed"}}>
            <div className='FrontPage' id="FrontPage">
                <h2 className='welcomeTitle'>Welcome to the MountainTop Workout Planner</h2>    
                <div className='box'>
                    <img src={require('../images/icon2.png')} alt="logo2"  className='logo2'/>
                    <img src={require('../images/icon.png')} alt="logo" className='logo1'/>

                </div>
            
            </div>
            <br/>
            <Button type = "button" className ="button" id="addUser"onClick={loginToggle}>Login</Button>
            <Button type = "button" className ="button" id="addUser"onClick={toggleLogintest}>LoginTEST</Button>
            <Button type = "button" className ="button" id="addUser"onClick={registerToggle}>Register</Button>
            <div id = "CreateUser" className = "Register" onSubmit={createUser} hidden>
                <h3>Register</h3>
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
                    <Button type = "Submit" className ="button" id="addUser">Create Account</Button>


                </form>
                <p id = "errorReg"></p>


            </div>
            <div id = "LoginUser" className = "Login" onSubmit={this.Login} hidden>
                <h3>Login</h3>

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
                    <Button type = "Submit" className = "button" id="login">Login</Button>

                </form>
                

            </div>
        </div>
    )
}





}

export default FrontPage;