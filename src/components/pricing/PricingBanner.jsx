import React from "react";
import "./Pricing.css";
import { Pricing_BG_1 } from "./Assets.js";

const PricingBanner = () => {
  return (
    <div className="pricingbanner">
      <div className="pricingbannerdiv w-100 h-100">
        <img src={Pricing_BG_1} alt="" />
        <div className="pricingbannerct">
          <h1>Transparent Pricing for Your Tender Coconut Business</h1>
          <h6>
            Explore our flexible plans designed to simplify billing, manage
            sales, and streamline operations with Cogo Smart's specialized
            pricing tailored for the tender coconut sector.
          </h6>
          {/* <a href=""><button className="homebannerbtn">Get Started</button></a> */}
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;
