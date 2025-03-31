import React from "react";
import "./Recommennds.css";


const Recommennds = () => {
    return (
        <div className="recommend-container">
            <span className="title">Handcrafted Curation</span>

            <div className="recommend-items">
                <div className="recommend-card">
                    <img
                        className="recommend-image"
                        src="https://starbucksstatic.cognizantorderserv.com/Category/Small/Bestseller.jpg"
                        alt="best seller"
                    />
                    <span className="recommend-text">Bestseller</span>
                </div>
                <div className="recommend-card">
                    <img
                        className="recommend-image"
                        src="https://starbucksstatic.cognizantorderserv.com/Category/Small/Drinks.jpg"
                        alt="Drinks"
                    />
                    <span className="recommend-text">Drinks</span>
                </div>

                <div className="recommend-card">
                    <img
                        className="recommend-image"
                        src="https://starbucksstatic.cognizantorderserv.com/Category/Small/Food.jpg"
                        alt="Merchandise"
                    />
                    <span className="recommend-text">Food</span>
                </div>
                <div className="recommend-card">
                    <img
                        className="recommend-image"
                        src="https://starbucksstatic.cognizantorderserv.com/Category/Small/Merchandise.jpg"
                        alt="Coffee At Home"
                    />
                    <span className="recommend-text">Merchandise</span>
                </div>
                <div className="recommend-card">
                    <img
                        className="recommend-image"
                        src="https://starbucksstatic.cognizantorderserv.com/Category/Small/CoffeeAtHome.jpg"
                        alt="Ready to Eat"
                    />
                    <span className="recommend-text">Coffee At Home</span>
                </div>
                <div className="recommend-card">
                    <img
                        className="recommend-image"
                        src="https://starbucksstatic.cognizantorderserv.com/Category/Small/ReadyToEat.jpg"
                        alt="Ready to Eat"
                    />
                    <span className="recommend-text">Ready to Eat</span>
                </div>
            

                
                
            </div>
        </div>
    );
};

export default Recommennds;
