import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional CSS for Navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <h1>AstroMystic</h1>
      </div>
      <div className="nav-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/birthchart" className="nav-link">Birth Chart</Link>
      </div>
      <div className="nav-right">
        <button className="nav-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
