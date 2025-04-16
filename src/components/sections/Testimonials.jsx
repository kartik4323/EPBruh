// components/sections/Testimonials.jsx
import React, { useState, useEffect } from "react";
import Testimonial from "../ui/Testimonial";
import "./Testimonials.css";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "VoiceAuditPro transformed our call center operations. We've seen a 35% improvement in our customer satisfaction scores within just three months of implementation.",
      author: "Sarah Johnson",
      position: "Customer Service Director",
      company: "Global Retail Solutions",
    },
    {
      id: 2,
      quote:
        "The insights we've gained from VoiceAuditPro have been invaluable. We've identified key areas for improvement and our agents are now more confident and effective than ever.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "TechSupport Plus",
    },
    {
      id: 3,
      quote:
        "As a financial services company, compliance is critical. VoiceAuditPro has helped us maintain 100% script adherence and dramatically reduce our regulatory risk.",
      author: "Jennifer Martinez",
      position: "Compliance Officer",
      company: "First Financial Services",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-heading">What Our Clients Say</h2>
          <p className="testimonials-subheading">
            Don't just take our word for it. Here's what our clients have to say
            about their experience with VoiceAuditPro.
          </p>
        </div>

        <div className="testimonials-content">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              isActive={index === currentTestimonial}
            />
          ))}

          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`dot ${
                  index === currentTestimonial ? "active" : ""
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
