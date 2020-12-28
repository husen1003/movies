import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/img/manaliHome.jpg';

class Manali extends React.Component {
    render() {
        return(
            <>
   
                <br />

             <Link to="/pangongLake" className="link secondary-link">   <center> <img src={image} className="imgsrc" >
                </img>
                <br/>
                <h2>About Manali</h2></center></Link>
              
                <div className="container container-center">
              
              <p className>State : Himachal Pradesh Area : 7.12 Sq. Kms. Altitude : 2,050 Mtrs approx.. Temperature : Summer 28 °C / 20 °C – Winter 18 °C / 2 °C Languages : Himachali, Hindi, English Religion : Hinduism, Buddhism Best Time to visit Kullu Manali : April – June / September – December. AIRPORT : Bhuntar ( Kullu ) 40 Kms</p>
                
                
                <hr/>
               
                <h3 className="padding">Main Attractions :</h3>
                <div class="block1">
                <ul>
                    <li> Hidimba Temple</li>
                    <li>Buddhist Monastery</li>
                    <li>Vashisth Hot Sulphur Spring</li>
                    <li>Rohtang Pass</li>
                    <li>Solang Valley</li>
                    <li>Club House</li>
                    <li>Van Vihar</li>      
                    <li>Manu temple</li>
                    
                </ul>
                </div>
                <div class="block2">
                    <ul>
                        <li>Mall Road</li>
                        <li>Nehru Kund</li>
                        <li>Kothai</li>
                        <li>Gulaba</li>
                        <li>Rahala Fall</li>
                        <li>Marhi</li>
                        <li>Rani Nala</li>
                        <li>Manikaran Sahib</li>
                    </ul>
                </div>
                <hr/>
               
                <h3 className="padding">Adventure Activities :</h3>
                <div class="block1">
                <ul>
                    <li>River Rafting</li>
                    <li>Skiing</li>
                    <li>Paragliding</li>
                    <li>Trekking</li>
                    <li>Hiking</li>
                    <li>Mountaineering</li>
                    
                    
                </ul>
                </div>
                <div class="block2">
                    <ul>
                        <li>KayaKing</li>
                        <li>Mounntain Biking</li>
                        <li>River crossing</li>
                        <li>jeep safari</li>
                        <li>Motor Cycling</li>
                        <li>Rock climbing</li>
                        
                        
                    </ul>
                </div>

                </div>
                {/* <Link to="/header" >Click here</Link> */}
            </>
        )
    }
}

export default Manali;