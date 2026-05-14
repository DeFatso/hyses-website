import "../styles/ContactExtras.css";

const ContactExtras = () => {
  return (
    <>
      <section className="social-proof">
        <div className="social-proof-container">
          <p>Trusted by businesses across Southern Africa</p>

          <div className="client-logos">
            <div>Client Logo</div>
            <div>Client Logo</div>
            <div>Client Logo</div>
            <div>Client Logo</div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-content">
          <h2>Visit Our Office</h2>
          <p>67 Van Rensburg</p>
        </div>

        <div className="map-wrapper">
          <iframe
            title="HYSES Location"
            src="https://www.google.com/maps?q=67%20Van%20Rensburg%20Avenue%20Klipfontein%20Witbank&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <div className="sticky-contact">
        <a href="tel:+27100234807">Call Office</a>
        <a
          href="https://wa.me/27665203741"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          WhatsApp
        </a>
      </div>

      <a
        href="https://wa.me/27665203741"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
    </>
  );
};

export default ContactExtras;