import React, { useState, useRef } from "react";
import "./OurInstructor.scss";
import alo from '../../assets/img/alo.svg';
import file from '../../assets/img/OurInstructor/file.svg';
import people from '../../assets/img/OurInstructor/people.svg';
import s3 from '../../assets/img/OurInstructor/s-3.svg';
import vector1 from '../../assets/img/OurInstructor/Vector(1).svg';
import vector2 from '../../assets/img/OurInstructor/Vector(2).svg';
import vector3 from '../../assets/img/OurInstructor/Vector(3).svg';
import vector4 from '../../assets/img/OurInstructor/Vector(4).svg';
import vector5 from '../../assets/img/OurInstructor/Vector(5).svg';
import vector6 from '../../assets/img/OurInstructor/Vector(6).svg'

export default function OurInstructor() {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (index) => {
        setActiveCard(activeCard === index ? null : index);
    };

    const instructors = [
        {
            name: "Hirmar Ubunti",
            role: "Instructor",
            courses: 2,
            students: 25,
            image: s3
        },
        {
            name: "Sarah Johnson",
            role: "Instructor",
            courses: 3,
            students: 32,
            image: s3
        },
        {
            name: "Michael Chen",
            role: "Instructor",
            courses: 1,
            students: 18,
            image: s3
        },
        {
            name: "Emily Davis",
            role: "Instructor",
            courses: 4,
            students: 28,
            image: s3
        }
    ];

    return (
        <section className="instructor-sect">
            <img src={vector1} alt="vector" className="vector-1" />
            <img src={vector2} alt="vector" className="vector-2" />
            <img src={vector3} alt="vector" className="vector-3" />
            <img src={vector4} alt="vector" className="vector-4" />
            <img src={vector5} alt="vector" className="vector-5" />
            <img src={vector6} alt="vector" className="vector-6" />
            <div className="header-section">
                <img src={alo} alt="alo1" className="alo-img"/>
                <h6>Our Instructor</h6>
                <h2>Meet Our Expert Instructor</h2>
                <p>Graduates of XYZ University have achieved remarkable success in their chosen fields, with many going on to pursue advanced degrees, secure fulfilling careers, and make valuable contributions to their communities.</p>
                <p><br/>The university takes pride in its alumni network, which serves as a testament to the quality of education and the opportunities provided by the institution.</p>
                <div className="button-group">
                    <button className="explore-btn">EXPLORE COURSES →</button>
                    <button className="contact-btn">CONTACT NOW →</button>
                </div>
            </div>
            <div className="instructor-grid">
                {instructors.map((instructor, index) => (
                    <div
                        className={`instructor-card ${activeCard === index ? 'raised' : ''}`}
                        key={index}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="card-image">
                            <img src={instructor.image} alt="Instructor" />
                        </div>
                        <div className="card-overlay">
                            <div className="overlay-content">
                                <h4>{instructor.name}</h4>
                                <p>{instructor.role}</p>
                                <div className="stats">
                                    <img src={file} alt="file" />
                                    <p>{instructor.courses} Courses</p>
                                    <img src={people} alt="people" />
                                    <p>{instructor.students} Students</p>
                                </div>
                            </div>
                        </div>
                        <div className="add-button-container">
                            <div className="add-button">+</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}