import React from 'react';
import './SkillsIcon.scss';

import { FaHtml5, FaCss3Alt, FaSass, FaReact} from 'react-icons/fa';

import { motion } from "framer-motion";

function SkillsIcon({ icon, text, textColor}) {
    return (
        <div className="skill-container">
                    <motion.div
                        whileHover={{
                            translateY: '-35px'

                        }}
                    >{icon}
                    </motion.div>
                    <span style={{color: textColor}}>{text}</span>
                </div>
    )
}

export default SkillsIcon
