import React from "react";
import "../footer/Footer.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="pt-5 footercol">
          <div className="row" id="footerdiv">
            <div className="col-sm-12 col-md-6 mb-3">
              <div className="d-flex justify-content-start align-items-start flex-column">
                <div className="col footerlogo">
                  <img
                    src={logo}
                    className="d-flex mx-auto"
                    height="50px"
                    alt=""
                  />
                </div>
                <br />
                <div className="row w-100">
                  <div className="col-sm-12 col-md-5 mb-3 footerheadings">
                    <h5>Contact Us</h5>
                    <br />
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <a
                          href="tel:+918438298692"
                          target="_blank"
                          className="p-0"
                        >
                          +91 84382 98692
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a
                          href="mailto:cogosmart@gmail.com"
                          target="_blank"
                          className="p-0"
                        >
                          cogosmart@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-5 mb-3 footerheadings">
                    <h5>Location</h5>
                    <br />
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Near+Reliance+Mall,+5+roads,+Salem+-+636004"
                          target="_blank"
                          className="p-0"
                        >
                          Near Reliance Mall, 5 Roads, Salem - 636304
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-2 mb-3 footerheadings">
              <h5>Quick Links</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="/" className="p-0">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/about-us" className="-0">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/" className="p-0">
                    Features
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/pricing" className="p-0">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/contact-us" className="p-0">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-2 mb-3 footerheadings">
              <h5>Legal Information</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="/terms-and-conditions" className="p-0">
                    Terms & Conditions
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/privacy-policy" className="p-0">
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-2 mb-3 footerheadings">
              <form>
                <h5>More About Us</h5>
                <br />
                <ul
                  className="nav flex-column"
                  style={{ display: "grid", gridTemplateColumns: "30% 30%" }}
                  id="brands"
                >
                  <li className="nav-item mb-3">
                    <a
                      href="https://wa.me/918608338833"
                      target="__blank"
                      id="whatsapp"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-title="WhatsApp"
                    >
                      <div className="brandicons">
                        <i className="fa-brands fa-whatsapp"></i>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item mb-3">
                    <a
                      href=""
                      target="__blank"
                      id="facebook"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-title="Facebook"
                    >
                      <div className="brandicons">
                        <i className="fa-brands fa-facebook-f"></i>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item mb-3">
                    <a
                      href=""
                      target="__blank"
                      id="instagram"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-title="Instagram"
                    >
                      <div className="brandicons">
                        <i className="fa-brands fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item mb-3">
                    <a
                      href=""
                      target="__blank"
                      id="linkedin"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-title="LinkedIn"
                    >
                      <div className="brandicons">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item mb-3">
                    <a
                      href=""
                      target="__blank"
                      id="twitter"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-title="Twitter"
                    >
                      <div className="brandicons">
                        <i className="fa-brands fa-x-twitter"></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <h6>&copy; 2025 | All rights reserved</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
