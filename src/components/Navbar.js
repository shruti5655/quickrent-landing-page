import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-logo">QuickRent</h1>
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/features">Features</Link>
      <Link to="/contact-us">Contact Us</Link>
    </div>
  </nav>
);

export default Navbar;
