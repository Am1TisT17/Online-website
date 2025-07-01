import './Navbar.scss';
import Logo from '../../assets/img/XMLID_7185_.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={Logo} alt="EDURA logo" />
          <h2>EDURA</h2>
        </div>
        
        <ul className="navbar__links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/courses">COURSES</Link></li>
          <li><a href="/instructor">TEACHERS</a></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><a href="/contact">CONTACTS</a></li>
          <li><a href="#contacts">RU</a></li>
        </ul>
        <button className="navbar__button">LOGIN/REGISTER</button>
      </div>
    </nav>
  );
}