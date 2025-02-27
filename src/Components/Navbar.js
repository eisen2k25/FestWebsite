import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../Assets/website-logo.png" // Import the logo image
import "../Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Website Logo" style={{ width: '50px', height: 'auto' }} />
      </Link>
      
      {/* Hamburger Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/SpotGames">Spot Games</Link>
        <Link to="/Sponsors">Sponsors</Link>
        <Link to="/Events">Events</Link>
        <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
