import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <div className="navbar-item logo">ODKSOUP</div>
      </div>
      <div className="navbar-items">
        <div className="navbar-item">COUNTDOWN</div>
        <div className="navbar-item">PHOTOS</div>
        <div className="navbar-item">VIDEOS</div>
        <div className="navbar-item">ITINERARY</div>
      </div>
    </div>
  );
}

export default Navbar;
