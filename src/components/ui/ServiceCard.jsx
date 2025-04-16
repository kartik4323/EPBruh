// components/ui/ServiceCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <div className="service-card">
      <div className="service-card-content">
        <div className="service-card-icon">{icon}</div>
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        <Link to={link} className="service-card-link">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
