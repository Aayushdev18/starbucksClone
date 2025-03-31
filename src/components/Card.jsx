import React from "react";
import "./Card.css";

const Hero = () => {
  return ( 
    <div className="hero-card">
      <div className="hero-img-container">
        <img
          src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Refreshers_dashboard_03_1_10aa41bbca.png"
          className="hero-img"
          alt="Starbucks Refresher"
        />
      </div>

      <div className="hero-text">
        <p className="hero-subtitle">All New</p>
        <p className="hero-title">Starbucks Refresher</p>
        <p className="hero-description">
          Beat the heat with your bestie, Refreshers now available in Lychee
          Raspberry and Kiwi Calamansi flavours.
        </p>
      </div>

      <div className="hero-button-container">
        <button className="hero-button">Order Now</button>
      </div>
    </div>
  );
}

export default Hero;
