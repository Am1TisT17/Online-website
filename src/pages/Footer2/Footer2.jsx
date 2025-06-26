import React from "react";
import './Footer2.scss';

import IconLogo from '../../assets/img/XMLID_7185_.png'
import IconPhone from '../../assets/img/Footer/phone.svg';
import IconMail from '../../assets/img/Footer/letter.svg';
import IconLocation from '../../assets/img/Footer/point.svg';
import IconFacebook from '../../assets/img/Footer/Facebook.svg';
import IconTwitter from '../../assets/img/Footer/darktwitter.svg';
import IconInsta from '../../assets/img/Footer/darkinsta.svg';
import Icondecor1 from '../../assets/img/Footer/Group (1).svg';
import Icondecor2 from '../../assets/img/Footer/Group.svg';

export default function Footer2() {
    return (
        <footer className="footer2">
            <img src={Icondecor1} alt="decor" className="footer2__decor-1" />
            <img src={Icondecor2} alt="decor" className="footer2__decor-2" />
            <div className="blurred-circle"></div>
            <div className="footer2__container">
                <div className="footer2__top">
                    <div className="footer2__logo-block">
                        <img src={IconLogo} alt="Edura Logo" className="footer2__logo" />
                        <span className="footer2__brand">EDURA</span>
                    </div>
                    <div className="footer2__subscribe">
                        <div className="footer2__subscribe-title">Subscribe Our Newsletter For Latest Updates</div>
                        <div className="footer2__subscribe-form">
                            <input type="email" placeholder="Enter Email" />
                            <button type="submit" className="footer2__subscribe-btn">SUBSCRIBE NOW<span>&rarr;</span></button>
                        </div>
                    </div>
                </div>

                <div className="footer2__main">
                    <div className="footer2__col footer2__col--about">
                        <div className="footer2__col-title">About Company</div>
                        <div className="footer2__desc">
                            Continually optimize backward manufactured products whereas communities negotiate life compelling alignments
                        </div>
                        <div className="footer2__socials">
                            <span>FOLLOW US ON:</span>
                            <div className="footer2__social-icons">
                                <a href="#"><img src={IconFacebook} alt="facebook" /></a>
                                <a href="#"><img src={IconTwitter} alt="twitter" /></a>
                                <a href="#"><img src={IconInsta} alt="instagram" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="footer2__col footer2__col--links">
                        <div className="footer2__col-title">Quick Links</div>
                        <ul>
                            <li>Life Coach</li>
                            <li>Business Coach</li>
                            <li>Health Coach</li>
                            <li>Development</li>
                            <li>Web Design</li>
                            <li>SEO Optimize</li>
                        </ul>
                    </div>

                    <div className="footer2__col footer2__col--courses">
                        <div className="footer2__col-title">Our Courses</div>
                        <ul>
                            <li>Health Course</li>
                            <li>Web Development</li>
                            <li>UI/UX Design</li>
                            <li>Life Style Course</li>
                            <li>Digital Marketing</li>
                            <li>Graphics Design</li>
                        </ul>
                    </div>

                    <div className="footer2__col footer2__col--resources">
                        <div className="footer2__col-title">Resources</div>
                        <ul>
                            <li>Community</li>
                            <li>Support</li>
                            <li>Video Guides</li>
                            <li>Documentation</li>
                            <li>Security</li>
                            <li>Template</li>
                        </ul>
                    </div>

                    <div className="footer2__col footer2__col--contact">
                        <div className="footer2__col-title">Get in touch!</div>
                        <div className="footer2__desc">
                            Fusce varius, dolor tempor interdum tristiquei bibendum service life.
                        </div>
                        <div className="footer2__contact-info">
                            <div className="footer2__contact-item">
                                <img src={IconLocation} alt="location" className="footer2__icon" />
                                <span>147/I, Green Road, Gulshan Avenue, Panthapath, Dhaka</span>
                            </div>
                            <div className="footer2__contact-item">
                                <img src={IconMail} alt="email" className="footer2__icon" />
                                <span>info@edura.com</span>
                            </div>
                            <div className="footer2__contact-item">
                                <img src={IconPhone} alt="phone" className="footer2__icon" />
                                <span>+256 214 203 215</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer2__bottom">
                <div className="footer2__bottom-container">
                    <span>Copyright © 2023 <span className="footer2__brand-link">Edura</span>. All Rights Reserved.</span>
                    <div className="footer2__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}