import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <h3>Get In Touch<p style={{color:'white'}}>123 Street, New York, USA</p><p style={{color:'white'}}>+012 345 67890</p><p style={{color:'white'}}>info@example.com</p></h3>
            <h3>Popular links<p className="words">About us</p><p className="words">Contact us</p><p className="words">our service</p><p className="words">Service points</p><p className="words">Pricing plan</p></h3>
            <h3>Useful links
                
                <p className="words">terms of use</p>
                <p className="words">Privacy policy</p>
                <p className="words">Cookies</p>
                <p className="words">Help</p>
                <p className="words">FAQs</p>
                
            </h3>
            <div class="col-lg-3 col-md-6">
                        <div class="footer-newsletter" >
                            <h3>Newsletter</h3>
                            <form>
                                <input class="form-control" placeholder="Full Name"/><br/>
                                <input class="form-control" placeholder="Email"/><br/>
                                <div><button  id="btn">Submit</button></div>
                            </form>
                        </div>
                    </div>
        </div>
    );
}

export default Footer;