import React from "react";
import "./Checkout.css";
import { Checkout_BG_1 } from "./Assets.js";

const CheckoutBanner = () => {
  return (
    <div className="checkoutbanner">
      <div className="checkoutbannerdiv w-100 h-100">
        <img src={Checkout_BG_1} alt="" />
        <div className="checkoutbannerct">
          <h1>Finalize, Quick & Easy Checkout!</h1>
          <h6>
            Review your order, confirm details, and complete the transaction
            effortlessly with Cogo Smart's specialized mobile billing for the
            tender coconut business.
          </h6>
          {/* <a href=""><button className="homebannerbtn">Get Started</button></a> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutBanner;
