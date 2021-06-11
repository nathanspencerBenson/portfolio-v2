import React from 'react';
import './SkillsIcon.scss';

import { FaHtml5, FaCss3Alt, FaSass, FaReact} from 'react-icons/fa';

import { motion } from "framer-motion";

function SkillsIcon({ icon, text}) {
    return (
        <div className="skill-container">
                    <motion.div
                        whileHover={{
                            translateY: '-35px'

                        }}
                    >{icon}
                    </motion.div>
                    <span>{text}</span>
                </div>
    )
}

export default SkillsIcon
