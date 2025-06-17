import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './OurStudentsTestimonials.scss';
import OurStudent from './OurStudents';
import alo from '../../assets/img/alo.svg';
import bg2 from '../../assets/img/OurStudentsTestimonials/bg (2).svg';
import star1 from '../../assets/img/OurStudentsTestimonials/star1.svg';
import star2 from '../../assets/img/OurStudentsTestimonials/star2.svg';
import image4 from '../../assets/img/OurStudentsTestimonials/image (4).png';
import image from '../../assets/img/OurStudentsTestimonials/image.svg';
import image1 from '../../assets/img/OurStudentsTestimonials/image(1).svg';


export default function OurStudentsTestimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<img key={i} src={star2} alt="star" className="star filled" />);
            } else if (i === Math.floor(rating) && rating % 1 !== 0) {
                stars.push(<img key={i} src={star2} alt="half-star" className="star half-filled" style={{ clipPath: `inset(0 ${100 - (rating % 1) * 100}% 0 0)` }} />);
            } else {
                stars.push(<img key={i} src={star1} alt="empty-star" className="star empty" />);
            }
        }
        return stars;
    };

    return (
        <section className="testimonials-section">
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
            <img src={bg2} alt="bg-wave" className="background-wave"/>
            <div className="header-content">
                <img src={alo} alt="alo1" className="alo-img"/>
                <h6>Our Students Testimonials</h6>
                <h2>Students Say's About Oue University</h2>
            </div>
            <div className="slider-container-testimonials">
                <Slider ref={sliderRef} {...settings}>
                    {OurStudent.map((student, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="avatar-container">
                                <img src={image4} alt="student-avatar" className="student-avatar"/>
                            </div>
                            <div className="text-content-wrapper">
                                <p className="testimonial-text">"{student.title}"</p>
                                <h4 className="student-name">{student.name}</h4>
                                <p className="student-role">{student.who}</p>
                                <div className="rating">
                                    {renderStars(student.rating)}
                                    <span className="rating-number">({student.rating})</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="dots-container-testimonials">
                {OurStudent.map((_, index) => (
                    <div 
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => sliderRef.current?.slickGoTo(index)}
                    />
                ))}
            </div>
        </section>
    )
}