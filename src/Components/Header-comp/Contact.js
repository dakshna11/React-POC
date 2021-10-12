import React from 'react';
import {Link} from 'react-router-dom'


function Contact(props) {
    return (
        <div>
            
            <div>
                <div className="WP">
                    <div className='WP-container' >
                        <h1 className="WP-text">Contact Us</h1>
                        <p>
                            <Link className="wordsWP" to={'/Contact'}>Home </Link>/
                            <Link className="wordsWP" to={'/Contact'}> Contact</Link>
                        </p>
                    </div>  
                </div>
            </div>


            <div class="contact">
            <div class="container">
                <div class="section-header text-center">
                    <p style={{textAlign:'center',color:'red',fontWeight:'bold',fontSize:'large'}}>Get In Touch</p>
                    <h2 style={{textAlign:'center',fontStyle:'normal',fontSize:'40px',fontWeight:'bolder',color:'#202C45'}}>
                        Contact for any query
                    </h2>
                </div>
                <div class="row">
                    <div class="Contact-box">
                    <div class="ContactInfo">
                        <div class="contact-info">
                            <h2>Quick Contact Info</h2>
                            <div class="contact-info-item">
                                <div class="contact-info-icon">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="contact-info-text">
                                    <h3>Opening Hour</h3>
                                    <p>Mon - Fri, 8:00 - 9:00</p>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="contact-info-icon">
                                    <i class="fa fa-phone-alt"></i>
                                </div>
                                <div class="contact-info-text">
                                    <h3>Call Us</h3>
                                    <p>+012 345 6789</p>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="contact-info-icon">
                                    <i class="far fa-envelope"></i>
                                </div>
                                <div class="contact-info-text">
                                    <h3>Email Us</h3>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ContactForm">
                        <div class="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div class="control-group">
                                    <input type="text" class="formControl" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="email" class="formControl" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="text" class="formControl" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea class="formControl" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button id="btn-about" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div style={{margin:'8%'}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd"
                         frameborder="0" style={{border:"0" ,allowfullscreen:"" ,ariaHidden:"false", tabindex:"0"}}></iframe>
                    </div>
                </div>
            </div>
        </div>


        </div>
    );
}

export default Contact;