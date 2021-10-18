import React from 'react';
import phone from './img/phone-call.png';
import clock from './img/clock.png'
import email from './img/email.png'
function TopBar() {
    return (
        <div className="topbar">
            <div style={{marginTop:'1%',marginLeft:'-6%'}}>
                <span id="logo-1">Auto</span><span id="logo-2">Wash</span>
            </div>
            <div className='topbar-main'>
                <div className='topbar-content-main'>
                    <img src={clock} height='35px' width='35px' style={{marginTop:'20%'}}></img>
                    <div className='topbar-content'> 
                        <h3 style={{marginBottom:'0px'}}>Opening Hour</h3>
                        <p style={{width:'150px'}}>Mon - Fri, 8.00 - 9.00</p>
                    </div>
                </div>
                <div className='topbar-content-main'>
                    <img src={phone} height='35px' width='35px' style={{marginTop:'20%'}}></img>
                    <div className='topbar-content'> 
                        <h3 style={{marginBottom:'0px'}}>Call Us</h3>
                        <p style={{width:'150px'}}>+012 345 6789</p>
                    </div>
                </div>
                <div  className='topbar-content-main' style={{marginLeft:'2%'}}>
                <img src={email} height='35px' width='35px' style={{marginTop:'20%'}}></img>
                <div className='topbar-content'> 
                    <h3 style={{marginBottom:'0px'}}>Email Us</h3>
                    <p style={{width:'150px'}}>info@example.com</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default TopBar;
