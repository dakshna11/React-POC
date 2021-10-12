import React from 'react';
import logo from './about.jpg'
import DemoCarousel from './Carousel';

function Home(props) {
    return (
        <div>
            <DemoCarousel/>
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
            <div className="location">
            <div className="WPcontainer">
                <div className="WProw">
                    <div className="WP-content">
                        <div >
                            <p style={{color:'red',fontSize:'15px',fontWeight:'bold'}}>
                                <span style={{textDecorationLine:'underline'}}>W A S H I N G  </span>  P O I N T S
                            </p>
                            <h2 style={{fontStyle:'normal',fontSize:'40px',fontWeight:'bolder',color:'#202C45'}}>
                                Car Washing & Care Points
                            </h2>
                        </div>
                        <div className="WP-row">
                            <div className="WP-row1">
                            <div >
                                <div className="location-item">
                                    <i ></i>
                                    <div className="location-text">
                                        <h3>Car Washing Point</h3>
                                        <p>123 Street, New York, USA</p>
                                        <p><strong>Call:</strong>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="location-item">
                                    <i ></i>
                                    <div className="location-text">
                                        <h3>Car Washing Point</h3>
                                        <p>123 Street, New York, USA</p>
                                        <p><strong>Call:</strong>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="WP-row2">
                            <div >
                                <div className="location-item">
                                    <i ></i>
                                    <div className="location-text">
                                        <h3>Car Washing Point</h3>
                                        <p>123 Street, New York, USA</p>
                                        <p><strong>Call:</strong>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="location-item">
                                    <i ></i>
                                    <div className="location-text">
                                        <h3>Car Washing Point</h3>
                                        <p>123 Street, New York, USA</p>
                                        <p><strong>Call:</strong>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="WP-form">
                        <div className="location-form">
                            <h3>Request for a car wash</h3>
                            <form>
                                <div className="control-group">
                                    <input type="text" className="form-control" placeholder="Name" required="required" />
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" placeholder="Email" required="required" />
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" placeholder="Description" required="required"></textarea>
                                </div>
                                <div style={{width:''}}>
                                    <button id="btn-WP" type="submit">Send Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        </div>
    );
}

export default Home;