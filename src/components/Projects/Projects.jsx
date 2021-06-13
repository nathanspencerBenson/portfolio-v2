import React, { useEffect } from 'react';
import './Projects.scss';

import ProjectCard from './ProjectCard/ProjectCard';
import splash from '../../assets/splash.svg';
import splash2 from '../../assets/splash2.svg';
import splash3 from '../../assets/splash3.svg';
import blobBlue from '../../assets/blobPink.svg';

import gamerParadise from '../../assets/gamer-paradise.png';


function Projects() {

    
    return (
        <div className="projects">
            <h1 className="projects__title">My <span>Work</span> <div></div></h1>
            <img src={splash} className="project__splash" />
            <img src={splash2} className="project__splash2" />
            <img src={splash3} className="project__splash3" />
            <img src={splash2} className="project__splash4" />
            <img src={blobBlue} className="project__splash5" />
            <ProjectCard title={"Gamer Paradise"} tech={"React, Commerce.js, stripe"} description={"E-commerce Store"} img={gamerParadise} githubLink={"https://github.com/nathanspencerBenson/gamer-paradise"} initialXPosition={'-70vw'} />
            <ProjectCard title={"League of Legends"} tech={"React, HTML, SCSS"} description={"Gaming Platform"} img={"https://miro.medium.com/max/1838/1*3OPetZmlwDajdEBi3DQ1Rg.png"} flexOrder={1} initialXPosition={'70vw'} />
            <ProjectCard title={"Amazon"} tech={"React, Redux, Firebase, SCSS, HTML"} description={"E-commerce store"}  img={"https://miro.medium.com/max/5760/1*gne7WEPhB9-NlQCC5WDnzw.png"} initialXPosition={'-70vw'}  />
            <ProjectCard title={"Spotify"} tech={"React, REST API, Firebase"} description={"Music store"} img={"https://apcaglobal.com/images/cloudandinternet/how-to-listen-to-spotify-with-just-your-web-browser_2.png"}  flexOrder={1} initialXPosition={'70vw'} />
            
        </div>
    )
}

export default Projects
