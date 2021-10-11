import React from 'react';
import './styles.css'
import Footer from './Footer';
import logo from './about1.jpg'
function About() {
    return (
        <div>
        <div className="about-us">
            <div className='about-container' >
                <h1 className="about-text">About Us</h1>
                <p>Home / About Us</p>
            </div>  
        </div>
        
            <img src={logo} alt='Hello' height='400px' width='400px'></img>
            <Footer/>
        </div>
    );
}

export default About;