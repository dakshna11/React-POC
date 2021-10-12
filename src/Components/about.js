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
        <div className='about-main'>
        <div className='about-img'>
            <img src={logo} alt='Hello' height='650px' width='550px' style={{borderRadius:'7px'}}></img></div>
        <div className='about-content'>
            <p className='about-heading'>ABOUT US</p>
            <h1>Car Washing And Detailing</h1>
            <p>Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre dui, vel blandit 
                massa. Ut vestibu suscipi cursus. Cras quis porta nulla, ut placerat risus. 
                Aliquam nec magna eget velit luctus dictum</p>
            <p>Seats washing</p>
            <p>Vaccum cleaning</p>
            <p>Interior wet cleaning</p>
            <p>Window wiping</p>
            <button id='btn-about'>Learn More</button>
        </div>
        </div>
            <Footer/>
        </div>
    );
}

export default About;