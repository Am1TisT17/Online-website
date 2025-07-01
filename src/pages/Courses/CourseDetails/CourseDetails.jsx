import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import courseDetailsData from "./CourseDetailsData";
import "./CourseDetails.scss";
import Navbar from '../../Navbar/Navbar';
import CoursesHome from '../CoursesHome/CoursesHome';
import Footer from '../../Footer2/Footer2';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import courses from '../../PopularCourses/courses.js';
import alo from '../../../assets/img/alo.svg';
import { Link } from 'react-router-dom';

import starIcon from '../../../assets/img/CoursesDetails/star.svg';
import personIcon from '../../../assets/img/CoursesDetails/person.svg';
import bookIcon from '../../../assets/img/CoursesDetails/book.svg';
import favoriteIcon from '../../../assets/img/CoursesDetails/Favorites.svg';

import homeIcon from '../../../assets/img/CoursesDetails/home.svg';
import lessonIcon from '../../../assets/img/CoursesDetails/lesson.svg';
import fileIcon from '../../../assets/img/CoursesDetails/file.svg';
import watchIcon from '../../../assets/img/CoursesDetails/watch.svg';
import lvlIcon from '../../../assets/img/CoursesDetails/lvl.svg';
import pintIcon from '../../../assets/img/CoursesDetails/pint.svg';
import queIcon from '../../../assets/img/Que.svg';
import webIcon from '../../../assets/img/CoursesDetails/web.svg';
import puzzleIcon from '../../../assets/img/CoursesDetails/puzzle.svg';
import shareIcon from '../../../assets/img/CoursesDetails/share.svg';
import pplIcon from '../../../assets/img/CoursesDetails/ppl.svg';

export default function CourseDetails() {
  const { id } = useParams();
  const course = courseDetailsData.find(c => c.id === Number(id));
  const [tab, setTab] = useState("overview");

  const tabsRef = useRef(null);
  const overviewRef = useRef(null);
  const curriculumRef = useRef(null);
  const instructorRef = useRef(null);
  const reviewRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    let activeRef;
    if (tab === "overview") activeRef = overviewRef;
    else if (tab === "curriculum") activeRef = curriculumRef;
    else if (tab === "instructor") activeRef = instructorRef;
    else if (tab === "review") activeRef = reviewRef;
    if (activeRef && activeRef.current && tabsRef.current) {
      const tabRect = activeRef.current.getBoundingClientRect();
      const containerRect = tabsRef.current.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width
      });
    }
  }, [tab]);

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
                    <img
                      src={course.ava}
                      alt="instructor avatar"
                      style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }}
                    />
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span className="meta-label">Instructor:</span>
                    <span>{course.instructor}</span>
                  </div>
                </div>
                <div className="vertical-divider" />
                <div>
                  <span className="meta-label">Category:</span> {course.category}
                </div>
                <div className="vertical-divider" />
                <div>
                  <span className="meta-label">Last Update:</span> {course.lastUpdate}
                </div>
                <div className="vertical-divider" />
                <div>
                  <span className="meta-label">Review:</span> ★ {course.review} ({course.reviewCount})
                </div>
              </div>
            </div>
            <div className="course-details-tabs" ref={tabsRef} style={{ position: 'relative' }}>
              <div
                className={`tab ${tab === "overview" ? "active" : ""}`}
                onClick={() => setTab("overview")}
                ref={overviewRef}
              >
                <img src={personIcon} alt="overview" style={{ width: 12, height: 12, marginRight: 6 }} /> OVERVIEW
              </div>
              <div
                className={`tab ${tab === "curriculum" ? "active" : ""}`}
                onClick={() => setTab("curriculum")}
                ref={curriculumRef}
              >
                <img src={bookIcon} alt="curriculum" style={{ width: 12, height: 12, marginRight: 6 }} /> CURRICULUM
              </div>
              <div
                className={`tab ${tab === "instructor" ? "active" : ""}`}
                onClick={() => setTab("instructor")}
                ref={instructorRef}
              >
                <img src={favoriteIcon} alt="instructor" style={{ width: 12, height: 12, marginRight: 6 }} /> INSTRUCTOR
              </div>
              <div
                className={`tab ${tab === "review" ? "active" : ""}`}
                onClick={() => setTab("review")}
                ref={reviewRef}
              >
                <img src={starIcon} alt="review" style={{ width: 12, height: 12, marginRight: 6 }} /> REVIEW
              </div>
              <div
                className="tab-indicator"
                style={{
                  position: 'absolute',
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  height: 3,
                  background: '#3478F6',  
                  bottom: -2,
                  borderRadius: 2,
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  zIndex: 1
                }}
              />
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
                    <ul className="learn-list">
                      {course.whatWillYouLearn.map((item, idx) => (
                        <li key={idx}>
                          <img src={queIcon} alt="check" className="learn-icon" />
                          {item}
                        </li>
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
              <div className="course-details-price price-with-discount">
                <span className="main-price">${course.price}.00</span>
                <span className="discount-badge">{course.discount}% Off</span>
              </div>
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
      <div className="related-courses-block">
        <div className="related-courses-title">

          <span className="related-courses-subtitle">RELATED COURSES</span>
          <h2>Courses You May Like</h2>
        </div>
        <section className="related-slider-section" style={{ background: '#fff' }}>
          <div className="related-slider-wrapper">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={4}
              slidesToScroll={1}
              arrows={true}
              className="related-slider"
            >
              {courses.map((d, i) => (
                <Link to={`/courses/${d.id}`} className="related-slider-card" key={d.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="related-slider-card-img-wrap">
                    <img src={d.img} alt="course" className="related-slider-card-img" />
                    <span className="related-slider-card-duration">{d.duration}</span>
                  </div>
                  <div className="related-slider-card-body">
                    <div className="related-slider-card-rating">
                      <span>★</span>
                      <span>{d.rating}</span>
                    </div>
                    <h3 className="related-slider-card-title">{d.title}</h3>
                    <div className="related-slider-card-info">
                      <div>
                        <img src={d.file} alt="file" className="related-slider-card-file" />
                        <span>Lesson {d.lessons}</span>
                      </div>
                      <div>
                        <img src={d.acc} alt="acc" />
                        <span>Students {d.students}</span>
                      </div>
                      <div>
                        <img src={d.lvl} alt="lvl" />
                        <span>{d.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="related-slider-card-footer">
                    <img src={d.ava} alt="ava" className="related-slider-card-ava" />
                    <span className="related-slider-card-author">{d.author}</span>
                    <span className={`related-slider-card-cost${d.cost === 'FREE' ? ' free' : ''}`}>{d.cost}</span>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
