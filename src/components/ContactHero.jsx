import React from "react";
import "../styles/ContactHero.css";

const ContactHero = () => {
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

            <form className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>

                <div className="contact-field">
                  <label>Phone</label>
                  <input type="tel" placeholder="Phone number" />
                </div>
              </div>

              <div className="contact-field">
                <label>Email</label>
                <input type="email" placeholder="Email address" />
              </div>

              <div className="contact-field">
                <label>Service</label>
                <select>
                  <option>Select service</option>
                  <option>Hydraulic Repairs</option>
                  <option>Engineering Support</option>
                  <option>Field Service</option>
                  <option>Products & Supply</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className="contact-field">
                <label>Message</label>
                <textarea placeholder="How can we help?"></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactHero;