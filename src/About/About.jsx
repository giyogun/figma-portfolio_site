import React from "react";
import { images } from "../constants";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <div className="image-container">
          <img src={images.about} alt="" />
        </div>
        <div className="about-section-text">
          <h1>DIGITAL DESIGNER CURRENTLY BASED IN INDONESIA</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>
      </div>
      <hr />
      <div className="services">
        <div className="services-text">
          <h1>WHAT DO I HELP</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus.{" "}
          </p>

          <div className="services-text-footer">
            <div className="completed">
              <h2>250+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="happy-clients">
              <h2>249+</h2>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="services-card">
          <div className="services-card-item">
            <div className="small-image">
              <img src={images.slice} alt="" />
            </div>
            <div className="project-details">
              <h4>User Interface Design</h4>
              <span>100 Projects</span>
            </div>
          </div>
          <div className="services-card-item green">
            <div className="small-image">
              <img src={images.laptop} alt="" />
            </div>
            <div className="project-details">
              <h4>Website Design</h4>
              <span>100 Projects</span>
            </div>
          </div>
          <div className="services-card-item red">
            <div className="small-image">
              <img src={images.people} alt="" />
            </div>
            <div className="project-details">
              <h4>Marketing</h4>
              <span>100 Projects</span>
            </div>
          </div>
        </div>
      </div>
      <hr className='hr' />
    </div>
  );
};

export default About;
