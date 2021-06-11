import React from 'react';
import './Skills.scss';
import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaSass, FaReact} from 'react-icons/fa';
import { SiJavascript, SiRedux } from 'react-icons/si';
import SkillsIcon from './SkillsIcon/SkillsIcon';

function Skills() {
   
    return (
        <div className="skills">
            <h1 className="skills__title"><div></div><span>My</span> Skills</h1>
            <div className="skills__container">
                <SkillsIcon icon={<FaHtml5 className="icon" style={{color: '#E75327'}} />} text={'HTML5'}/>
                <SkillsIcon icon={<FaCss3Alt className="icon" style={{color: '#71B2DE'}} />} text={'CSS3'}/>
                <SkillsIcon icon={<SiJavascript className="icon" style={{color: '#F7DF1D'}} />} text={'JavaScript'}/>
                <SkillsIcon icon={<FaSass className="icon" style={{color: '#CC6798'}} />} text={'SCSS'}/>
                <SkillsIcon icon={<FaReact className="icon" style={{color: '#68E1FE'}} />} text={'React'}/>
                <SkillsIcon icon={<SiRedux className="icon" style={{color: '#774ABD'}} />} text={'Redux'}/>
            </div>
            
        </div>
    )
}

export default Skills
