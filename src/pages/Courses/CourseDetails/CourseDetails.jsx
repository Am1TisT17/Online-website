import React from "react";
import course from "./CourseDetailsData";
import "./CourseDetails.scss";

export default function CourseDetails() {
  return (
    <div className="course-details-page">
      <div className="course-details-main">
        <div className="course-details-header">
          <div className="course-details-image" />
          <div className="course-details-info">
            <h1>{course.title}</h1>
            <div className="course-meta">
              <span>Категория: {course.category}</span>
              <span>Последнее обновление: {course.lastUpdate}</span>
              <span>Рейтинг: {course.review} ({course.reviewCount})</span>
            </div>
            <div className="course-instructor">
              <span>Инструктор: {course.instructor}</span>
            </div>
          </div>
          <div className="course-details-price">
            <div className="price">${course.price} <span>-{course.discount}%</span></div>
            <button>Добавить в корзину</button>
            <button>Купить сейчас</button>
            <div className="course-info-list">
              <div>Уроков: {course.lessons}</div>
              <div>Длительность: {course.duration}</div>
              <div>Уровень: {course.level}</div>
              <div>Язык: {course.language}</div>
              <div>Тестов: {course.quizzes}</div>
            </div>
          </div>
        </div>
        <div className="course-details-tabs">
          <div className="tab active">Описание</div>
          <div className="tab">Программа</div>
          <div className="tab">Инструктор</div>
          <div className="tab">Отзывы</div>
        </div>
        <div className="course-details-description">
          <h2>Описание</h2>
          <p>{course.description}</p>
        </div>
        <div className="course-details-learn">
          <h2>Чему вы научитесь?</h2>
          <ul>
            {course.whatWillYouLearn.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="course-details-certification">
          <h2>Сертификат</h2>
          <p>{course.certification}</p>
        </div>
        <div className="course-details-related">
          <h2>Похожие курсы</h2>
          <div className="related-courses-list">
            {course.relatedCourses.map(rc => (
              <div key={rc.id} className="related-course-card">
                <div className="related-course-title">{rc.title}</div>
                <div className="related-course-author">{rc.author}</div>
                <div className="related-course-duration">{rc.duration}</div>
                <div className="related-course-level">{rc.level}</div>
                <div className="related-course-price">{rc.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}