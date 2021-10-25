import React from 'react';
import car from '../img/car.png'
import window from '../img/window.png'
import vacuum from '../img/vacuum-cleaner.png'
import seat from '../img/seat.png'
import interior from '../img/interior.png'
import oil from '../img/car-oil.png'
import brake from '../img/brake.png'
function Service(props) {
    return (
        <div>
            <div className="about-us">
            <div className='about-container' >
                <h1 className="about-text">Service</h1>
                <p>Home / Service</p>
            </div> 
            </div> 
            <div>
                <p id='service-heading'>WHAT WE DO?</p>
                <h1 style={{textAlign:'center', color:'#202c45'}}>Premium Washing Services</h1>
            </div>
            <div className='content1'>
                <div>
                    <img src={car} height='50px' width='50px'></img>
                    <h3>Exterior Washing</h3>
                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                </div>
                <div style={{marginLeft:'2%'}}>
                    <img src={interior} height='50px' width='50px'></img>
                    <h3>Interior Washing</h3>
                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                </div>
                <div style={{marginLeft:'2%'}}>
                    <img src={vacuum} height='50px' width='50px'></img>
                    <h3>Vaccum Cleaning</h3>
                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                </div>
                <div style={{marginLeft:'2%'}}>
                    <img src={seat} height='50px' width='50px'></img>
                    <h3>Seats Washing</h3>
                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                </div>
            </div>
            <div className='content2'>
                <div style={{marginLeft:'2%'}}>
                        <img src={window} height='50px' width='50px'></img>
                        <h3>Window Wiping</h3>
                        <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                </div>
                <div style={{marginLeft:'2%'}}>
                    <img src={window} height='50px' width='50px'></img>
                    <h3>Wet Cleaning</h3>
                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                </div>
                <div style={{marginLeft:'2%'}}>
                    <img src={oil} height='50px' width='50px'></img>
                    <h3>Oil Changing</h3>
                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                </div>
                <div style={{marginLeft:'2%'}}>
                    <img src={brake} height='50px' width='50px'></img>
                    <h3>Brake Repair</h3>
                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                </div>
            </div>
            
        </div>
    );
}

export default Service;