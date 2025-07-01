import React from "react";
import { useNavigate } from "react-router-dom";
import "./InstructorPage.scss";
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer2/Footer2';

import Home from '../../Instructors/InstructorHome/InstructorHome.jsx';
import ScndPage from '../../Instructors/InstructorSecondPage/InstructorSecondPage.jsx';
import instructors from './InstructorPage.js';

import file from "../../../assets/img/Instructor/file.svg";
import ppl from "../../../assets/img/Instructor/ppl.svg";

export default function InstructorPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Home />
      <div className="instructors-page">
        <div className="instructors-grid">
          {instructors.map((inst) => (
            <div className="instructor-card" key={inst.id}>
              <div className="instructor-img-wrap">
                <img src={inst.image} alt={inst.name} className="instructor-img" />
                <button className="plus-btn" aria-label={`Открыть профиль ${inst.name}`} onClick={() => navigate(`/instructors/${inst.id}`)}>+</button>
              </div>
              <div className="instructor-info">
                <div className="instructor-name">{inst.name}</div>
                <div className="instructor-position">{inst.position}</div>
                <div className="instructor-meta">
                  <span className="meta-item">
                    <img src={file} alt="courses" className="meta-icon" />
                    {inst.courses} Courses
                  </span>
                  <span className="meta-sep">|</span>
                  <span className="meta-item">
                    <img src={ppl} alt="students" className="meta-icon" />
                    {inst.students} Students
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScndPage />
      <Footer />
    </>
  );
}
