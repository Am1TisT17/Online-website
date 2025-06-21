import React, { useState, useRef } from "react";
import "./AboutOurUni.scss";
import categorypic1 from '../../../assets/img//About/AboutOurUni/image.svg';
import categorypic2 from '../../../assets/img/About/AboutOurUni/image (1).svg';
import icon1 from '../../../assets/img/About/AboutOurUni/007-education 2.svg';
import icon2 from '../../../assets/img/About/AboutOurUni/002-book 1.svg';
import cinema from '../../../assets/img/categories/cinema.jpg';
import que from '../../../assets/img/Que.svg';
import alo from '../../../assets/img/alo.svg';

export default function AboutOurUni() {
    return(
        <section className="about-uni-section">
            <div className="about-uni-wrapper">
                <div className="visual-content">
                    <div className="main-image">
                        <img src={categorypic1} alt="University main image" />
                    </div>
                    <div className="secondary-image">
                        <img src={categorypic2} alt="University secondary image" />
                    </div>
                    <div className="decorative-elements">
                        <div className="blue-circle"></div>
                    </div>
                    <div className="statistics-box">
                        <h2>10k +</h2>
                        <p>STUDENTS ACTIVE OUR COURSES</p>
                    </div>
                </div>
                
                <div className="text-content">
                    <div className="header-section">
                        <img src={alo} alt="About icon" />
                        <h6>ABOUT OUR UNIVERCITY</h6>
                        <h2>Welcome to Edura University.</h2>
                        <p>Collaboratively simplify user friendly networks after principle centered coordinate effective methods of empowerment distributed niche markets pursue market positioning web-readiness after resource sucking applications.</p>
                    </div>
                    <div className="education-types">
                        <div className="education-card">
                            <img src={icon2} alt="Undergraduate icon" />
                            <div className="education-text">
                                <h5>Undergraduate Education</h5>
                                <p>With flexible courses</p>
                            </div>
                        </div>
                        <div className="education-card">
                            <img src={icon1} alt="Postgraduate icon" />
                            <div className="education-text">
                                <h5>Postgraduate Education</h5>
                                <p>Study flexibly online</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="features-section">
                        <div className="media-content">
                            <img src={cinema} alt="Cinema preview" />
                        </div>
                        <div className="benefits-list">
                            <ul>
                                <li><img src={que} alt="Check icon" /> Get access to 4,000+ of our top courses</li>
                                <li><img src={que} alt="Check icon" /> Popular topics to learn now</li>
                                <li><img src={que} alt="Check icon" /> Find the right instructor for you</li>
                            </ul>
                        </div>
                    </div>
                    
                    <button className="cta-button">ABOUT MORE →</button>
                </div>
            </div>
        </section>
    )
}