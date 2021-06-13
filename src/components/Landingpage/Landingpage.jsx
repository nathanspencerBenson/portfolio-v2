import React from 'react';
import './Landingpage.scss';
import splash from '../../assets/splash.svg';
import splatter from '../../assets/splatter.svg';

import { motion } from 'framer-motion';


import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import FloatingBalls from '../FloatingBalls/FloatingBalls';







function Landingpage() {
    return (
        <div className="landingpage">
            <div className="landingpage__text">
                <p>Hi, I'm a front-end developer based in Munich. <br /> Welcome to my Portfolio.</p>
                <motion.h1
                >Nathan <br /> Benson</motion.h1>
            </div>
            <motion.img
            intial={{opacity: 0 }}
            animate={{opacity: 1}}
            transition={{ duration: 4, repeat: Infinity }} className="splatter" src={splatter} /> 
            <FloatingBalls />
            <div className="landingpage__icons">
                <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin  className="icon"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="icon" /></a>
            </div>
        </div>
    )
}

export default Landingpage
