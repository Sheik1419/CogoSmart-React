import React, { useState, useEffect } from "react";
import "../navbar/Navbar.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Scroll Effect
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

  // Navbar Icon
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    if (isOpen) {
      navbar.classList.add("solid");
    } else {
      navbar.classList.remove("solid");
    }
  }, [isOpen]);

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
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarcontent"
              aria-controls="navbarcontent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i
                className={`toggler-icon fa-solid ${
                  isOpen ? "fa-xmark" : "fa-bars"
                } transition-transform duration-300`}
              ></i>
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
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
