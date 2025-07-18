import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";

import slider1 from '../../assets/img/home/slider1.jpg';
import slider2 from '../../assets/img/home/slider2.jpg';
import slider3 from '../../assets/img/home/slider3.jpg';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const images = [slider1, slider2, slider3];
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    fade: true,
  };

  return (
    <main>
      <div className="home-container">
        <div className="background-shape-left"></div>
        <div className="background-shape-right"></div>
        <div className="decoration-dots"></div>
        <div className="home-35">
          <div className="home-35__content">
            <span className="hero__tag">LEARN FROM TODAY</span>
          </div>
          <div className="home-edu-text">
            <h2>Education Is Create Better Future</h2>
            <p>Education can be thought of as the transmission of the values and accumulated knowledge of a society. In this sense, it is equivalent.</p>
          </div>
        </div>
        <button className="card-button">GET STARTED →</button>

        <div className="circle-photo-slider">
          <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
              {images.map((img, index) => (
                <div key={index} className="slide">
                  <div 
                    className="photo-circle" 
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          
          <div className="dots-container">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => sliderRef.current?.slickGoTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}