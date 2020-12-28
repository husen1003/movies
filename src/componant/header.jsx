import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <>
                                 <nav class="navigation container">
    <div class="nav-brand">IAMDEVLOPER
        
    </div>
    <ul class="non-bullet nav-pills">
        <li class="list-item-inline ">
            <Link class="link link-active" to="/"> home</Link>
            <Link to="/pangongLake" >Click here</Link>
        </li>
        <li class="list-item-inline">
            <Link class="link" to="/projects">projects</Link>
        </li>
        <li class="list-item-inline"> 
            <Link class="link" to="blogs.html">blog</Link>
        </li>
    </ul>
</nav>
                <br/>
                {/* <Link to='/'>Go TO Home</Link> */}

            </>
        )
    }
}

export default Header;