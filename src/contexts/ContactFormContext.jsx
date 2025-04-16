// contexts/ContactFormContext.jsx
import React, { createContext, useState, useContext } from "react";

const ContactFormContext = createContext();

export const ContactFormProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addSubmission = (submission) => {
    const newSubmission = {
      id: Date.now(),
      ...submission,
      timestamp: new Date().toISOString(),
    };

    setSubmissions((prev) => [newSubmission, ...prev]);

    // Store in localStorage
    const savedSubmissions = JSON.parse(
      localStorage.getItem("contactSubmissions") || "[]"
    );
    localStorage.setItem(
      "contactSubmissions",
      JSON.stringify([newSubmission, ...savedSubmissions])
    );

    return newSubmission;
  };

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <ContactFormContext.Provider
      value={{
        submissions,
        addSubmission,
        isFormOpen,
        toggleForm,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => useContext(ContactFormContext);
