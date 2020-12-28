import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/ladakh.jpg';

class Ladakh extends React.Component {
    render() {
        return(
            <>
   
                <br />

             <Link to="/pangongLake" className="link secondary-link">   <center> <img src={logo} className="imgsrc" >
                </img>
                <br/>
                <h2>About pangongLake</h2></center></Link>

                
                {/* <Link to="/header" >Click here</Link> */}
            </>
        )
    }
}

export default Ladakh;