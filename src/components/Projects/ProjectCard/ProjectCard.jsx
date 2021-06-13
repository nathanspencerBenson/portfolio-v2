import React, { useEffect } from 'react';
import './ProjectCard.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { BsCodeSlash, BsEyeFill } from 'react-icons/bs';


import { useAnimation } from 'framer-motion';



function ProjectCard({ flexOrder, title, tech, description, img, githubLink, initialXPosition }) {


    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'fade-in', duration: 0.9,
                }
            });
        }
        if(!inView){
            animation.start({
                x: initialXPosition,
                opacity: 0 
            })
        }
        
        console.log("use effect hook, in view = ", inView)
        
    }, [inView]);

    return (
        <div className="projectCard"
             ref={ref}>
            <motion.div className="projectCard__left" style={{order: flexOrder}} animate={animation}
            whileHover={{
                scale: 1.3,
                zIndex: 2,
                cursor: 'pointer'
                

            }}>
            <img src={img} />

            </motion.div>
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
