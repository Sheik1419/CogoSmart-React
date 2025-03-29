import React from "react";

const CheckoutCards = () => {
  return (
    <div className="checkout">
      <div className="contacthead">
        <h3>CheckOut</h3>
      </div>
      <div className="checkoutdiv">
        <div className="checkout-form">
          <form action="">
            <div className="container-fluid px-0 row">
              <div className="col-sm-12 col-md-12">
                <h3>Payment</h3>
                <label htmlFor="billedto">Billed To</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id="billedto"
                />
              </div>
              <div className="col-sm-12 col-md-12">
                <label htmlFor="emailid">Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  name=""
                  id="emailid"
                />
              </div>
              <div className="col-sm-12 col-md-12">
                <label htmlFor="checkout">Contact Number</label>
                <input
                  type="number"
                  className="ctct form-control"
                  name=""
                  id="contact"
                  // onInput="validate_contact(this)"
                  min="6000000000"
                  max="9999999999"
                />
              </div>
              <div className="col-sm-12 col-md-12">
                <label htmlFor="paymethod">Payment Method</label>
                <select className="form-select" name="" id="paymethod"></select>
              </div>
              <div className="col-sm-12 col-md-12 d-flex justify-content-between align-items-center gap-2 pt-3">
                <button className="contactbtn py-2 w-25">Cancel</button>
                <button className="cardsbtn py-2 w-75">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
        <div className="checkout-content">
          <h2>Plan Details</h2>
          <div className="row mt-3">
            <div className="cards">
              <div className="cardshead">
                <div className="cardsicon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="cardsheadct">
                  <h5>Basic Plan</h5>
                  <h3>₹ 1000 / mth</h3>
                  <h6>Billed Annually</h6>
                </div>
              </div>
              <div className="cardsul">
                <ul className="p-0">
                  <li>
                    <i className="fas fa-check"></i>
                    <h6 className="m-0">Account management</h6>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <h6 className="m-0">Basic Load Tracking</h6>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <h6 className="m-0">Payment Tracking</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCards;
