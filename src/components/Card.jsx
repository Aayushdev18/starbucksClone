import React, { useState } from "react";
import "./Card.css";

export default function Herocard() {
  const [showSecondCard, setShowSecondCard] = useState(false);

  const handleNext = () => setShowSecondCard(true);
  const handlePrev = () => setShowSecondCard(false);

  return (
    <div className="herocard-wrapper">
      <div className="slider-controls">
        {showSecondCard && (
          <button className="prev" onClick={handlePrev}>
            ❮
          </button>
        )}
        {!showSecondCard && (
          <button className="next" onClick={handleNext}>
            ❯
          </button>
        )}
      </div>

      {showSecondCard ? (
        <div className="hero2card">
          <img
            className="heroimg"
            src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/285_x_595_App_removebg_preview_2_c4bc942184.png"
            alt="Glass"
          />
          <div className="hero2text">
            <p>Starbucks</p>
            <p style={{ fontSize: "1.8rem" }}>Beverage Subscription</p>
            <p>
              Starbucks Subscription is Back! Sip Your Favourites for Less. Tap
              for Details. T&C Apply.
            </p>
          </div>
          <div className="knowmorebutton">
            <button className="know-more-btn">Know More</button>
          </div>
        </div>
      ) : (
        <div className="herocard">
          <img
            className="heroimg"
            src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Refreshers_dashboard_03_1_10aa41bbca.png"
            alt="Glass"
          />
          <div className="herotext">
            <p>All New</p>
            <p style={{ fontSize: "1.8rem" }}>Starbucks Refreshers</p>
            <p>
              Beat the heat with your bestie, Refreshers now available in Lychee
              Raspberry and Kiwi Calamansi flavours.
            </p>
          </div>
          <div className="orderbutton">
            <button className="order-now-btn">Order Now</button>
          </div>
        </div>
      )}
    </div>
  );
}
