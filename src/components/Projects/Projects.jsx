import React, { useEffect } from 'react';
import './Projects.scss';

import ProjectCard from './ProjectCard/ProjectCard';
import splash from '../../assets/splash.svg';
import splash2 from '../../assets/splash2.svg';
import splash3 from '../../assets/splash3.svg';
import blobBlue from '../../assets/blobPink.svg';

import gamerParadise from '../../assets/gamer-paradise.png';
import coinMoon from '../../assets/coinmoon.png';
import linkedin from '../../assets/linkedin-clone.png';


function Projects() {

    
    return (
        <div className="projects" id="projects">
            <h1 className="projects__title">My <span>Work</span> <div></div></h1>
            <img src={splash} className="project__splash" />
            <img src={splash2} className="project__splash2" />
            <img src={splash3} className="project__splash3" />
            <img src={splash2} className="project__splash4" />
            <img src={blobBlue} className="project__splash5" />
            <ProjectCard title={"Gamer Paradise"} tech={"React, Commerce.js, stripe"} description={"E-commerce Store"} img={gamerParadise} githubLink={"https://github.com/nathanspencerBenson/gamer-paradise"} liveVersion={"https://gamerparadise.netlify.app"} initialXPosition={'-70vw'} />
            <ProjectCard title={"Linkedin Clone"} tech={"React, Redux, Firebase"} description={"Social Media Clone"} img={linkedin} githubLink={"https://github.com/nathanspencerBenson/linkedin-clone"} flexOrder={1} initialXPosition={'70vw'} />
            <ProjectCard title={"CoinMoon"} tech={"React, API"} description={"Cryptocurrency Price Tracker"}  img={coinMoon} githubLink={"https://github.com/nathanspencerBenson/cryptocurreny-price-tracker"} liveVersion={"https://coinmoon.netlify.app/"} initialXPosition={'-70vw'}   />
            <ProjectCard title={"Spotify"} tech={"React, REST API, Firebase"} description={"Music store"} img={"https://apcaglobal.com/images/cloudandinternet/how-to-listen-to-spotify-with-just-your-web-browser_2.png"}  flexOrder={1} initialXPosition={'70vw'} />
            
        </div>
    )
}

export default Projects
