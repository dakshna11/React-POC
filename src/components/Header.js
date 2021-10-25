import React from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-sticky-el';


/*
let style={ textDecoration: 'none',
            color:'white',
    //":hover:{color:'red'}
}*/
function Header(props) {
    return (
        <div>
            <Sticky className="sticky">
        <div className="header">
            
            
            <div className="main">
            <div className="H-container">
            <p ><Link  className="words" to={'/'} > Home </Link></p>
            <p><Link className="words" to={'/About'} > About </Link></p>
            <p><Link className="words" to={'/Service'} > Service </Link></p>
            <p><Link className="words" to={'/Price'} > Price </Link></p>
            <p><Link className="words" to={'/Washing Points'} > Washing Points </Link></p>
            <p className="dropdown">
                <Link className="words" to={'/Pages'} > 
                Pages 
                <i id='caret-down' className ="fa fa-caret-down"></i>
                </Link>
            
                <div className='dropdown-content'>
                    <p>Blog Grid</p>
                    <p>Detail Page</p>
                    <p>Team Member</p>
                    <p>Schedule Booking</p>
                </div>
            </p>
            <p><Link className="words" to={'/Contact'} > Contact </Link></p>
            </div>
            <div><button id = "btn" >Get Appointment</button></div>
            
            </div>
        
            
        </div>
        </Sticky>
        </div>
    );
}

export default Header;