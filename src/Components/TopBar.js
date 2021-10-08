import React from 'react';
import './styles.css'
function TopBar() {
    return (
        <div className="topbar">
            <h1 id="logo">Auto Wash</h1>
            <h3>Opening Hour<p>Mon - Fri, 8.00 - 9.00</p></h3>
            <h3>Call Us<p>+012 345 6789</p></h3>
            <h3>Email Us<p>info@example.com</p></h3>
        </div>
        
    );
}

export default TopBar;