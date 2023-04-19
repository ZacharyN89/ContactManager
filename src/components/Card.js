import React, {Component} from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

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
        console.log(this.state.reps);
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

    render() {
        return(
            <div>
                <div className = "cardContainerDisplay" id = {"cardContainerDisplay"+this.state.id}>
                    <div className = "cardContent">
                    
                    </div>
                    <div className = "cardTitle">
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className = "cardSets">
                        <p>{this.props.sets}</p>
                    </div>
                    <div className = "cardReps">
                        <p>{this.props.reps}</p>
                    </div>
                    <form>
                        <Button type = "button" className ="button" id={"editCard"+this.state.id} onClick ={this.editMode}>Edit</Button>
                        <Button type = "button" className ="button" id={"deleteCard"+this.state.id} onClick = {this.deleteMode}>Delete</Button>                        
                    </form>

                </div>
                <div className = "cardEditMode" id = {"cardEditMode"+this.state.id} hidden>
                    <form>
                        
                        <Form.Control id = {"titleE"+this.state.id} required  className = "input" placeholder ="Edit your title" defaultValue= {this.state.title}></Form.Control>
                        <Form.Control id = {"setsE"+this.state.id} required type="number"  min="0" className = "input" placeholder ="Enter your new number of sets" defaultValue = {this.state.sets}></Form.Control>
                        <Form.Control id = {"repsE"+this.state.id} required type="number"  min="0" className = "input" placeholder ="Enter your new number of sets" defaultValue = {this.state.reps}></Form.Control>
                        <select id= {"dayE"+this.state.id} defaultValue = {this.state.day}>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wendesday">Wendesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>

                            <Button type = "button" className ="button" id="editCard" >Save</Button>
                            <Button type = "button" className ="button" id="editCard" onClick ={this.editMode}>Go Back</Button>
                    </form>
                

                </div>
                
                <div className = "cardDelMode" id = {"cardDelMode"+this.state.id} hidden>
                    <div className = "cardContent">
                    </div>
                    <div className = "cardTitle">
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className = "cardSets">
                        <p>{this.props.sets}</p>
                    </div>
                    <div className = "cardReps">
                        <p>{this.props.reps}</p>
                    </div>
                    <p>Are you sure you want to delete this exercise?</p>
                    <Button type = "button" className ="button" id={"deleteCard"+this.state.id} onClick ={this.deleteMode}>Go Back</Button>
                    <Button type = "button" className ="button" id="deleteCard">Delete</Button>
                </div>

            </div>
        )
    }
}

export default Card;