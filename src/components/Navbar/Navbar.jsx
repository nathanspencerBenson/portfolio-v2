import React from 'react';
import './Navbar.scss';
import bird from '../../assets/bird.svg'

function Navbar() {
    return (
        <div className="navbar">
        <div></div>
            <ul className="navbar__links">
                <li><a href="">PROJECTS</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
            
        </div>
    )
}

export default Navbar

