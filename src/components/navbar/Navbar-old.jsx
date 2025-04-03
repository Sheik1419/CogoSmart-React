import React, { useState, useEffect } from "react";
import "../navbar/Navbar.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? "solid" : ""}`}>
      <div className="container-fluid navbardiv">
        <div className="responsive-button">
          <div>
            <a href="/">
              <img src={logo} alt="Logo" height="50px" />
            </a>
          </div>
          <div>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarcontent"
              aria-controls="navbarcontent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        <div
          className="navbar-collapse d-lg-flex justify-content-between align-items-center collapse mt-2"
          id="navbarcontent"
        >
          <div className="navbar-brand col-lg-2 me-0">
            <a href="/">
              <img src={logo} height="50px" alt="Logo" />
            </a>
          </div>
          <ul
            className="navbar-nav col-lg-6 align-items-lg-center justify-content-lg-evenly"
            id="navbarNav"
          >
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center"
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
