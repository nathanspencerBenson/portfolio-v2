import React from 'react';
import './About.scss';

function About() {
    return (
        <div className="about">
            <h1 className="about__title"><div></div><span>About</span> Me</h1>
            <div className="about__main">
                
                    <img src="https://miro.medium.com/max/3960/0*HICLyAdNSIyT0ODU.jpg" />
                <div>
                    <h2>I'm Nathan, a Front-end Developer living in beautiful Munich, Germany.</h2>
                    <p>Deeply invested in the life-long learning mentality, I'm a developer who carries a keen eye for design in a user-first approach. My focus is in creating eye-catching designs on the JavaScript stack of React.
                    When I'm not coding, you'll find me cooking, reading or eating.
                    </p>
                </div>
                
            </div>

            <div className="about__opportunities">
                <h1>I occasionally take on <br /> freelance opportunities.</h1>
                <p>Have an exciting project where you need some help? <br />
                    Send me over a message, and <a href="#">let's chat</a>.</p>
            </div>
            
        </div>
    )
}

export default About
