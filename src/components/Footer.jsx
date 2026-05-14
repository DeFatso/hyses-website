import "../styles/Footer.css";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#f85f1c"
              opacity="0.1"
            ></path>
          </svg>
        </div>

        <div className="footer-container">
          {/* Brand */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <h2>HYSES</h2>
            </div>

            <p className="brand-description">
              Leading provider of comprehensive hydraulic and engineering
              solutions across Africa. Excellence in every connection.
            </p>

            <div className="footer-socials">
              <a
                href="https://wa.me/27665203741"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="social-icon whatsapp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.facebook.com/hyseshydraulic"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-icon facebook"
              >
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Twitter" className="social-icon twitter">
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="social-icon linkedin"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-section">
            <h3>Explore</h3>

            <ul>
              <li>
                <a href="/">Home</a>
                <HiArrowRight className="link-icon" />
              </li>

              <li>
                <a href="/about">About Us</a>
                <HiArrowRight className="link-icon" />
              </li>

              <li>
                <a href="/services">Services</a>
                <HiArrowRight className="link-icon" />
              </li>

              <li>
                <a href="/projects">Projects</a>
                <HiArrowRight className="link-icon" />
              </li>

              <li>
                <a href="/contact">Contact</a>
                <HiArrowRight className="link-icon" />
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Get in Touch</h3>

            <div className="contact-info-item">
              <FaPhoneAlt className="contact-icon" />

              <div>
                <p className="contact-label">Office</p>
                <a href="tel:+27100234807">+27 10 023 4807</a>
              </div>
            </div>

            <div className="contact-info-item">
              <FaWhatsapp className="contact-icon" />

              <div>
                <p className="contact-label">WhatsApp</p>
                <a href="tel:+27665203741">+27 66 520 3741</a>
              </div>
            </div>

            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />

              <div>
                <p className="contact-label">Email</p>
                <a href="mailto:info@hyses.co.za">info@hyses.co.za</a>
              </div>
            </div>

            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-icon" />

              <div>
                <p className="contact-label">Visit Us</p>

                <a
                  href="https://www.google.com/maps?q=67+Van+Rensburg+Avenue+Klipfontein+Witbank"
                  target="_blank"
                  rel="noreferrer"
                >
                  67 Van Rensburg Ave, Klipfontein, Witbank
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-section">
            <h3>Business Hours</h3>

            <div className="business-hours">
              <div className="hours-item">
                <FaClock className="hours-icon" />

                <div>
                  <p className="day">Monday - Friday</p>
                  <p className="time">8:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="hours-item">
                <FaClock className="hours-icon" />

                <div>
                  <p className="day">Saturday</p>
                  <p className="time">9:00 AM - 1:00 PM</p>
                </div>
              </div>

              <div className="hours-item emergency">
                <p className="emergency-text">
                  24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p>© {currentYear} HYSES. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <div className="sticky-footer-contact">
        <a href="tel:+27100234807" className="sticky-call">
          <FaPhoneAlt />
          <span>Call</span>
        </a>

        <a href="mailto:info@hyses.co.za" className="sticky-email">
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a
          href="https://wa.me/27665203741"
          target="_blank"
          rel="noreferrer"
          className="sticky-whatsapp"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default Footer;