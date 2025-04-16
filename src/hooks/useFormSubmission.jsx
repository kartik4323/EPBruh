// hooks/useFormSubmission.jsx
import { useState } from "react";

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = async (formData) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // In a real application, this would be an API call to your backend
      // For demo purposes, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate storing the contact in a database
      console.log("Form submitted:", formData);

      // For demonstration, store in localStorage
      const savedContacts = JSON.parse(
        localStorage.getItem("contactSubmissions") || "[]"
      );
      savedContacts.push({
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("contactSubmissions", JSON.stringify(savedContacts));

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "There was an error submitting your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    isSuccess,
    errorMessage,
  };
};
