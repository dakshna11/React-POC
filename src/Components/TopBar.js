import React from 'react';
import './styles.css'
function TopBar() {
    return (
        <div className="topbar">
            <div><span id="logo-1">Auto</span><span id="logo-2">Wash</span></div>
            <div><h3>Opening Hour</h3><p>Mon - Fri, 8.00 - 9.00</p></div>
             
            <div><h3>Call Us</h3><p>+012 345 6789</p></div>
            <div><h3>Email Us</h3><p>info@example.com</p></div>
        </div>
        
    );
}

export default TopBar;