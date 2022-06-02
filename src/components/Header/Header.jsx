import React from "react";
import "./Header.css";
import {images} from '../../constants/index';

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <h1>I'm Jovanka Lovata</h1>
        <p>UI/UX Designer and Web Developer</p>
        <span>JOVANCA</span>
        <img src={images.jovanka} alt="" />
      </div>
    </div>
  );
};

export default Header;
