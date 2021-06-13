import React from 'react';
import './ProjectCard.scss';

import { BsCodeSlash, BsEyeFill } from 'react-icons/bs';

function ProjectCard({ flexOrder, title, tech, description, img, githubLink }) {
    return (
        <div className="projectCard">
            <div className="projectCard__left" style={{order: flexOrder}}>
            <img src={img} />

            </div>
            <div className="projectCard__right">
                <h1>{title}</h1>
                <p className="projectCard__tech">{tech}</p>
                <p>{description}</p>
                <div className="projectCard__buttons">  
                    <a href="#" target="_blank" rel="noopener noreferrer"><button><BsEyeFill  style={{marginRight: "5px"}}/>Demo</button></a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer"><button><BsCodeSlash style={{marginRight: "5px"}} />Code</button></a>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard
