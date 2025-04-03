import React from "react";
import PricingCards from "./PricingCards.jsx";

const PricingBody = () => {
  // Using Objects
  // const pricingData = {
  //   goldCard1: {
  //     plan: "Gold Plan",
  //     amt: "₹ 899 / mnth",
  //     access_1: "One Admin Login Access",
  //     access_2: "One Employee Login Access",
  //   },
  //   goldCard2: {
  //     plan: "Gold Plan",
  //     amt: "₹ 2499 / quarter",
  //     access_1: "One Admin Login Access",
  //     access_2: "One Employee Login Access",
  //   },
  //   goldCard3: {
  //     plan: "Gold Plan",
  //     amt: "₹ 7499 / year",
  //     access_1: "One Admin Login Access",
  //     access_2: "One Employee Login Access",
  //   },
  //   platinumCard1: {
  //     plan: "Platinum Plan",
  //     amt: "₹ 1299 / mnth",
  //     access_1: "One Admin Login Access",
  //     access_2: "Multiple Employee Login Access",
  //   },
  //   platinumCard2: {
  //     plan: "Platinum Plan",
  //     amt: "₹ 3499 / quarter",
  //     access_1: "One Admin Login Access",
  //     access_2: "Multiple Employee Login Access",
  //   },
  //   platinumCard3: {
  //     plan: "Platinum Plan",
  //     amt: "₹ 11999 / year",
  //     access_1: "One Admin Login Access",
  //     access_2: "Multiple Employee Login Access",
  //   },
  // };

  // Using Array
  const pricingData = [
    {
      plan: "Gold Plan",
      amt: "₹ 899 / mnth",
      access_1: "One Admin Login Access",
      access_2: "One Employee Login Access",
    },
    {
      plan: "Gold Plan",
      amt: "₹ 2499 / quarter",
      access_1: "One Admin Login Access",
      access_2: "One Employee Login Access",
    },
    {
      plan: "Gold Plan",
      amt: "₹ 7499 / year",
      access_1: "One Admin Login Access",
      access_2: "One Employee Login Access",
    },
    {
      plan: "Platinum Plan",
      amt: "₹ 1299 / mnth",
      access_1: "One Admin Login Access",
      access_2: "Multiple Employee Login Access",
    },
    {
      plan: "Platinum Plan",
      amt: "₹ 3499 / quarter",
      access_1: "One Admin Login Access",
      access_2: "Multiple Employee Login Access",
    },
    {
      plan: "Platinum Plan",
      amt: "₹ 11999 / year",
      access_1: "One Admin Login Access",
      access_2: "Multiple Employee Login Access",
    },
  ];
  return (
    <div className="pricing">
      <div className="pricingdiv">
        <div className="pricinghead flex-column">
          <h5>Pricing Plans</h5>
          <h3 className="mb-3">Plans for all sizes</h3>
          <h6>
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </h6>
        </div>

        <div className="pricing-cards">
          {/* Using Objects */}
          {/* <PricingCards {...pricingData.goldCard1} />
          <PricingCards {...pricingData.goldCard2} />
          <PricingCards {...pricingData.goldCard3} />
          <PricingCards {...pricingData.platinumCard1} />
          <PricingCards {...pricingData.platinumCard2} />
          <PricingCards {...pricingData.platinumCard3} /> */}

          {/* Using Array */}
          {pricingData.map((data, index) => (
            <PricingCards key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingBody;
