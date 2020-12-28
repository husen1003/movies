import React from 'react';
import { Link } from 'react-router-dom';

class footer extends React.Component {
    render() {
        return(
            <>
                         
                {/* <Link to='/'>Go TO Home</Link> */}
                    
                    
                    <div className="footer-smit">
                                   <footer className ="footer">
            <div className ="footer-header">connect to Me via Social Links </div>
            <ul className = "social-links non-bullet">
                <li className="list-item-inline"><a class="link" href="https://github.com/smit312/">github</a></li>
                <li className="list-item-inline"><a class="link"href="https://twitter.com/smitthakkar31">twitter</a></li>
                <li className="list-item-inline"><a class ="link"href="https://www.linkedin.com/in/smit-thakkar-024b8318b/">linkedin</a></li>
            </ul>
           
        </footer>
        </div>
            </>
        )
    }
}

export default footer;