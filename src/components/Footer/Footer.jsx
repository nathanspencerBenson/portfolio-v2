import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b23bff" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,234.7C384,245,480,171,576,133.3C672,96,768,96,864,106.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path> </svg>
            <div><p> &copy; Nathan Benson 2021</p></div>
        </div>
    )
}

export default Footer
