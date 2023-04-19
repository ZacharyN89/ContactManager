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
        wendesday: [],
        thursday: [],
        friday: [],
        saturday: [],
    }
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
        day:   "Wendesday"
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
    
    console.log(dataTues);
    this.setState({
        sunday : dataSun,
        monday : dataMon,
        tuesday : dataTues,
        wendesday : dataWends,
        thursday : dataThurs,
        friday : dataFri,
        saturday : dataSat,

    })

    console.log("STATE:")
    console.log(this.state.tuesday)


}
async componentDidMount() {
    this.fetchDay();
}

render(){
    const {sunday, monday, tuesday, wednesday, thursday, friday, saturday} = this.state;

    return(
        <div>
            <h3>This is MountainTop Workout Planner LOGGED IN PAGE</h3>
            <h3>Welcome {localStorage.getItem("fName")} {localStorage.getItem("lName")}</h3>
            <Button type = "button" className ="button" id="logout"onClick={logout}>Logout</Button>
            <div id = "Add Exercise">
                <h3>Add an Exercise</h3>
                <form onSubmit ={createExercise}>
                    <label>Title</label>
                    <div>
                       <Form.Control id = "ExTitle" required  className = "input" placeholder ="Enter your exercise name."></Form.Control> 
                    </div>
                    <label>Sets</label>
                    <div>
                        <Form.Control id = "sets" required type="number"  min="0" className = "input" placeholder ="Enter your number of sets"></Form.Control>
                    </div>
                    <label>Reps</label>
                    <div>
                        <Form.Control id = "reps" required type="number"  min="0" className = "input" placeholder ="Enter your number of sets"></Form.Control>
                    </div>
                    
                    <label>Day</label>
                    <div>
                        <select id= "day">
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wendesday">Wendesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                    </div>
                    <Button type = "Submit" className ="button" id="addUser">Add an Exercise</Button>


                </form>
                <p id = "errorAddEx"></p>


            </div>
            <div id ="Tuesday">
            <h1>Tuesday</h1>
            {tuesday.map(tuesday => <Card title = {tuesday.title} sets = {tuesday.sets} day =  {tuesday.day} reps = {tuesday.reps} id={tuesday._id} key ={tuesday._id}/>)}
            </div>

        </div>
    )
}





}

export default WorkoutManager;