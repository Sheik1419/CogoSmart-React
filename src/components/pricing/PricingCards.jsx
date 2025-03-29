import React from "react";
import { Link } from "react-router-dom";

const PricingCards = () => {
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
          <div className="cards">
            <div className="cardshead">
              <div className="cardsicon">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="cardsheadct">
                <h5>Gold Plan</h5>
                <h3>₹ 899 / mth</h3>
                {/* <h6>Billed Annually</h6> */}
              </div>
            </div>
            <div className="cardsul">
              <ul className="p-0">
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">One Admin Login Access</h6>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">One Employee Login Access</h6>
                </li>
              </ul>
            </div>
            <div className="cardsbtndiv">
              <Link to="/checkout">
                <button className="cardsbtn w-100">Checkout</button>
              </Link>
            </div>
          </div>
          <div className="cards">
            <div className="cardshead">
              <div className="cardsicon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="cardsheadct">
                <h5>Gold Plan</h5>
                <h3>₹ 2499 / quarter</h3>
                {/* <h6>Billed Annually</h6> */}
              </div>
            </div>
            <div className="cardsul">
              <ul className="p-0">
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">One Admin Login Access</h6>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">One Employee Login Access</h6>
                </li>
              </ul>
            </div>
            <div className="cardsbtndiv">
              <Link to="/checkout">
                <button className="cardsbtn w-100">Checkout</button>
              </Link>
            </div>
          </div>
          <div className="cards">
            <div className="cardshead">
              <div className="cardsicon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="cardsheadct">
                <h5>Gold Plan</h5>
                <h3>₹ 7499 / year</h3>
                {/* <h6>Billed Annually</h6> */}
              </div>
            </div>
            <div className="cardsul">
              <ul className="p-0">
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">One Admin Login Access</h6>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">One Employee Login Access</h6>
                </li>
              </ul>
            </div>
            <div className="cardsbtndiv">
              <Link to="/checkout">
                <button className="cardsbtn w-100">Checkout</button>
              </Link>
            </div>
          </div>
          <div className="cards">
            <div className="cardshead">
              <div className="cardsicon">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="cardsheadct">
                <h5>Platinum Plan</h5>
                <h3>₹ 1299 / mth</h3>
                {/* <h6>Billed Annually</h6> */}
              </div>
            </div>
            <div className="cardsul">
              <ul className="p-0">
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">One Admin Login Access</h6>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">Multiple Employee Login Access</h6>
                </li>
              </ul>
            </div>
            <div className="cardsbtndiv">
              <Link to="/checkout">
                <button className="cardsbtn w-100">Checkout</button>
              </Link>
            </div>
          </div>
          <div className="cards">
            <div className="cardshead">
              <div className="cardsicon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="cardsheadct">
                <h5>Platinum Plan</h5>
                <h3>₹ 3499 / quarter</h3>
                {/* <h6>Billed Annually</h6> */}
              </div>
            </div>
            <div className="cardsul">
              <ul className="p-0">
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">One Admin Login Access</h6>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">Multiple Employee Login Access</h6>
                </li>
              </ul>
            </div>
            <div className="cardsbtndiv">
              <Link to="/checkout">
                <button className="cardsbtn w-100">Checkout</button>
              </Link>
            </div>
          </div>
          <div className="cards">
            <div className="cardshead">
              <div className="cardsicon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="cardsheadct">
                <h5>Gold Plan</h5>
                <h3>₹ 11999 / year</h3>
                {/* <h6>Billed Annually</h6> */}
              </div>
            </div>
            <div className="cardsul">
              <ul className="p-0">
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">One Admin Login Access</h6>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <h6 className="m-0">Multiple Employee Login Access</h6>
                </li>
              </ul>
            </div>
            <div className="cardsbtndiv">
              <Link to="/checkout">
                <button className="cardsbtn w-100">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
