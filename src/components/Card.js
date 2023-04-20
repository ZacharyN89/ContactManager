import React, {Component} from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { editExercise , deleteExercise} from '../features/WorkoutManager';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            sets: props.sets,
            reps: props.reps,
            day: props.day,
            id: props.id
        }
    }

    updateDays = () => {
        this.props.fetchDay();
    }

    editMode = (e)=>{
    console.log(this.state.title);
    let displayScreen = document.getElementById("cardContainerDisplay" +this.state.id);
    let editScreen = document.getElementById("cardEditMode" +this.state.id);

    //If the change user type screen was hidden before, unhide it
    if(editScreen.getAttribute("hidden") !== null){
        editScreen.removeAttribute("hidden"); 
        displayScreen.setAttribute("hidden", true);
    }
    //otherwise, hide everything and show the general page
    else{
        displayScreen.removeAttribute("hidden"); 
        editScreen.setAttribute("hidden", true);
        }
    }

    deleteMode = (e)=>{
        let displayScreen = document.getElementById("cardContainerDisplay" +this.state.id);
        let delScreen = document.getElementById("cardDelMode" +this.state.id);
    
        //If the change user type screen was hidden before, unhide it
        if(delScreen.getAttribute("hidden") !== null){
            delScreen.removeAttribute("hidden"); 
            displayScreen.setAttribute("hidden", true);
        }
        //otherwise, hide everything and show the general page
        else{
            displayScreen.removeAttribute("hidden"); 
            delScreen.setAttribute("hidden", true);
        }
    }

    editExercise = async(e)=>{
        let title = (document.getElementById("titleE"+this.state.id).value);
    
        let sets = (document.getElementById("setsE"+this.state.id).value);
        
        let reps = (document.getElementById("repsE"+this.state.id).value);
        let day = (document.getElementById("dayE"+this.state.id).value);
        let id = this.state.id;

        let exercise = {
            title: title,
            sets:  sets,
            reps:  reps,
            day:   day,
            id:    id
        }
        await editExercise(exercise);
        this.editMode();
        this.updateDays();
        //window.location.reload(false);

        }

        deleteExercise = async(e)=>{
            let title = (document.getElementById("titleE"+this.state.id).value);
        
            let sets = (document.getElementById("setsE"+this.state.id).value);
            
            let reps = (document.getElementById("repsE"+this.state.id).value);
            let day = (document.getElementById("dayE"+this.state.id).value);
            let id = this.state.id;
    
            let exercise = {
                title: title,
                sets:  sets,
                reps:  reps,
                day:   day,
                id:    id
            }
            await deleteExercise(exercise);
            this.deleteMode();
            this.updateDays();
            //window.location.reload(false);
    
            }
    

    render(){
        return(
            <div>
                <div className = "cardContainerDisplay" id = {"cardContainerDisplay"+this.state.id}>
                    <div className = "cardContent">
                    
                    </div>
                    <div>
                        <h3>{this.props.title}</h3>
                    </div>
                    
                    <label>Sets: {this.props.sets}</label><br/>
                    
                    <label>Reps: {this.props.reps}</label><br/>
                    
                    <form>
                        <Button type = "button" className ="button"style={{height: '30px', width : '100px',fontSize:'small'}} id={"editCard"+this.state.id} onClick ={this.editMode}>Edit</Button>
                        <Button type = "button" className ="button" style={{height: '30px', width : '100px',fontSize:'small'}}id={"deleteCard"+this.state.id} onClick = {this.deleteMode}>Delete</Button>                        
                    </form>

                </div>
                <div className = "cardEditMode" id = {"cardEditMode"+this.state.id} hidden>
                    <form>

                        <Form.Control id = {"titleE"+this.state.id} required  className = "inputC" placeholder ="Edit your title" defaultValue= {this.state.title}></Form.Control> <br/>  


                        <Form.Control id = {"setsE"+this.state.id} required type="number"  min="0" className = "inputC" placeholder ="Enter your new number of sets" defaultValue = {this.state.sets}></Form.Control>  <br/>  

                        
                        <Form.Control id = {"repsE"+this.state.id} required type="number"  min="0" className = "inputC" placeholder ="Enter your new number of sets" defaultValue = {this.state.reps}></Form.Control> <br/>   
                        

                        <select id= {"dayE"+this.state.id} defaultValue = {this.state.day}>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select><br/>



                            <Button type = "button" className ="button" style={{height: '30px', width : '100px',fontSize:'small'}}id="editCard" onClick ={this.editExercise} >Save</Button>
                            <Button type = "button" className ="button" style={{height: '30px', width : '100px',fontSize:'small'}}id="editCard" onClick ={this.editMode}>Back</Button>
                    </form>
                

                </div>
                
                <div className = "cardDelMode" id = {"cardDelMode"+this.state.id} hidden>
                    <div className = "cardContent">
                    </div>
                    <div className = "cardTitle">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className = "cardSets">
                        <label>Sets: {this.props.sets}</label>
                    </div>
                    <div className = "cardReps">
                        <label>Reps: {this.props.reps}</label>
                    </div>
                    <p>Are you sure you want to delete this exercise?</p>
                    <Button type = "button" className ="button"style={{height: '30px', width : '100px',fontSize:'small'}} id={"deleteCard"+this.state.id} onClick ={this.deleteMode}>Back</Button>
                    <Button type = "button" className ="button" style={{height: '30px', width : '100px',fontSize:'small'}}id="deleteCard" onClick ={this.deleteExercise}>Delete</Button>
                </div>

            </div>
        )
    }
}

export default Card;