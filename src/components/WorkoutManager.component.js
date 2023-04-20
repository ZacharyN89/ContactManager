import React, {Component} from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from './Card';
import { addExercise , findExerciseDay} from '../features/WorkoutManager';

function logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("fName");
    localStorage.removeItem("lName");
    console.log("logged out");
    window.location.reload(false);
}

async function createExercise(e){
    e.preventDefault();
    let err = document.getElementById("errorAddEx")
    let userIn = localStorage.getItem("user");
    let title = (document.getElementById("ExTitle").value);
    let sets = Number(document.getElementById("sets").value)
    let reps = Number(document.getElementById("reps").value)
    let day = (document.getElementById("day").value)


    //email filtering
    /*if(!email.match("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;"))
    {
        err.innerHTML = "Please enter a valid email address.";
        return;
    }*/


    //password filtering
     if(sets === 0 || reps === 0)
    {
        err.innerHTML = "Please enter a valid exercise routine.";
        return;
    }

    let exercise = {
        email: userIn,
        title: title,
        sets:  sets,
        reps:  reps,
        day:   day
    }
    console.log(exercise)
    err.innerHTML = "";

    await addExercise(exercise);

    return;



}



class WorkoutManager extends Component{

constructor(props){
    super(props)
    this.state ={
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
    }
}

createExercise = async(e)=>{
    e.preventDefault();
    let err = document.getElementById("errorAddEx")
    let userIn = localStorage.getItem("user");
    let title = (document.getElementById("ExTitle").value);
    let sets = Number(document.getElementById("sets").value)
    let reps = Number(document.getElementById("reps").value)
    let day = (document.getElementById("day").value)


    //email filtering
    /*if(!email.match("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;"))
    {
        err.innerHTML = "Please enter a valid email address.";
        return;
    }*/


    //password filtering
     if(sets === 0 || reps === 0)
    {
        err.innerHTML = "Please enter a valid exercise routine.";
        return;
    }

    let exercise = {
        email: userIn,
        title: title,
        sets:  sets,
        reps:  reps,
        day:   day
    }
    console.log(exercise)
    err.innerHTML = "";

    await addExercise(exercise);
    console.log("IT ACTUALLY WORKS")
    await this.fetchDay();
    console.log("IT ACTUALLY WORKS HERE")
    return;



}

fetchDay = async(e)=>{
    let userIn = localStorage.getItem("user");

    let exercise1 = {
        email: userIn,
        day:   "Sunday"
    }
    let exercise2 = {
        email: userIn,
        day:   "Monday"
    }
    let exercise3 = {
        email: userIn,
        day:   "Tuesday"
    }
    let exercise4 = {
        email: userIn,
        day:   "Wednesday"
    }
    let exercise5 = {
        email: userIn,
        day:   "Thursday"
    }
    let exercise6 = {
        email: userIn,
        day:   "Friday"
    }
    let exercise7 = {
        email: userIn,
        day:   "Saturday"
    }
    
    let dataSun = await findExerciseDay(exercise1);
    let dataMon = await findExerciseDay(exercise2);
    let dataTues = await findExerciseDay(exercise3);
    let dataWends = await findExerciseDay(exercise4);
    let dataThurs = await findExerciseDay(exercise5);
    let dataFri = await findExerciseDay(exercise6);
    let dataSat = await findExerciseDay(exercise7);
    
    this.setState({
        sunday : dataSun,
        monday : dataMon,
        tuesday : dataTues,
        wednesday : dataWends,
        thursday : dataThurs,
        friday : dataFri,
        saturday : dataSat,

    })



}
async componentDidMount() {
    this.fetchDay();
}

render(){
    const {sunday, monday, tuesday, wednesday, thursday, friday, saturday} = this.state;

    return(
       
        <div style = {{backgroundImage:`url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`, backgroundSize: "cover", padding:"82px", backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundAttachment:"fixed"}}>
           <div className='box'>
                    <img src={require('../images/icon3.png')} alt="logo2"  className='logo2'/>
                    <img src={require('../images/icon.png')} alt="logo" className='logo1'/>
                </div>
                <center><div className='box2'>
           <box2><h2>This is MountainTop Workout Planner</h2></box2></div></center>
            <h3>Welcome {localStorage.getItem("fName")} {localStorage.getItem("lName")}</h3>
            <Button type = "button" className ="button" id="logout"onClick={logout}>Logout</Button>
            <div id = "Add Exercise" className='Register2'>
                <h3>Add an Exercise</h3>
                <form onSubmit ={createExercise}>
                    <h3>Title</h3>
                    <div>
                       <Form.Control id = "ExTitle" required  className = "input" placeholder ="Enter your exercise name."></Form.Control> 
                    </div>
                    <h3>Sets</h3>
                    <div>
                        <Form.Control id = "sets" required type="number"  min="0" className = "input" placeholder ="Enter your number of sets"></Form.Control>
                    </div>
                    <h3>Reps</h3>
                    <div>
                        <Form.Control id = "reps" required type="number"  min="0" className = "input" placeholder ="Enter your number of sets"></Form.Control>
                    </div>
                    
                    <h3>Day</h3>
                    <div className  = "custom-select">
                        <select class="form-select" aria-label="Days" id="day">
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                    </div>
                    <Button type = "Submit" className ="button" style={{height: '100px', width : '200px'}} id="addUser">Add an Exercise</Button>


                </form>
                <p id = "errorAddEx"></p>


            </div>

            
            <div className  = "displayDays-container"></div>
                <div id ="Sunday" className  = "displayDays">
                    <h2>Sunday</h2>
                    {sunday.map(sunday => <Card fetchDay = {this.fetchDay} title = {sunday.title} sets = {sunday.sets} day =  {sunday.day} reps = {sunday.reps} id={sunday._id} key ={sunday._id}/>)}
                </div>
                <div id ="Monday" className  = "displayDays">
                    <h2>Monday</h2>
                    {monday.map(monday => <Card fetchDay = {this.fetchDay} title = {monday.title} sets = {monday.sets} day =  {monday.day} reps = {monday.reps} id={monday._id} key ={monday._id}/>)}
                </div>
                <div id ="Tuesday" className  = "displayDays">
                    <h2>Tuesday</h2>
                    {tuesday.map(tuesday => <Card fetchDay = {this.fetchDay} title = {tuesday.title} sets = {tuesday.sets} day =  {tuesday.day} reps = {tuesday.reps} id={tuesday._id} key ={tuesday._id}/>)}
                </div>
                <div id ="Wendesday" className  = "displayDays">
                    <h2>Wednesday</h2>
                    {wednesday.map(wednesday => <Card fetchDay = {this.fetchDay} title = {wednesday.title} sets = {wednesday.sets} day =  {wednesday.day} reps = {wednesday.reps} id={wednesday._id} key ={wednesday._id}/>)}
                </div>
                <div id ="Thursday" className  = "displayDays">
                    <h2>Thursday</h2>
                    {thursday.map(thursday => <Card fetchDay = {this.fetchDay} title = {thursday.title} sets = {thursday.sets} day =  {thursday.day} reps = {thursday.reps} id={thursday._id} key ={thursday._id}/>)}
                </div>
                <div id ="Friday" className  = "displayDays">
                    <h2>Friday</h2>
                    {friday.map(friday => <Card fetchDay = {this.fetchDay} title = {friday.title} sets = {friday.sets} day =  {friday.day} reps = {friday.reps} id={friday._id} key ={friday._id}/>)}
                </div>
                <div id ="Saturday" className  = "displayDays">
                    <h2>Saturday</h2>
                    {saturday.map(saturday => <Card fetchDay = {this.fetchDay} title = {saturday.title} sets = {saturday.sets} day =  {saturday.day} reps = {saturday.reps} id={saturday._id} key ={saturday._id}/>)}
                </div>
           {/* </div>*/}

        </div>
    )
}





}

export default WorkoutManager;