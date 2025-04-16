import React from "react";
import ContactForm from "../ui/ContactForm";
import { useContactForm } from "../../contexts/ContactFormContext";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Ready to transform your customer service with advanced call
            auditing? Contact us today to discuss how we can help your business.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
