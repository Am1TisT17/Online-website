import React from 'react';
import './Navbar.scss';
import Cart from '../../assets/img/cart.png';
import Love from '../../assets/img/love.png';
import Logo from '../../assets/img/XMLID_7185_.png';
import Button from '../components/Button';

export default function Navbar() { 
  return (
      <div className="navbar">
        <div className="navbar-logo">
            <img src={Logo} alt="EDURA logo" />
            <h2>EDURA</h2>
        </div>
        <ul className="navbar-links">
            <li className="navbar__link"><a href="#home">Home</a></li>
            <li className="navbar__link"><a href="#about">Courses</a></li>
            <li className="navbar__link"><a href="#courses">Teachers</a></li>
            <li className="navbar__link"><a href="#contact">About Us</a></li>
            <li className="navbar__link"><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-login-cart">
            <Button>Login/Register</Button>
        </div>
      </div>
  );
}