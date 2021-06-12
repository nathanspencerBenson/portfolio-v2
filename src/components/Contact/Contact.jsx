import React from 'react';
import './Contact.scss';

import mailImage from '../../assets/mail.svg';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <div className="contact">
            <h1 className="contact__title"><div></div><span>Get</span> In Touch</h1>

            <p>Have a question or want to work together?</p>
            <div className="contact__container">
                <img src={mailImage} />
                <form>
                    <input type="text" placeholder="Your name" name="name"   />
                    <input type="email" placeholder="Enter email" name="email" required/>
                    <textarea  rows="15" cols="60"/>
                    <motion.button whileHover={{
                            backgroundColor: '#b23bff',
                            color: 'white'

                        }} type="submit">
                        SUBMIT
                    </motion.button>
                </form>
            </div>
        </div>
    )
}

export default Contact
