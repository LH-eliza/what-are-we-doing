import React, { useState, useEffect } from "react";
import "./Hero.css";
import Bob from "./images/Bob.svg";
import Joey from "./images/Joey.svg";

const Hero = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-08-06T12:50:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="hero">
        <p className="odk">ODKSOUP PRESENTS</p>
        <h2>
          What are we <span className="doing">DOING?</span>
        </h2>
        <h1>
          GOING TO <span className="japan">JAPAN</span> &{" "}
          <span className="korea">KOREA</span>!
        </h1>
        <h1 className="countdown-timer">countdown</h1>
        <div className="countdown-container">
          <img src={Bob} alt="Left" className="countdown-image left" />
          <div className="countdown">
            <span>{timeLeft.days} DAYS</span>
            <span>{timeLeft.hours} HOUR(S)</span>
            <span>{timeLeft.minutes} MIN</span>
            <span>{timeLeft.seconds} SEC</span>
          </div>
          <img src={Joey} alt="Right" className="countdown-image right" />
        </div>
      </div>
      <hr className="horizontal-line" />
    </div>
  );
};

export default Hero;
