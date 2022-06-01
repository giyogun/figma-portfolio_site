import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return <div className='navbar'>
    <div className="navbar-container">
      <h2>ngrok</h2>
      <div className="buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </div>
  </div>;
};

export default Navbar;
