import React, { useState } from 'react';
import './Contact.scss';

import emailjs from 'emailjs-com';

import mailImage from '../../assets/mail.svg';
import { motion } from 'framer-motion';

function Contact() {
    const [ formSubmitted, setFormSubmitted ] = useState(false);
    const [ message, setMessage] = useState('');
    const [ result, setResult ] = useState('');

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
              setMessage('Your message was sent successfully. Thanks.');
              setFormSubmitted(true);
              setResult('success');


          }, (error) => {
              console.log(error.text);
              setFormSubmitted(true);
              setMessage('There was an error. Try again later.');
              setResult('failure');
              

          });
          e.target.reset();
      }

    return (
        <div className="contact" id="contact">
            <h1 className="contact__title"><div></div><span>Get</span> In Touch</h1>

            <p>Have a question or want to work together?</p>
            <div className="contact__container">
                <img src={mailImage} />
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Your name" name="user_name"   />
                    <input type="email" placeholder="Enter email" name="user_email" required/>
                    <textarea name="message" rows="15" cols="60"/>
                    <motion.button whileHover={{
                            backgroundColor: '#b23bff',
                            color: 'white'

                        }} type="submit">
                        SUBMIT
                    </motion.button>
                </form>
            </div>
            {formSubmitted ? (
            <div className={result}>{message} </div>
            ) : null}
        </div>
    )
}

export default Contact
