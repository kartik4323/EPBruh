// components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import "./Navbar.css"; // Import the CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <span className="navbar-brand">
              Voice<span className="text-dark">Audit</span>Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active-link" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/services/call-analysis"
              className={`nav-link ${
                location.pathname.includes("/services") ? "active-link" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "active-link" : ""
              }`}
            >
              About
            </Link>
            <Link to="/contact">
              <Button variant="primary">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-toggle">
            <button onClick={toggleMenu} className="menu-button">
              <svg
                className={`icon ${isOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`icon ${isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : "hide"}`}>
        <Link
          to="/"
          className={`mobile-link ${
            location.pathname === "/" ? "active-mobile" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/services/call-analysis"
          className={`mobile-link ${
            location.pathname.includes("/services") ? "active-mobile" : ""
          }`}
        >
          Services
        </Link>
        <Link
          to="/about"
          className={`mobile-link ${
            location.pathname === "/about" ? "active-mobile" : ""
          }`}
        >
          About
        </Link>
        <Link to="/contact" className="mobile-link">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
