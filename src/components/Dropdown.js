import React, { Component } from "react";
import Select from "react-select";


class DropDown extends Component{
constructor(props){

    super(props);
    this.state={
        array: [{value: "Sunday",label:"Sunday"},
                {value: "Monday",label:"Monday"},
                {value: "Tuesday",label:"Tuesday"},
                {value: "Wednesday",label:"Wednesday"},
                {value: "Thursday",label:"Thursday"},
                {value: "Friday",label:"Friday"},
                {value: "Saturday",label:"Saturday"},
            ],
        value: []

    }
}

handleChange(e){
    this.setState({value:e})
   }

render(){
const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#fff" : "#fff",
      backgroundColor: state.isSelected ? "#c580aa" : "#642B6B",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#642B6B",
      padding: "10px",
      border: "none",
      boxShadow: "blue",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };


    

    return(
        <Select placeholder ="Select the day. " options = {this.state.array}    styles={customStyles} onChange={this.handleChange.bind(this)}/>

    )
}


}

export default DropDown;