import "./LearnMore.css";
import React from "react";

const LearnMore = () => {
  return (
    <div className="art">
      <div className="imgtex">
        <h2 className="learn">Learn more about the world of coffee!</h2>
        <p className="discover">Discover More</p>
      </div>
      <img
        src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg"
        className="coffimg"
        alt="Coffee"
      />
    </div>
  );
};

export default LearnMore;
