import React, { useState } from "react";
import "./AboutOurInstructor.scss";
import alo from '../../../assets/img/alo.svg';
import facebook from '../../../assets/img/Footer/Facebook.svg';
import twitter from '../../../assets/img/Footer/darktwitter.svg';
import insta from '../../../assets/img/Footer/darkinsta.svg';
import avatar from '../../../assets/img/About/AboutOurInstructor/image (2).svg';
import border from '../../../assets/img/About/AboutOurInstructor/border.svg';
import plus from '../../../assets/img/Footer/plus.svg';


import vector4 from '../../../assets/img/OurInstructor/Vector(4).svg';
import vector5 from '../../../assets/img/OurInstructor/Vector(5).svg';
import vector6 from '../../../assets/img/OurInstructor/Vector(6).svg'

const instructorsData = [
    { name: "Hirmar Ubunfi", role: "Instructor", avatar, socials: { twitter: '#', facebook: '#', instagram: '#' } },
    { name: "Daniel Thomas", role: "Instructor", avatar, socials: { twitter: '#', facebook: '#', instagram: '#' } },
    { name: "Jennifer Patricia", role: "Instructor", avatar, socials: { twitter: '#', facebook: '#', instagram: '#' } },
    { name: "Johnathan Doe", role: "Instructor", avatar, socials: { twitter: '#', facebook: '#', instagram: '#' } },
];

export default function AboutOurInstructor() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpen = (e, index) => {
    e.stopPropagation();
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  return (
    <section className="instructor-section" onClick={handleClose}>
        <img src={vector4} alt="vector" className="vector-4" />
        <img src={vector5} alt="vector" className="vector-5" />
        <img src={vector6} alt="vector" className="vector-6" />
        <div className="section-header">
            <img src={alo} alt="icon" className="header-icon"/>
            <h6>OUR INSTRUCTOR</h6>
            <h2>Meet Our Expert Instructor</h2>
        </div>
        <div className="instructors-grid">
            {instructorsData.map((instructor, index) => (
                <div className="instructor-item" key={index} onClick={(e) => e.stopPropagation()}>
                    <div 
                        className={`avatar-container ${activeIndex === index ? 'active' : ''}`}
                    >
                        <img src={instructor.avatar} alt={instructor.name} className="avatar-image" />
                        <img src={border} alt="" className="border-decoration" />
                        <div className="interaction-panel">
                            <div className="toggle-button" onClick={(e) => handleOpen(e, index)}>
                                <img src={plus} alt="Show socials" />
                            </div>
                            <div className="social-buttons">
                                <a href={instructor.socials.twitter} target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" /></a>
                                <a href={instructor.socials.facebook} target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a>
                                <a href={instructor.socials.instagram} target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="instructor-details">
                        <h3>{instructor.name}</h3>
                        <p>{instructor.role}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}