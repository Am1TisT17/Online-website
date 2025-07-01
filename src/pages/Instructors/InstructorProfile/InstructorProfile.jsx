import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import instructors from "../InstructorPage/InstructorPage.js";
import "./InstructorProfile.scss";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer2/Footer2";
import Home from "../InstructorHome/InstructorHome.jsx"
import Bio from '../../Instructors/InstructorBio/InstructorBio.jsx';
import icon1 from '../../../assets/img/Instructor/InstructorProfile/icon1.svg';
import icon2 from '../../../assets/img/Instructor/InstructorProfile/icon2.svg';

export default function InstructorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const instructor = instructors.find((inst) => String(inst.id) === String(id));

  if (!instructor) {
    return <div>Инструктор не найден</div>;
  }

  return (
    <>
      <Navbar />
      <Home />
      <div className="instructor-profile-container">
        <div className="profile-card">
          <div className="profile-img-wrap">
            <img src={instructor.image} alt={instructor.name} className="profile-img" />
          </div>
          <div className="profile-info">
            <div className="row">
              <div>
                <h2 className="profile-name">{instructor.name}</h2>
                <div className="profile-cert">A Certified Instructor From Edura</div>
              </div>
              <div className="profile-social">
                {instructor.social && instructor.social.map((s, idx) => (
                  <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" className={`icon-${s.type}`}></a>
                ))}
              </div>
            </div>
            <div className="profile-p">{instructor.paragraph}</div>
            <div className="profile-contact-divider"></div>
            <div className="profile-about">{instructor.about}</div>
            <div className="profile-meta">
              <div>
                <b>Course:</b> {instructor.courses}<br/>
                <b>Students:</b> {instructor.students}
              </div>
              <div>
                <b>Reviews:</b> <span className="profile-rating">★ {instructor.rating} ({instructor.reviews})</span>
              </div>
              <div>
                <b>Experience:</b> {instructor.experience}
              </div>
            </div>
            <div className="profile-contact">
              <div className="profile-contact-item">
                <span className="profile-contact-icon phone">
                  <img src={icon1} alt="phone" />
                </span>
                <div className="profile-contact-info">
                  <span className="profile-contact-label">Call Any Time:</span>
                  <span className="profile-contact-value">{instructor.phone}</span>
                </div>
              </div>
              <div className="profile-contact-item">
                <span className="profile-contact-icon email">
                  <img src={icon2} alt="email" />
                </span>
                <div className="profile-contact-info">
                  <span className="profile-contact-label">Email:</span>
                  <span className="profile-contact-value">{instructor.email}</span>
                </div>
              </div>
            </div>
            <button className="back-btn" onClick={() => navigate(-1)}>Назад</button>
          </div>
        </div>
      </div>
      <Bio id={instructor.id} />
      <Footer />
    </>
  );
} 