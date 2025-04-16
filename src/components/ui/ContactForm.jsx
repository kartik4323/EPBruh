import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";
import { useFormSubmission } from "../../hooks/useFormSubmission";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    serviceInterest: "call-analysis",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const { submitForm, isSubmitting, isSuccess, errorMessage } =
    useFormSubmission();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (
      formData.phone &&
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await submitForm(formData);
  };

  if (isSuccess) {
    return (
      <div className="contact-form-success">
        <div className="contact-form-success-icon">✓</div>
        <h3 className="contact-form-success-title">Thank You!</h3>
        <p className="contact-form-success-message">
          Your message has been submitted successfully. We'll get back to you
          shortly.
        </p>
        <Button variant="primary" onClick={() => window.location.reload()}>
          Submit Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="contact-form-grid">
        <div className="contact-form-field">
          <label htmlFor="name" className="contact-form-label">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`contact-form-input ${
              errors.name ? "contact-form-input-error" : ""
            }`}
          />
          {errors.name && <p className="contact-form-error">{errors.name}</p>}
        </div>

        <div className="contact-form-field">
          <label htmlFor="companyName" className="contact-form-label">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`contact-form-input ${
              errors.companyName ? "contact-form-input-error" : ""
            }`}
          />
          {errors.companyName && (
            <p className="contact-form-error">{errors.companyName}</p>
          )}
        </div>

        <div className="contact-form-field">
          <label htmlFor="email" className="contact-form-label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`contact-form-input ${
              errors.email ? "contact-form-input-error" : ""
            }`}
          />
          {errors.email && <p className="contact-form-error">{errors.email}</p>}
        </div>

        <div className="contact-form-field">
          <label htmlFor="phone" className="contact-form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`contact-form-input ${
              errors.phone ? "contact-form-input-error" : ""
            }`}
          />
          {errors.phone && <p className="contact-form-error">{errors.phone}</p>}
        </div>

        <div className="contact-form-field contact-form-field-full">
          <label htmlFor="serviceInterest" className="contact-form-label">
            Service of Interest
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className="contact-form-input"
          >
            <option value="call-analysis">
              Call Analysis & Quality Monitoring
            </option>
            <option value="sentiment-analysis">
              Customer Sentiment Analysis
            </option>
            <option value="agent-performance">
              Agent Performance Optimization
            </option>
            <option value="compliance-monitoring">Compliance Monitoring</option>
            <option value="custom-solutions">Custom Solutions</option>
          </select>
        </div>

        <div className="contact-form-field contact-form-field-full">
          <label htmlFor="message" className="contact-form-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`contact-form-input ${
              errors.message ? "contact-form-input-error" : ""
            }`}
          ></textarea>
          {errors.message && (
            <p className="contact-form-error">{errors.message}</p>
          )}
        </div>
      </div>

      {errorMessage && (
        <div className="contact-form-error-message">{errorMessage}</div>
      )}

      <div className="contact-form-submit">
        <Button
          type="submit"
          variant="primary"
          className="contact-form-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Message"}
        </Button>
      </div>

      <p className="contact-form-privacy">
        By submitting this form, you agree to our{" "}
        <a href="#" className="contact-form-privacy-link">
          Privacy Policy
        </a>{" "}
        and consent to be contacted regarding our services.
      </p>
    </form>
  );
};

export default ContactForm;
