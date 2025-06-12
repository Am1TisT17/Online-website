import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CirclePhotoSlider.scss";

const CirclePhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    "/src/assets/img/slider1.jpg",
    "/src/assets/img/slider2.jpg",
    "/src/assets/img/slider3.jpg"
  ];
  
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
    ref: sliderRef
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="circle-photo-slider">
      <div className="slider-container">
        <Slider {...settings}>
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
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CirclePhotoSlider;