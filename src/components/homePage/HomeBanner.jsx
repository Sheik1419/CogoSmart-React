import React from "react";
import "./Home.css";
import { Home_BG_1 } from "./Assets";

const HomeBanner = () => {
  return (
    <div className="homebanner">
      <div className="homebannerdiv w-100 h-100">
        <video autoPlay muted loop>
          <source src={Home_BG_1} type="video/mp4" />
        </video>
        <div className="homebannerct">
          <h1>Welcome to Cogo Smart</h1>
          <h6>
            Cogo Smart is a specialized mobile billing application designed
            exclusively for Business within the Tender Coconut Sector, Manage
            your Sales and Streamline your Business with the Ease.
          </h6>
          <a href="">
            <button className="homebannerbtn">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
