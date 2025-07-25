import React from "react";
import avas from '../../assets/img/why/why-ava.png';
import que from '../../assets/img/Que.svg';
import img from '../../assets/img/why/why-img.png';
import card from '../../assets/img/why/why-card.svg';
import alo from '../../assets/img/alo.svg';
import ggg from '../../assets/img/why/noiceTexturebg.svg'
import "./Why.scss";

export default function WhyChooseUs() {
    return (
        <section className="why-section">
            <div className="why-container">
                <div>
                    <img src = {ggg} alt="a" className="ggg" />
                </div>
                <div className="left-section">
                    <img src={img} alt="Why Choose Us" className="why-img" />
                    <div className="students-info">
                        <div className="students-count">
                            <h3>10k+</h3>
                            <h2>Active Students</h2>
                        </div>
                        <div className="students-avatars">
                            {[1, 2, 3, 4].map((_, index) => (
                                <img key={index} src={avas} alt="Student avatar" className="student-avatar" />
                            ))}
                            <span className="avatar-count">10k+</span>
                        </div>
                    </div>
                    <button className="why-button">GET STARTED</button>
                </div>
                <div className="right-section">
                    <div className="right-section__header">
                        <img src={alo} alt="Decoration" className="alo-icon" />
                        <h6 className="subtitle">WHY CHOOSE US</h6>
                        <h2 className="title">Thousands Of Experts Around The World Ready To Help.</h2>
                        <p>Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value via focused benefits. Rapidiously redefine highly efficient niche markets with plug-and-play materials professionally seize client centric solutions</p>
                    </div>
                    <div className="features-grid">
                        {[  
                            { title: "World Class Trainers", text: "Seamlessly envisioneer tactical data through services.", checked: true },
                            { title: "Easy Learning", text: "Seamlessly envisioneer tactical data through services.", checked: true },
                            { title: "Flexible", text: "Seamlessly envisioneer tactical data through services.", checked: true },
                            { title: "Affordable Price", text: "Seamlessly envisioneer tactical data through services.", checked: true }
                        ].map((feature, index) => (
                            <div key={index} className="feature-card">
                                <img src={card} alt="Card background" className="card-bg" />
                                <div className="feature-title-row">
                                    {feature.checked && <img src={que} alt="Feature icon" className="feature-icon checked" />}
                                    <h3>{feature.title}</h3>
                                </div>
                                <p>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}