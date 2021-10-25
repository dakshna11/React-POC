import React from 'react';

function Price(props) {
    return (
        <div>
            <div className="about-us">
                <div className='about-container' >
                    <h1 className="about-text">Washing Plan</h1>
                    <p>Home / Price</p>
                </div>  
            </div>
            <div>
                <p id='washing-heading'>Washing Plan</p>
                <h1 style={{textAlign: 'center', color:'#202c45', fontSize:'50px'}}>Choose Your Plan</h1>
            </div>
            <div className='price-main'>
                <div className='price1'>
                    <p id='price-heading'>BASIC CLEANING</p>
                    <p id='price-rate1'> $ 25.99</p>
                    <p>Seats Washing</p>
                    <p>Vacuum Cleaning</p>
                    <p>Exterior Cleaning</p>
                    <p>Interior Wet Cleaning</p>
                    <p>Window Wiping</p>
                    <button id='btn-price1'>Book Now</button>
                </div>
                <div className='price2'>
                    <p style={{color:'red'}} id='price-heading'>PREMIUM CLEANING</p>
                   <div id='price-rate2'><p > $</p><p> 35</p><p>.99</p></div>
                    <p>Seats Washing</p>
                    <p>Vacuum Cleaning</p>
                    <p>Exterior Cleaning</p>
                    <p>Interior Wet Cleaning</p>
                    <p>Window Wiping</p>
                    <button id='btn-about'>Book Now</button>
                </div>
                <div className='price3'>
                    <p id='price-heading'>COMPLEX CLEANING</p>
                    <p id='price-rate3'> $ 49.99</p>
                    <p>Seats Washing</p>
                    <p>Vacuum Cleaning</p>
                    <p>Exterior Cleaning</p>
                    <p>Interior Wet Cleaning</p>
                    <p>Window Wiping</p>
                    <button id='btn-price3'>Book Now</button>
                </div>
            </div>
            <br/>
            <br/>
            
        </div>
    );
}

export default Price;