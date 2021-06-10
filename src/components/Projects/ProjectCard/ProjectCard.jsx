import React from 'react';
import './ProjectCard.scss';

import { BsCodeSlash, BsEyeFill } from 'react-icons/bs';

function ProjectCard({ flexOrder, title, tech, description, img }) {
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
                    <a href="#"><button><BsEyeFill  style={{marginRight: "5px"}}/>Demo</button></a>
                    <a href="#"><button><BsCodeSlash style={{marginRight: "5px"}} />Code</button></a>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard
