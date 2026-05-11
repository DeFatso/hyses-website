import React from "react";
import "../styles/ContactInfo.css";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        <div className="contact-info-content">
          <p className="contact-info-label">Visit Or Contact Us</p>

          <h2>Need Assistance? We’re Ready To Help</h2>

          <p className="contact-info-text">
            Speak to our team directly for hydraulic repairs, field service,
            engineering support, product supply, and general enquiries.
          </p>

          <div className="contact-details-grid">
            <div className="contact-detail-card">
              <span className="contact-detail-icon">📍</span>

              <div>
                <h4>Physical Address</h4>
                <p>67 Van Rensburg Avenue</p>
                <p>Klipfontein, Witbank</p>
              </div>
            </div>

            <div className="contact-detail-card">
              <span className="contact-detail-icon">☎</span>

              <div>
                <h4>Office Number</h4>
                <p>+27 10 023 4807</p>
              </div>
            </div>

            <div className="contact-detail-card">
              <span className="contact-detail-icon">✉</span>

              <div>
                <h4>Email Address</h4>
                <p>info@hyses.co.za</p>
              </div>
            </div>

            <div className="contact-detail-card">
              <span className="contact-detail-icon">👥</span>

              <div>
                <h4>Direct Contacts</h4>
                <p>Leeroy: +27 66 201 3689</p>
                <p>Willing: +27 81 470 7892</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map-wrapper">
          <div className="contact-map-card">
            <iframe
              title="Hyses Location Map"
              src="https://www.google.com/maps?q=67%20Van%20Rensburg%20Avenue%20Klipfontein%20Witbank&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <div className="contact-info-actions">
            <a
              href="tel:+27100234807"
              className="contact-info-btn primary"
            >
              Call Office
            </a>

            <a
              href="https://wa.me/27662013689"
              target="_blank"
              rel="noreferrer"
              className="contact-info-btn whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;