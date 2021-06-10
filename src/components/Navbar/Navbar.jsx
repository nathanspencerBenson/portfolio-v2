import React from 'react';
import './Navbar.scss';
import bird from '../../assets/bird.svg'

function Navbar() {
    return (
        <div className="navbar">
        <div></div>
            <ul className="navbar__links">
                <li>PROJECTS</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            
        </div>
    )
}

export default Navbar

