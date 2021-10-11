import React from 'react';

function Footer(props) {
    return (
        <div>
            <div className="footer-main">
                <div className="footer">
                <h3 id="footer-head" >Get In Touch<p style={{color:'white'}}>123 Street, New York, USA</p><p style={{color:'white'}}>+012 345 67890</p><p style={{color:'white'}}>info@example.com</p></h3>
                <h3 id="footer-head" >Popular links<p className="words">About us</p><p className="words">Contact us</p><p className="words">Our service</p><p className="words">Service points</p><p className="words">Pricing plan</p></h3>
                <h3 id="footer-head" >Useful links
                
                    <p className="words">Terms of use</p>
                    <p className="words">Privacy policy</p>
                    <p className="words">Cookies</p>
                    <p className="words">Help</p>
                    <p className="words">FAQs</p>
                
                </h3>
                </div>
            <div className="form-main">
            <div className="footer-form">
                        <div className="footer-newsletter" >
                            <h3 id="footer-head" >Newsletter</h3>
                            <form>
                                <input className="form-control" placeholder="Full Name"/><br/>
                                <input className="form-control" placeholder="Email"/><br/>
                                <div ><button  id="btn-footer">Submit</button></div>
                            </form>
                        </div>
            </div>
                </div>
            </div>
            

            <div class="copyright">
                <p>&copy; <a href="#">AutoWash</a>, All Right Reserved. Designed By <a href="https://htmlcodex.com">Team React</a></p>
            </div>
        
        </div>
    );
}

export default Footer;