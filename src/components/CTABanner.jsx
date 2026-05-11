import React from "react";
import "../styles/CTABanner.css";

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-banner-container">

        <div className="cta-banner-content">
          <p className="cta-banner-label">
            Reliable Hydraulic & Engineering Support
          </p>

          <h2>
            Need Professional Industrial Solutions?
          </h2>

          <p>
            From hydraulic repairs and maintenance to engineering support and
            industrial services, Hyses is ready to help keep your operations
            running efficiently.
          </p>
        </div>

        <div className="cta-banner-actions">
          <a href="contact" className="cta-primary-btn">
            Get a Quote
          </a>

          <a href="tel:+27123456789" className="cta-secondary-btn">
            Call Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;