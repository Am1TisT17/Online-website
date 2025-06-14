import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alo from '../../assets/img/alo.svg';
import line1 from '../../assets/img/line1.svg';
import line2 from '../../assets/img/line2.svg';
import bg from '../../assets/img/bg.svg';
import "./Popular.scss";
import courses from '../PopularCourses/courses.js';

export default function Popular() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    };

    return(
        <section className="popular-section" style={{ backgroundImage: `url(${bg})` }}>
            <div className="popular-header">
                <div className="popular-header__left">
                    <img src={alo} alt="alo1" className="popular-alo" />
                    <h6 className="popular-subtitle">POPULAR COURSES</h6>
                    <h1 className="popular-title">Our Popular Courses</h1>
                </div>
                <button className="popular-button">VIEW ALL COURSES →</button>
            </div>
            <div className="popular-slider-wrapper">
                <Slider {...settings} className="popular-slider">
                    {courses.map((d, i) => (
                        <div className="popular-card" key={i}>
                            <div className="popular-card__img-wrap">
                                <img src={d.img} alt="course" className="popular-card__img" />
                                <span className="popular-card__duration">{d.duration}</span>
                            </div>
                            <div className="popular-card__body">
                                <div className="popular-card__rating">
                                    <span>★</span>
                                    <span>{d.rating}</span>
                                </div>
                                <h3 className="popular-card__title">{d.title}</h3>
                                <div className="popular-card__info">
                                    <span>Lesson {d.lessons}</span>
                                    <span>Students {d.students}</span>
                                    <span>{d.level}</span>
                                </div>
                            </div>
                            <div className="popular-card__footer">
                                <img src={d.ava} alt="author" className="popular-card__ava" />
                                <span className="popular-card__author">{d.author}</span>
                                <span className={`popular-card__cost${d.cost === 'FREE' ? ' free' : ''}`}>{d.cost}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}