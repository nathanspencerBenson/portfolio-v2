import React from 'react';
import './Navbar.scss';


import { motion } from 'framer-motion';

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar__links">
                <li><a href="">PROJECTS</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
            
        </div>
    )
}

export default Navbar

