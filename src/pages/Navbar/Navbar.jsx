import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/img/XMLID_7185_.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={Logo} alt="EDURA logo" />
          <h2>EDURA</h2>
        </div>
        
        <ul className="navbar__links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#courses">COURSES</a></li>
          <li><a href="#teachers">TEACHERS</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#contacts">CONTACTS</a></li>
          <li><a href="#contacts">RU</a></li>
        </ul>
        <button className="navbar__button">LOGIN/REGISTER</button>
      </div>
    </nav>
  );
}