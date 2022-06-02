import React from "react";
import "./Footer.css";
import {
  FaMailBulk,
  FaDribbble,
  FaTwitter,
  FaLinkedin,
  FaMediumM,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h1>Let's Start by Saying Hi!</h1>
        <div className="email-me">
          <FaMailBulk /> <span>email me</span>
        </div>
        <div className="bottom-content">
          <div className="sm">
            <div className="sm-link">
              <FaTwitter />
            </div>
            <div className="sm-link">
              <FaLinkedin />
            </div>
            <div className="sm-link">
              <FaDribbble />
            </div>
            <div className="sm-link">
              <FaMediumM />
            </div>
          </div>
          <h3>Created by <span>Godwin</span> | All Rights Reserved</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
