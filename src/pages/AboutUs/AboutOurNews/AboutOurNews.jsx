import React from "react";
import icon1 from '../../../assets/img/About/AboutOurNew/icon1.svg';
import icon2 from '../../../assets/img/About/AboutOurNew/icon2.svg';
import img from '../../../assets/img/About/AboutOurNew/image (3).svg';
import alo from '../../../assets/img/alo.svg';
import image from '../../../assets/img/OurStudentsTestimonials/image.svg';
import image1 from '../../../assets/img/OurStudentsTestimonials/image(1).svg';
import './AboutOurNews.scss';

const newsData = [
  {
    icon: img,
    title: "Educate, Empower, Excel: Discover the Power of Learning!",
    img1: icon1,
    date: "05 Jan, 2023",
    img2: icon2,
    author: "David Smith",
    link: "#"
  },
  {
    icon: img,
    title: "Enrich Your Mind, Envision Your Future: Education for Success",
    img1: icon1,
    date: "05 Jan, 2023",
    img2: icon2,
    author: "David Smith",
    link: "#"
  },
  {
    icon: img,
    title: "University class starting soon while the lovely valley team work",
    img1: icon1,
    date: "05 Jan, 2023",
    img2: icon2,
    author: "David Smith",
    link: "#"
  }
];

export default function AboutOurNews() {
  return (
    <section className="news-section">
      <div className="hero-banners-wrapper">
        <div className="hero-banner primary-banner">
          <div className="hero-banner-content">
            <img src={alo} alt="alo1" className="hero-icon"/>
            <h6>Popular Courses</h6>
            <h2>Get The Best Courses & Upgrade Your Skills</h2>
            <button className="cta-button">JOIN WITH US →</button>
          </div>
          <img src={image} alt="person" className="hero-image"/>
        </div>
        <div className="hero-banner secondary-banner">
          <div className="hero-banner-content">
            <img src={alo} alt="alo1" className="hero-icon"/>
            <h6>Popular Courses</h6>
            <h2>Get The Best Courses & Upgrade Your Skills</h2>
            <button className="cta-button">JOIN WITH US →</button>
          </div>
          <img src={image1} alt="person" className="hero-image"/>
        </div>
      </div>
      <div className="news-header">
        <div className="header-text">
          <h6>OUR NEWS & BLOGS</h6>
          <h2>Latest News & Blogs</h2>
        </div>
        <button className="view-all-btn">VIEW ALL POSTS →</button>
      </div>
      <div className="news-cards">
        {newsData.map((item, idx) => (
          <div className="news-card" key={idx}>
            <img src={item.icon} alt="icon" className="news-icon" />
            <div className="news-meta">
              <span className="author">
                <img src={item.img1} alt="author icon" className="meta-icon" />
                By {item.author}
              </span>
              <span className="date">
                <img src={item.img2} alt="date icon" className="meta-icon" />
                {item.date}
              </span>
            </div>
            <h3 className="news-title">{item.title}</h3>
            <a href={item.link} className="news-link">READ MORE DETAILS →</a>
          </div>
        ))}
      </div>
    </section>
  );
}