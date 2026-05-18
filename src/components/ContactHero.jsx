import React, { useState } from "react";
import "../styles/ContactHero.css";

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Using mailto fallback
      const mailtoLink = `mailto:info@hyses.co.za?subject=Enquiry from ${formData.name}&body=
Name: ${formData.name}%0D%0A
Phone: ${formData.phone}%0D%0A
Email: ${formData.email}%0D%0A
Service: ${formData.service}%0D%0A
Message: ${formData.message || "No message provided"}%0D%0A
---
Sent from Hyses Contact Form`;

      window.location.href = mailtoLink;
      
      setStatus({ 
        type: "success", 
        message: "Thank you! Your email client will open to send your enquiry." 
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
      });
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <p className="contact-hero-label">Contact Hyses</p>

            <h1>
              Get Reliable Hydraulic Support When You Need It
            </h1>

            <p className="contact-hero-text">
              Reach out to Hyses for hydraulic repairs, engineering support,
              field services, product supply, and industrial maintenance
              solutions.
            </p>

            <div className="contact-hero-actions">
              <a href="#contact-form" className="contact-primary-btn">
                Get a Quote
              </a>

              <a
                href="https://wa.me/27665203741"
                target="_blank"
                rel="noreferrer"
                className="contact-secondary-btn"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="contact-hero-card" id="contact-form">
            <h3>Send an Enquiry</h3>

            {status.message && (
              <div className={`contact-form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label>
                    Name <span className="required-field">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    required
                  />
                </div>

                <div className="contact-field">
                  <label>
                    Phone <span className="required-field">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number" 
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label>
                  Email <span className="required-field">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address" 
                  required
                />
              </div>

              <div className="contact-field">
                <label>
                  Service <span className="required-field">*</span>
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select service</option>
                  <option>Hydraulic Repairs</option>
                  <option>Engineering Support</option>
                  <option>Field Service</option>
                  <option>Products & Supply</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className="contact-field">
                <label>Message (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactHero;