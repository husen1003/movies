import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/ladakh.jpg';
import image from '../assets/img/manaliHome.jpg';

class Home extends React.Component {
    render() {
        return(
            <>
   
                <br />

             <Link to="/ladakh" className="link secondary-link">   <center> <img src={logo} className="imgsrc" >
                </img>
                <br/>
                <h2>ladakh</h2></center></Link>
                {/* <Link to="/header" >Click here</Link> */}
                <Link to="/manali" className="link secondary-link">   <center> <img src={image} className="imgsrc" >
                </img>
                <br/>
                <h2>Manali</h2></center></Link>
                {/* <Link to="/header" >Click here</Link> */}

            </>
        )
    }
}

export default Home;