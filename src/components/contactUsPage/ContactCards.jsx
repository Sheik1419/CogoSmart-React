import React from "react";

const ContactCards = () => {
  return (
    <div className="contact">
      <div className="contacthead">
        <h3>Contact Us</h3>
      </div>
      <div className="contactdiv">
        <div className="contact-content">
          <h2>Contact Information</h2>
          <h5>Say Something to start a live chat!</h5>
          <div className="row">
            <div className="col-sm-12">
              <i className="fas fa-phone"></i>
              <h6>+91 86083 38833</h6>
            </div>
            <div className="col-sm-12">
              <i className="fas fa-envelope"></i>
              <h6>cogosmart@gmail.com</h6>
            </div>
            <div className="col-sm-12">
              <i className="fas fa-location-dot"></i>
              <h6>Near Reliance Mall, 5 Roads, Salem - 636304, TN India.</h6>
            </div>
          </div>
          <div className="iconsrow d-flex align-items-center justify-content-start gap-3">
            <a href="">
              <div className="iconsdiv">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
            </a>
            <a href="">
              <div className="iconsdiv">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
            </a>
            <a href="https://wa.me/918608338833" target="_blank">
              <div className="iconsdiv">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </a>
            <a href="">
              <div className="iconsdiv">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form action="">
            <div className="container-fluid px-0 row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="">First Name</label>
                <input type="text" className="form-control" name="" id="" />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="">Last Name</label>
                <input type="text" className="form-control" name="" id="" />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="">Email ID</label>
                <input type="email" className="form-control" name="" id="" />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="">Contact Number</label>
                <input
                  type="number"
                  className="ctct form-control"
                  name=""
                  id=""
                  // onInput="validate_contact(this)"
                  min="6000000000"
                  max="9999999999"
                />
              </div>
              <div className="col-sm-12 col-md-12">
                <label htmlFor="">Message</label>
                <textarea
                  rows="2"
                  className="form-control"
                  name=""
                  id=""
                ></textarea>
              </div>
              <div className="col-sm-12 col-md-12 d-flex justify-content-md-end">
                <button className="contactbtn">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
