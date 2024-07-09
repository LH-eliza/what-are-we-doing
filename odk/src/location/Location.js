import React from "react";
import "./Location.css";
import JapanMap from "./images/image1.svg";
import KoreaMap from "./images/image2.svg"; 

const Location = () => {
  return (
    <div className="location-container">
      <h2 className="location-title">Where exactly?</h2>
      <div className="maps-container">
        <div className="map-item">
          <img src={JapanMap} alt="Japan Edition" className="map-image" />
          <p className="map-caption">Japan Edition</p>
        </div>
        <div className="map-item">
          <img src={KoreaMap} alt="Korea Edition" className="map-image" />
          <p className="map-caption">Korea Edition</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
