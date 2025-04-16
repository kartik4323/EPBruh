// components/sections/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import FeatureSection from "../ui/FeatureSection";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: "🔍",
      title: "Comprehensive Analysis",
      description:
        "Our powerful AI analyzes every aspect of customer calls, from tone and sentiment to compliance and resolution efficiency.",
    },
    {
      icon: "📊",
      title: "Actionable Insights",
      description:
        "Transform raw data into clear, actionable insights that drive measurable improvements in customer service quality.",
    },
    {
      icon: "🚀",
      title: "Continuous Improvement",
      description:
        "Our platform identifies trends and opportunities, helping your team continuously improve and adapt to customer needs.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-container">
            <img
              src="/api/placeholder/500/400"
              alt="About RedGeneralPro"
              className="about-image"
            />
          </div>

          <div className="about-text-container">
            <h2 className="about-heading">About VoiceAuditPro</h2>
            <p className="about-paragraph">
              RedGeneralPro is a AI-powered call auditing services, helping
              businesses transform their customer interactions through advanced
              analytics and actionable insights.
            </p>
            <p className="about-paragraph">
              Founded in 2025, we're building our products to help companies
              across various industries improve their customer service quality,
              agent performance, and compliance adherence through our innovative
              solutions.
            </p>
            <div className="about-button">
              <Link to="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </div>

            <div className="feature-grid">
              {features.map((feature, index) => (
                <FeatureSection
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
