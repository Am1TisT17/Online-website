import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courseDetailsData from "./CourseDetailsData";
import "./CourseDetails.scss";
import Navbar from '../../Navbar/Navbar';
import CoursesHome from '../CoursesHome/CoursesHome';
import Footer from '../../Footer2/Footer2';

import homeIcon from '../../../assets/img/CoursesDetails/home.svg';
import personIcon from '../../../assets/img/CoursesDetails/person.svg';
import lessonIcon from '../../../assets/img/CoursesDetails/lesson.svg';
import fileIcon from '../../../assets/img/CoursesDetails/file.svg';
import watchIcon from '../../../assets/img/CoursesDetails/watch.svg';
import lvlIcon from '../../../assets/img/CoursesDetails/lvl.svg';
import pintIcon from '../../../assets/img/CoursesDetails/pint.svg';
import starIcon from '../../../assets/img/CoursesDetails/star.svg';
import webIcon from '../../../assets/img/CoursesDetails/web.svg';
import puzzleIcon from '../../../assets/img/CoursesDetails/puzzle.svg';
import shareIcon from '../../../assets/img/CoursesDetails/share.svg';
import pplIcon from '../../../assets/img/CoursesDetails/ppl.svg';

export default function CourseDetails() {
  const { id } = useParams();
  const course = courseDetailsData.find(c => c.id === Number(id));
  const [tab, setTab] = useState("overview");

  if (!course) return <div>Course not found</div>;

  return (
    <>
      <Navbar />
      <CoursesHome />
      <div className="course-details-page">
        <div className="course-details-container">
          <div className="course-details-left">
            <div className="course-details-image-block">
              <img src={course.image} alt={course.title} className="course-details-image" />
              <div className="course-details-labels">
                <span className="label duration">{course.duration}</span>
                <span className="label bestseller">Best Seller</span>
              </div>
            </div>
            <div className="course-details-header">
              <div className="course-details-meta">
                <span className="meta-item">
                  <img className="icon-lessons" src={fileIcon} alt="lessons" />
                  Lessons: {course.lessons}
                </span>
                <span className="meta-item">
                  <img className="icon-students" src={pplIcon} alt="students" />
                  Students: 60+
                </span>
                <span className="meta-item">
                  <img className="icon-level" src={lvlIcon} alt="level" />
                  {course.level}
                </span>
              </div>
              <h1 className="course-details-title">{course.title}</h1>
              <div className="course-details-info-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {course.ava && (
                    <img src={course.ava} alt="instructor avatar" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />
                  )}
                  <span className="meta-label">Instructor:</span> {course.instructor}
                </div>
                <div>
                  <span className="meta-label">Category:</span> {course.category}
                </div>
                <div>
                  <span className="meta-label">Last Update:</span> {course.lastUpdate}
                </div>
                <div>
                  <span className="meta-label">Review:</span> ★ {course.review} ({course.reviewCount})
                </div>
              </div>
            </div>
            <div className="course-details-tabs">
              <div className={`tab ${tab === "overview" ? "active" : ""}`} onClick={() => setTab("overview")}>OVERVIEW</div>
              <div className={`tab ${tab === "curriculum" ? "active" : ""}`} onClick={() => setTab("curriculum")}>CURRICULUM</div>
              <div className={`tab ${tab === "instructor" ? "active" : ""}`} onClick={() => setTab("instructor")}>INSTRUCTOR</div>
              <div className={`tab ${tab === "review" ? "active" : ""}`} onClick={() => setTab("review")}>REVIEW</div>
            </div>
            <div className="course-details-content">
              {tab === "overview" && (
                <>
                  <div className="course-details-description">
                    <h2>Description</h2>
                    <p>{course.description}</p>
                  </div>
                  <div className="course-details-learn">
                    <h2>What Will You Learn?</h2>
                    <ul>
                      {course.whatWillYouLearn.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="course-details-certification">
                    <h2>Certification</h2>
                    <p>{course.certification}</p>
                  </div>
                </>
              )}
              {tab === "curriculum" && <div>Curriculum content here...</div>}
              {tab === "instructor" && <div>Instructor info here...</div>}
              {tab === "review" && <div>Reviews here...</div>}
            </div>
          </div>
          <div className="course-details-right">
            <div className="course-details-price-block">
              <div className="course-details-video">
                <img src={watchIcon} alt="preview" className="course-details-preview-icon" />
              </div>
              <div className="course-details-price">
                ${course.price} <span className="discount">-{course.discount}% Off</span>
              </div>
              <button className="add-to-cart">ADD TO CART</button>
              <button className="buy-now">BUY NOW</button>
              <div className="course-details-info-title">Course Information</div>
              <div className="course-details-info-divider" />
              <div className="course-details-info-list">
                <div><img src={homeIcon} alt="instructor" /><b>Instructor:</b> {course.instructor}</div>
                <div className="course-details-info-divider" />
                <div><img src={lessonIcon} alt="lessons" /><b>Lessons:</b> {course.lessons} </div>
                <div className="course-details-info-divider" />
                <div><img src={watchIcon} alt="duration" /><b>Duration:</b> {course.duration}</div>
                <div className="course-details-info-divider" />
                <div><img src={pintIcon} alt="level" /><b>Course level:</b> {course.level}</div>
                <div className="course-details-info-divider" />
                <div><img src={webIcon} alt="language" /><b>Language:</b> {course.language} </div>
                <div className="course-details-info-divider" />
                <div><img src={puzzleIcon} alt="quizzes" /><b>Quizzes:</b> {course.quizzes} </div>
              </div>
              <button className="share-course"><img src={shareIcon} alt="share" /> SHARE THIS COURSE</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
