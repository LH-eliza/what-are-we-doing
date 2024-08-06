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
        <a
          href="https://drive.google.com/drive/folders/1YE8Q3rynr9q0EuoY7wqqGvSpcDOBlsMf?usp=drive_link"
          className="navbar-item"
        >
          PHOTO UPLOADS
        </a>
      </div>
    </div>
  );
}

export default Navbar;
