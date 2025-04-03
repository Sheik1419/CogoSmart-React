import React from "react";
import { Link } from "react-router-dom";

const PricingCards = (props) => {
  return (
    <div className="cards">
      <div className="cardshead">
        <div className="cardsicon">
          <i className="fas fa-bolt"></i>
        </div>
        <div className="cardsheadct">
          <h5>{props.plan}</h5>
          <h3>{props.amt}</h3>
          {/* <h6>Billed Annually</h6> */}
        </div>
      </div>
      <div className="cardsul">
        <ul className="p-0">
          <li>
            <i className="fas fa-check"></i>
            <h6 className="m-0">{props.access_1}</h6>
          </li>
          <li>
            <i className="fas fa-check"></i>
            <h6 className="m-0">{props.access_2}</h6>
          </li>
        </ul>
      </div>
      <div className="cardsbtndiv">
        <Link to="/checkout">
          <button className="cardsbtn w-100">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCards;
