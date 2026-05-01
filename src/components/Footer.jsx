import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-logo">HYSES</h2>
          <p>
            Leading provider of hydraulic and engineering solutions.
            Delivering quality, reliability, and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Hydraulic Systems</li>
            <li>Engineering Solutions</li>
            <li>Maintenance & Repairs</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@hyses.com</p>
          <p>Phone: +27 00 000 0000</p>
          <p>Location: South Africa</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HYSES. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;