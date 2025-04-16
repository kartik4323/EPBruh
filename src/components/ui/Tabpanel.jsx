// components/ui/TabPanel.jsx
import React from "react";

const TabPanel = ({ children, isActive }) => {
  if (!isActive) return null;

  return <div className="animate-fadeIn">{children}</div>;
};

export default TabPanel;
