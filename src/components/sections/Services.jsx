// components/sections/Services.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../ui/ServiceCard";
import TabPanel from "../ui/Tabpanel";
import "./Services.css";

const Services = () => {
  const [activeTab, setActiveTab] = useState("call-analysis");

  const services = [
    {
      id: "call-analysis",
      title: "Call Analysis & Quality Monitoring",
      img: "my-react-app/src/assets/images/epimg1.jpg",
      description:
        "Comprehensive evaluation of customer calls to ensure quality, identify trends, and improve customer experience.",
      icon: "📊",
      features: [
        "Automated call scoring and evaluation",
        "Key performance indicator tracking",
        "Call categorization and trend analysis",
        "Quality assurance workflows",
      ],
    },
    {
      id: "sentiment-analysis",
      title: "Customer Sentiment Analysis",
      img: "../../assets/images/epimg3.jpg",
      description:
        "Analyze customer emotions and satisfaction levels to identify pain points and opportunities for improvement.",
      icon: "😊",
      features: [
        "Real-time emotion detection",
        "Customer satisfaction scoring",
        "Issue identification and categorization",
        "Sentiment trend reporting",
      ],
    },
    {
      id: "agent-performance",
      title: "Agent Performance Optimization",
      img: "my-react-app/src/assets/images/epimg2.jpg",

      description:
        "Evaluate and improve call center agent performance through data-driven insights and targeted coaching.",
      icon: "🚀",
      features: [
        "Agent scorecards and benchmarking",
        "Performance trend analysis",
        "Personalized coaching recommendations",
        "Best practice identification",
      ],
    },
    {
      id: "compliance-monitoring",
      title: "Compliance Monitoring",
      img: "my-react-app/src/assets/images/epimg4.jpg",

      description:
        "Ensure regulatory compliance and script adherence across all customer interactions.",
      icon: "✓",
      features: [
        "Automated script adherence checking",
        "Regulatory compliance verification",
        "Risk assessment and mitigation",
        "Compliance reporting and documentation",
      ],
    },
    {
      id: "custom-solutions",
      title: "Custom Solutions",
      img: "my-react-app/src/assets/images/epimg5.png",

      description:
        "Tailored call auditing solutions designed to meet your specific business needs and challenges.",
      icon: "🔧",
      features: [
        "Custom metrics and KPIs",
        "Industry-specific analysis models",
        "Integration with existing systems",
        "Specialized reporting and dashboards",
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            Discover how our comprehensive call auditing solutions can transform
            your customer service operations and drive business growth.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="tabs">
          <div className="tab-buttons">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`tab-button ${
                  activeTab === service.id ? "active" : ""
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {services.map((service) => (
            <TabPanel key={service.id} isActive={activeTab === service.id}>
              <div className="service-detail">
                <div className="service-text">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <span className="check-icon">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="learn-more">
                    <Link to={`/services/${service.id}`}>
                      Learn more about {service.title}
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
                <div className="service-image">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="image"
                  />
                </div>
              </div>
            </TabPanel>
          ))}
        </div>

        {/* Service Cards */}
        <div className="service-cards">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={`/services/${service.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
