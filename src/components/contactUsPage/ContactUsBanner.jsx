import React from "react";
import "./Contact.css";
import { Contact_BG_1 } from "../common/Assets.js";

const ContactBanner = () => {
  return (
    <div className="contactbanner">
      <div className="contactbannerdiv w-100 h-100">
        <img src={Contact_BG_1} alt="" />
        <div className="contactbannerct">
          <h1>Contact Us</h1>
          <h6>
            Get in Touch - We're here to assist with all your coconet trade
            inquiries and support needs
          </h6>
          {/* <a href=""><button className="homebannerbtn">Get Started</button></a> */}
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
