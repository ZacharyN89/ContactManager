import React, {Component} from 'react';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            sets: "",
            reps: "",
            id: ""
        }
    }

    render() {
        return(
            <div className = "cardContainer">
                <div className = "cardContent">
                    
                </div>
                <div className = "cardTitle">
                    <h3>{this.props.title}</h3>
                </div>
                <div className = "cardSets">
                    <p>{this.props.sets}</p>
                </div>
                <div className = "cardReps">
                    <p>{this.props.reps}</p>
                </div>
            </div>
        )
    }
}

export default Card;