import React from "react";
import './Footer.scss';

import IconLogo from '../../assets/img/XMLID_7185_.png'
import IconPhone from '../../assets/img/Footer/icon (1).svg';
import IconMail from '../../assets/img/Footer/icon (2).svg';
import IconLocation from '../../assets/img/Footer/icon (3).svg';
import IconFacebook from '../../assets/img/Footer/Facebook.svg';
import IconTwitter from '../../assets/img/Footer/twitter.svg';
import IconLinkedin from '../../assets/img/Footer/insta.svg';
import Icondecor1 from '../../assets/img/Footer/Group (1).svg';
import Icondecor2 from '../../assets/img/Footer/Group.svg';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__contact-block">
                        <img src={IconPhone} alt="phone" className="footer__icon" />
                        <div>
                            <div className="footer__contact-title">Call us any time:</div>
                            <div className="footer__contact-info">+256 214 203 215</div>
                        </div>
                    </div>
                    <div className="footer__contact-block">
                        <img src={IconMail} alt="mail" className="footer__icon" />
                        <div>
                            <div className="footer__contact-title">Email us 24/7 hours:</div>
                            <div className="footer__contact-info">info@edura.com</div>
                        </div>
                    </div>
                    <div className="footer__contact-block">
                        <img src={IconLocation} alt="location" className="footer__icon" />
                        <div>
                            <div className="footer__contact-title">Our university location:</div>
                            <div className="footer__contact-info">147/1, Green Road, Dhaka</div>
                        </div>
                    </div>
                </div>
                <div className="footer__main">
                    <div className="footer__col footer__col--about">
                        <div className="footer__logo-block">
                            <img src={IconLogo} alt="Edura Logo" className="footer__logo" />
                            <span className="footer__brand">EDURA</span>
                        </div>
                        <div className="footer__desc">
                            Continually optimize backward manufactured products whereas communities negotiate life compelling alignments
                        </div>
                        <div className="footer__socials">
                            <span>FOLLOW US ON:</span>
                            <div className="footer__social-icons">
                                <img src={IconFacebook} alt="facebook" />
                                <img src={IconTwitter} alt="twitter" />
                                <img src={IconLinkedin} alt="linkedin" />
                            </div>
                        </div>
                    </div>
                    <div className="footer__col footer__col--links">
                        <div className="footer__col-title">Quick Links</div>
                        <ul>
                            <li>Life Coach</li>
                            <li>Business Coach</li>
                            <li>Health Coach</li>
                            <li>Development</li>
                            <li>Web Design</li>
                            <li>SEO Optimize</li>
                        </ul>
                    </div>
                    <div className="footer__col footer__col--resources">
                        <div className="footer__col-title">Resources</div>
                        <ul>
                            <li>Community</li>
                            <li>Support</li>
                            <li>Video Guides</li>
                            <li>Documentation</li>
                            <li>Security</li>
                            <li>Template</li>
                        </ul>
                    </div>
                    <div className="footer__col footer__col--subscribe">
                        <div className="footer__col-title">Get in touch!</div>
                        <div className="footer__subscribe-desc">
                            Fusce varius, dolor tempor interdum tristiquei bibendum service life.
                        </div>
                        <form className="footer__subscribe-form">
                            <input type="email" placeholder="Enter Email" />
                        </form>
                    </div>
                    <button className="footer__subscribe-btn">SUBSCRIBE NOW<span>&rarr;</span></button>
                    <div className="footer__bottom">
                        <span>Copyright © 2023 <span className="footer__brand-link">Edura</span>. All Rights Reserved.</span>
                        <div className="footer__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}