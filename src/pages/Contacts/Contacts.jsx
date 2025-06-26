import React from "react";
import { useState } from "react";
import "./Contacts.scss";
import icon1 from '../../assets/img/Contact/icon1.svg';
import icon4 from '../../assets/img/Contact/icon4.svg';
import icon5 from '../../assets/img/Contact/icon5.svg';
import icon6 from '../../assets/img/Contact/icon6.svg';

export default function Contacts() {
  const [hovered, setHovered] = useState({ address: false, phone: false, hours: false });
  return (
    <section className="contact-section">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1053.6479656850097!2d71.41596563444193!3d51.08979869174524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1skk!2skz!4v1750780963382!5m2!1skk!2skz"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "16px" }}
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Have Any Questions?</h2>
          <div className="blue-line"></div>
          <p>Have a inquiry or some feedback for us? Fill out the form below to contact our team.</p>
          <div className="contact-card" onMouseEnter={() => setHovered(h => ({ ...h, address: true }))} onMouseLeave={() => setHovered(h => ({ ...h, address: false }))}>
            <div className="icon-bg">
              <img src={hovered.address ? "/src/assets/img/Contact/icon7.svg" : "/src/assets/img/Contact/icon7(1).svg"} alt="address" />
            </div>
            <div>
              <b>Our Address</b>
              <p><span>2690 Hiltona Street Victoria Road, New York, Canada</span></p>
            </div>
          </div>
          <div className="contact-card" onMouseEnter={() => setHovered(h => ({ ...h, phone: true }))} onMouseLeave={() => setHovered(h => ({ ...h, phone: false }))}>
            <div className="icon-bg">
              <img src={hovered.phone ? "/src/assets/img/Contact/icon3(1).svg" : "/src/assets/img/Contact/icon3.svg"} alt="phone" />
            </div>
            <div>
              <b>Phone Number</b>
              <p>Mobile: (+65) - 48596 - 5789</p>
              <p>Email: info@edura.com</p>
            </div>
          </div>
          <div className="contact-card" onMouseEnter={() => setHovered(h => ({ ...h, hours: true }))} onMouseLeave={() => setHovered(h => ({ ...h, hours: false }))}>
            <div className="icon-bg">
              <img src={hovered.hours ? "/src/assets/img/Contact/icon2(1).svg" : "/src/assets/img/Contact/icon2.svg"} alt="hours" />
            </div>
            <div>
              <b>Hours of Operation</b>
              <p>Monday - Friday: 09:00 - 20:00</p>
              <p>Sunday & Saturday: 10:30 - 22:00</p>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <span className="contact-with-us">CONTACT WITH US!</span>
          <h3>Get in Touch</h3>
          <div className="blue-line"></div>
          <p>Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="form-row">
            <div className="input-icon-wrapper">
              <input type="text" placeholder="Your Name*" required />
              <img src={icon1} className="input-icon" alt="" />
            </div>
            <div className="input-icon-wrapper">
              <input type="email" placeholder="Email Address*" required />
              <img src={icon5} className="input-icon" alt="" />
            </div>
          </div>
          <div className="form-row">
            <div className="input-icon-wrapper">
              <select required>
                <option value="">Select Subject*</option>
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div className="input-icon-wrapper">
              <input type="text" placeholder="Phone Number*" required />
              <img src={icon4} className="input-icon" alt="" />
            </div>
          </div>
          <div className="input-icon-wrapper">
            <textarea placeholder="Write Your Message*" required></textarea>
            <img src={icon6} className="input-icon" alt="" />
          </div>
          <button type="submit">SUBMIT MESSAGE</button>
        </form>
      </div>
    </section>
  );
}