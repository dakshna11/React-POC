import React from 'react';
import { Link } from 'react-router-dom';
import location from '../img/loc-mark.png'

function WashingPoints(props) {
    return (
        <div>
            <div>
                <div className="WP">
                    <div className='WP-container' >
                        <h1 className="WP-text">Washing Points</h1>
                        <p>
                            <Link className="wordsWP" to={'/Washing Points'}>Home </Link>/
                           <Link className="wordsWP" to={'/Washing Points'}> Location</Link>
                        </p>
                    </div>  
                </div>
            </div>
            

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
                                    <img src={location} width='35px' height='35px' style={{paddingTop:'10%'}}></img>
                                    <div className="location-text">
                                        <h3>Car Washing Point</h3>
                                        <p>123 Street, New York, USA</p>
                                        <p><strong>Call:</strong>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="location-item">
                                <img src={location} width='35px' height='35px' style={{paddingTop:'10%'}}></img>
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
                                    <img src={location} width='35px' height='35px' style={{paddingTop:'10%'}}></img>
                                    <div className="location-text">
                                        <h3>Car Washing Point</h3>
                                        <p>123 Street, New York, USA</p>
                                        <p><strong>Call:</strong>+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="location-item">
                                    <img src={location} width='35px' height='35px' style={{paddingTop:'10%'}}></img>
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
                                    <input type="text" className="form-control" placeholder="Name" required="required"/>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" placeholder="Email" required="required" />
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" placeholder="Description" required="required"></textarea>
                                </div>
                                <div style={{width:''}}>
                                    <button id="btn-WP" data-testid="btn-WP" type="submit" onClick={()=>alert('form submitted')}>Send Request</button>

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

export default WashingPoints;