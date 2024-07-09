import React from "react";
import "./Motivation.css";
import Group from "./images/group.svg";

const Motivation = () => {
  return (
    <div className="motivation-container">
      <div className="motivation-text">
        <h2 className="motivation-title">Motivation</h2>
        <p className="motivation-description">
          We lowkey have no freedom during our uni life. So we need this trip to
          waste all our monies!
        </p>
      </div>
      <div className="motivation-images">
        <img src={Group} alt="duo" className="motivation-image" />
      </div>
    </div>
  );
};

export default Motivation;
