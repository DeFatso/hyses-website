// Navbar.jsx
import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About Us", "Services", "Projects", "Team", "Contact"];

  const formatLink = (item) =>
    item.toLowerCase().replaceAll(" ", "-");

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <img src="/logo.png" alt="Hyses logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="nav-menu-desktop">
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={`#${formatLink(item)}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`nav-menu-mobile ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links-mobile">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${formatLink(item)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;