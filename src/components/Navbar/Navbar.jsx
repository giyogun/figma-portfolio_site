import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <div className="logo-main">
            <span>J</span>
          </div>
          <div className="logo-text">Jovanca</div>
        </div>
        <div className="nav-links">
          <li className="nav-links-item">Home</li>
          <li className="nav-links-item">About</li>
          <li className="nav-links-item">Services</li>
          <li className="contact">Hire Me</li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
