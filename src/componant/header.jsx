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
            <a class="link link-active  "href="/"> home</a>
            <Link to="/pangongLake" >Click here</Link>
        </li>
        <li class="list-item-inline">
            <a class="link"href="project.html">projects</a>
        </li>
        <li class="list-item-inline"> 
            <a class = "link "href="blogs.html">blog</a>
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