// components/sections/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import "./Hero.css"; // Import the CSS file

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <h1 className="hero-heading">
              Transform Your{" "}
              <span className="highlight">Customer Interactions</span> With
              Advanced Call Analytics
            </h1>
            <p className="hero-subheading">
              Unlock actionable insights from every customer call with our
              AI-powered auditing services. Improve customer satisfaction,
              optimize agent performance, and drive business growth.
            </p>
            <div className="hero-buttons">
              <Link to="/services/call-analysis">
                <Button variant="primary" className="button-custom">
                  Explore Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="button-custom">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/api/placeholder/500/400"
              alt="Call Analytics Dashboard"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
