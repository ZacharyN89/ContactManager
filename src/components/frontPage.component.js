// import these because we need them
import React,{Component} from "react";

import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'; //used later

// we create a class of type component
class FrontPage extends Component{

    // render is kinda syntax correct
    render(){
        return(
            <div>
                <h1>THIS IS THE FRONT PAGE</h1>

                <Link to ="/otherpage"><Button>Go to the other page!!!</Button></Link>
            </div>
        )
    }
}
// export it!
// MAKE SURE YOU'RE EXPORTING SOMETHING THAT HAS A CAPITALIZED NAME
// A LOWERCASE NAME WILL NOT RENDER
export default FrontPage;