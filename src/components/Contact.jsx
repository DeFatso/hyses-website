import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
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
      // Using EmailJS or a backend service
      // For now, using mailto fallback
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
      
      // Optional: Reset form
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
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-label">Get In Touch</p>

          <h2>Let's Talk Hydraulics Bitch</h2>

          <p className="contact-intro">
            Need hydraulic repairs, engineering support, field service, or
            workshop assistance? Contact Hyses and our team will assist you.
          </p>

          <div className="contact-info-grid">
            <div className="contact-info-card">
              <span>☎</span>
              <div>
                <h4>Office</h4>
                <p>+27 10 023 4807</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span>✉</span>
              <div>
                <h4>Email</h4>
                <p>info@hyses.co.za</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span>📍</span>
              <div>
                <h4>Address</h4>
                <p>67 Van Rensburg Avenue, Klipfontein, Witbank</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span>📱</span>
              <div>
                <h4>WhatsApp</h4>
                <p>+27 66 520 3741</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Send an Enquiry</h3>

          {status.message && (
            <div className={`form-status ${status.type}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>
                  Your Name <span className="required">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Phone Number <span className="required">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number" 
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                Email Address <span className="required">*</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address" 
                required
              />
            </div>

            <div className="form-group">
              <label>
                Service Needed <span className="required">*</span>
              </label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a service</option>
                <option>Hydraulic Repairs</option>
                <option>Engineering Solutions</option>
                <option>Field Service</option>
                <option>Workshop Support</option>
                <option>Product Supply</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message (Optional)</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help"
              ></textarea>
            </div>

            <button type="submit" className="contact-button" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;