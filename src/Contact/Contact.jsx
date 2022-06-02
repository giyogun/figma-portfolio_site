import React from "react";
import { images } from "../constants";
import './Contact.css'

const Contact = () => {
  return <div className="contacts">
    <div className="logos">
      <img src={images.dribble} alt="" />
      <img src={images.linkedin} alt="" />
      <img src={images.medium} alt="" />
      <img src={images.behance} alt="" />
    </div>
  </div>;
};

export default Contact;
