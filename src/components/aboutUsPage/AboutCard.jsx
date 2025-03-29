import React from "react";
import { Card_Img_1 } from "./Assets.js";

const AboutCards = () => {
  return (
    <div className="about">
      <div className="aboutdiv">
        <div className="about-content">
          <h2>About Us</h2>
          <h6>
            Tropical Water Private Limited is a leading company in the coconet
            trade sector, with a vision to bring innovation and technology to
            the industry. Our brand, Cogo Smart, was born out of a need for a
            smarter, more efficient way to manage coconet trading and accounts
            between farmers, traders, and employees.
          </h6>
          <h6>
            We believe that through technology, we can create an ecosystem where
            all stakeholders benefit from streamlined operations, transparent
            financial management, and smoother logistical coordination. With
            Cogo Smart, we’re helping transform the industry for the better.
          </h6>
          <h5>Our Vision</h5>
          <h6>
            To empower the coconet trade industry with advanced software
            solutions that make trade more efficient, transparent, and reliable.
          </h6>
          <h5>Our Mission</h5>
          <h6>
            To provide seamless, user-friendly software tools that help farmers,
            traders, and employees manage coconet trade and logistics with ease
            and precision.
          </h6>
        </div>
        <div className="about-img">
          <img src={Card_Img_1} className="d-flex mx-auto" width="90%" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
