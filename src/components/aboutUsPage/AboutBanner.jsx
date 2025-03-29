import React from "react";
import "./About.css";
import { About_BG_1 } from "../common/Assets.js";

const AboutBanner = () => {
  return (
    <div className="aboutbanner">
      <div className="aboutbannerdiv w-100 h-100">
        <img src={About_BG_1} alt="" />
        <div className="aboutbannerct">
          <h1>About Cogo Smart Tender Coconut Business</h1>
          <h6>
            A specialized mobile billing app designed to streamline sales,
            manage transactions, and boost efficiency for businesses in the
            tender coconut sector.
          </h6>
          {/* <a href=""><button className="homebannerbtn">Get Started</button></a> */}
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
