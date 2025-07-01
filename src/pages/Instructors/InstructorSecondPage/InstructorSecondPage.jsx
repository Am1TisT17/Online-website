import React from "react";
import "./InstructorSecondPage.scss";
import shape from "../../../assets/img/Instructor/shape (1).svg";
import pin from "../../../assets/img/Instructor/pin.svg";

export default function InstructorSecondPage() {
  return (
    <div className="instructor2-container">
      <div className="instructor2-left">
        <span className="instructor2-label">INSTRUCTOR</span>
        <h1 className="instructor2-title">
          Become an Instructor On Our <br /> Online Platform.
        </h1>
        <div className="instructor2-features">
          <div className="feature-card">
            <img src={pin} alt="pin" className="pin" />
            Teach your way
          </div>
          <div className="feature-card">
            <img src={pin} alt="pin" className="pin" />
            Plan your curriculum
          </div>
          <div className="feature-card">
            <img src={pin} alt="pin" className="pin" />
            Record your video
          </div>
          <div className="feature-card">
            <img src={pin} alt="pin" className="pin" />
            Launch your course
          </div>
        </div>
        <button className="instructor2-btn">GET INSTRUCTOR →</button>
      </div>
      <div className="instructor2-right">
        <img src={shape} alt="shape" className="shape-bg" />
        <span className="circle blue"></span>
        <span className="circle red"></span>
        <span className="circle grey"></span>
        <span className="circle light"></span>
      </div>
    </div>
  );
}
