import React from 'react';
import './Navbar.scss';


import { motion } from 'framer-motion';

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar__links">
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            
        </div>
    )
}

export default Navbar

