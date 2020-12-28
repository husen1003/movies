import React from 'react';
import logo from '../../assets/img/ladakh.jpg';
import { Link } from 'react-router-dom';
class PangongLake extends React.Component {
    render() {
        return (

            <>

                <center> <img src={logo} className="imgsrc" >
                </img></center>

                <center> <h2> Pangong Lake</h2></center>
                <div className="container container-center">
                    <p>In Ladakh, you never know what surprise nature has in store for you. Pangong Lake, situated at a height of almost 4,350m, is the world’s highest saltwater lake. Its water, which seems to be dyed in blue, stand in stark contrast to the arid mountains surrounding it. Extending to almost 160km, one-third of the Pangong Lake lies in India and the other two-thirds in China.

                    Pangong Lake, one of the most famous lakes in Leh Ladakh, derives its name from the Tibetan word, “Pangong Tso”, which means “high grassland lake”. You could spend hours in contemplation here, and still not have enough of its beauty. Pangong Lake is also known to change colors, appearing blue, green and red at different times. If you have decided to go on a trip to Ladakh anytime soon, don’t forget to visit the Pangong Lake. The beauty which awaits you there cannot be described in words. It has to be seen, felt and absorbed within yourself.</p>
                </div>
                {/* <Link to="/header" >Click here</Link> */}
            </>
        )
    }
}

export default PangongLake;