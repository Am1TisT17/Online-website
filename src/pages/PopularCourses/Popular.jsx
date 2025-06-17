import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alo from '../../assets/img/alo.svg';
import bg from '../../assets/img/courses/bg.svg';
import "./Popular.scss";
import courses from '../PopularCourses/courses.js';
import image from '../../assets/img/OurStudentsTestimonials/image.svg';
import image1 from '../../assets/img/OurStudentsTestimonials/image(1).svg';

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
        <section className="popular-section">
            <div className="promo-banners-container">
                <div className="promo-banner blue-banner">
                    <div className="promo-banner-content">
                        <img src={alo} alt="alo1" className="promo-icon"/>
                        <h6>Popular Courses</h6>
                        <h2>Get The Best Courses & Upgrade Your Skills</h2>
                        <button className="join-us-button">JOIN WITH US →</button>
                    </div>
                    <img src={image} alt="person" className="banner-image"/>
                </div>
                <div className="promo-banner red-banner">
                    <div className="promo-banner-content">
                        <img src={alo} alt="alo1" className="promo-icon"/>
                        <h6>Popular Courses</h6>
                        <h2>Get The Best Courses & Upgrade Your Skills</h2>
                        <button className="join-us-button">JOIN WITH US →</button>
                    </div>
                    <img src={image1} alt="person" className="banner-image"/>
                </div>
            </div>
            <div className="popular-header">
                <div className="popular-header__left">
                    <img src={alo} alt="alo1" className="popular-alo" />
                    <h6 className="popular-subtitle">POPULAR COURSES</h6>
                    <h2 className="popular-title">Our Popular Courses</h2>
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
                                    <div>
                                        <img src={d.file} alt="file" className="popular-card__file" />
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
                            <div className="popular-card__line">
                                <img src={d.line} alt="ava" className="popular-card__line" />
                            </div>
                            <div className="popular-card__footer">
                                <img src={d.ava} alt="ava" className="popular-card__ava" />
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