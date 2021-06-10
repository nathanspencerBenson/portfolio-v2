import React from 'react';
import './Landingpage.scss';
import splash from '../../assets/splash.svg';
import splatter from '../../assets/splatter.svg';


import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import FloatingBalls from '../FloatingBalls/FloatingBalls';







function Landingpage() {
    return (
        <div className="landingpage">
            <div className="landingpage__text">
                <p>Hi, I'm a front-end developer based in Munich. <br /> Welcome to my Portfolio.</p>
                <h1>Nathan <br /> Benson</h1>
            </div>
            <img className="splatter" src={splatter} /> 
            <FloatingBalls />
            <div className="landingpage__icons">
                <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin  className="icon"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="icon" /></a>
            </div>
        </div>
    )
}

export default Landingpage
