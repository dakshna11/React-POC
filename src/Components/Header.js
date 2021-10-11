import React from 'react';
import {BrowserRouter as Router , Switch, Route, Link , Redirect } from 'react-router-dom';
import HeaderSub from './Header-comp/HeaderSub';
import Home from './Header-comp/Home';
import WashingPoints from './Header-comp/WashingPoints';

let style={ textDecoration: 'none',
            color:'white',
    //":hover:{color:'red'}
}
function Header(props) {
    return (
        
        <div className="header">
            
            <Router>
            <div className="main">
            <div className="H-container">
            <p ><Link  className="words" to={'/'} > Home </Link></p>
            <p><Link className="words" to={'/about'} > About </Link></p>
            <p><Link className="words" to={'/Service'} > Service </Link></p>
            <p><Link className="words" to={'/Price'} > Price </Link></p>
            <p><Link className="words" to={'/Washing Points'} > Washing Points </Link></p>
            <p><Link className="words" to={'/Pages'} > Pages </Link></p>
            <p><Link className="words" to={'/Contact'} > Contact </Link></p>
            </div>
            <div><button id = "btn" onClick>Get Appointment</button></div>
            
            </div>
        
            
        <Switch>
            <Route exact path='/' component={HeaderSub}/>
            <Route path='/about' component={Home}/>
            <Route path='/Washing Points' component={WashingPoints}/>
        </Switch>
        
            
            </Router>
            
        </div>
    );
}

export default Header;