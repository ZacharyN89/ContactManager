// Necessary import
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {logoutUser} from '../features/UserMethods';
import {getExercises} from '../features/ExerciseMethods';
import Card from './Card';

// Create a class that extends comptonent
class WorkoutPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sunday: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
        }
    }

    fetchDays = async() => {
        let sundayInfo = {email: JSON.parse(localStorage.getItem("user")).email,
                        day: "Sunday"}
        let mondayInfo = {email: JSON.parse(localStorage.getItem("user")).email,
                        day: "Monday"}
        let tuesdayInfo = {email: JSON.parse(localStorage.getItem("user")).email,
                        day: "Tuesday"}
        let wednesdayInfo = {email: JSON.parse(localStorage.getItem("user")).email,
                        day: "Wednesday"}
        let thursdayInfo = {email: JSON.parse(localStorage.getItem("user")).email,
                        day: "Thursday"}
        let fridayInfo = {email: JSON.parse(localStorage.getItem("user")).email,
                        day: "Friday"}
        let saturdayInfo = {email: JSON.parse(localStorage.getItem("user")).email,
                        day: "Saturday"}

        this.setState({
            sunday: await getExercises(sundayInfo),
            monday: await getExercises(mondayInfo),
            tuesday: await getExercises(tuesdayInfo),
            wednesday: await getExercises(wednesdayInfo),
            thursday: await getExercises(thursdayInfo),
            friday: await getExercises(fridayInfo),
            saturday: await getExercises(saturdayInfo)
        })

        console.log(this.state.sunday);
        console.log(this.state.monday);
        console.log(this.state.tuesday);
        console.log(this.state.wednesday);
        console.log(this.state.thursday);
        console.log(this.state.friday);
        console.log(this.state.saturday);
    }

    async componentDidMount() {
        this.fetchDays();
    }

    render() {
        const {sunday, monday, tuesday, wednesday, thursday, friday, saturday} = this.state;
        return(
            <div>
                <center>
                    <h1>Exercise Manager</h1>
                    <h2>Welcome {JSON.parse(localStorage.getItem("user")).fName} {JSON.parse(localStorage.getItem("user")).lName}</h2>
                    {sunday.map(sunday => <Card title = {sunday.title} sets = {sunday.sets} reps = {sunday.reps}/>)}
                    {monday.map(monday => <Card title = {monday.title} sets = {monday.sets} reps = {monday.reps}/>)}
                    <Link to = "/" onClick={logoutUser}><Button>Logout</Button></Link><br />
                    <Button type = "button" id = "update" onClick={() => this.fetchDays()}>Get info</Button>
                </center>  
            </div>
        );
    }
    
}

// Export, but not, it has to have a capitalized name
export default WorkoutPage;