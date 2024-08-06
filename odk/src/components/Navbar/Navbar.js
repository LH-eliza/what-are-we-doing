import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/" className="navbar-item logo">
          ODKSOUP
        </Link>
      </div>
      <div className="navbar-items">
        <a href="https://www.youtube.com/@grungylh" className="navbar-item">
          VIDEO UPLOADS
        </a>
        <Link to="/upload" className="navbar-item">
          DAILY PHOTOS
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
