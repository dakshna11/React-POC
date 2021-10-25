import React from 'react';
import {Link} from'react-router-dom'

function Footer(props) {
    return (
        <div>
            <div className="footer-main">
                <div className="footer">
                <div id="footer-head" style={{marginLeft:'5%',marginRight:'3%'}}>
                <span style={{fontWeight:'bold'}}>Get In Touch</span>
                <p style={{color:'white'}}>123 Street, New York, USA</p>
                <p style={{color:'white'}}>+012 345 67890</p>
                <p style={{color:'white'}}>info@example.com</p>
                <div style={{marginTop:'15%'}}>
                    <button id="mybtn-social" style={{marginRight:'2%'}}><i className="fa fa-twitter"></i></button>
                    <button id="mybtn-social" style={{marginRight:'2%'}}><i className="fa fa-facebook"></i></button>
                    <button id="mybtn-social" style={{marginRight:'2%'}}><i className="fa fa-youtube-play"></i></button>
                    <button id="mybtn-social" style={{marginRight:'2%'}}><i className="fa fa-instagram"></i></button>
                    <button id="mybtn-social" style={{marginRight:'2%'}}><i className="fa fa-linkedin"></i></button>

                </div>
                </div>

                <div id="footer-head" ><span style={{fontWeight:'bold'}}>Popular links</span>
                    <Link className="wordsWP" to={'/Contact'}>
                        <p className="words-footer">
                            <i class="fa fa-chevron-right" style={{fontSize:'12px'}}></i>
                            About us
                        </p>
                    </Link>
                    <Link className="wordsWP" to={'/Contact'}>
                        <p className="words-footer">
                            <i class="fa fa-chevron-right" style={{fontSize:'12px'}}></i>
                            Contact us
                        </p>
                    </Link>
                    <Link className="wordsWP" to={'/Contact'}>
                        <p className="words-footer">
                            <i class="fa fa-chevron-right" style={{fontSize:'12px'}}></i>
                            Our service
                        </p>
                    </Link>
                    <Link className="wordsWP" to={'/Contact'}>
                        <p className="words-footer">
                            <i class="fa fa-chevron-right" style={{fontSize:'12px'}}></i>
                            Service points
                        </p>
                    </Link>
                    <Link className="wordsWP" to={'/Contact'}>
                        <p className="words-footer">
                            <i class="fa fa-chevron-right" style={{fontSize:'12px'}}></i>
                            Pricing plan
                        </p>
                    </Link>
                </div>
                <div id="footer-head" ><span style={{fontWeight:'bold'}}>Useful links</span>
                
                <Link className="wordsWP" to={'/Contact'}><p className="words-footer"><i class="fa fa-chevron-right" style={{fontSize:'12px'}}></i>Terms of use</p></Link>
                <Link className="wordsWP" to={'/Contact'}><p className="words-footer"><i class="fa fa-chevron-right" style={{fontSize:'12px'}}></i>Privacy policy</p></Link>
                <Link className="wordsWP" to={'/Contact'}><p className="words-footer"><i class="fa fa-chevron-right" style={{fontSize:'12px'}}></i>Cookies</p></Link>
                <Link className="wordsWP" to={'/Contact'}><p className="words-footer"><i class="fa fa-chevron-right" style={{fontSize:'12px'}}></i>Help</p></Link>
                <Link className="wordsWP" to={'/Contact'}><p className="words-footer"><i class="fa fa-chevron-right" style={{fontSize:'12px'}}></i>FAQs</p></Link>
                
                </div>
                </div>
            <div className="form-main">
            <div className="footer-form">
                        <div className="footer-newsletter" >
                            <h3 id="footer-head" >Newsletter</h3>
                            <form>
                                <input className="form-control" placeholder="Full Name"/><br/>
                                <input className="form-control" placeholder="Email"/><br/>
                                <div style={{width:'100%'}}><button  id="btn-footer">Submit</button></div>
                            </form>
                        </div>
                        <br/>
                        <br/>
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