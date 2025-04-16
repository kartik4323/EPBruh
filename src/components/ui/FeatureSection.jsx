// components/ui/FeatureSection.jsx
import React from "react";

const FeatureSection = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureSection;
