// src/components/AboutHero.jsx
import React from "react";
import "../styles/AboutHero.css";
import { ArrowRight, Award, Clock, HeartHandshake } from "lucide-react";

const AboutHero = () => {
  const handleScrollToInfo = () => {
    const aboutInfoSection = document.querySelector('.about-info');
    if (aboutInfoSection) {
      aboutInfoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-hero">
      {/* Animated background elements */}
      <div className="about-bg-elements">
        <div className="about-bg-circle circle-1"></div>
        <div className="about-bg-circle circle-2"></div>
        <div className="about-bg-circle circle-3"></div>
        <div className="about-bg-circle circle-4"></div>
      </div>

      {/* Floating particles */}
      <div className="about-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="about-hero-overlay"></div>

      <div className="about-hero-content">
        <div className="about-label-wrapper">
          <div className="about-label-line"></div>
          <span className="about-label">Who We Are</span>
          <div className="about-label-line"></div>
        </div>

        <h1>
          About <span className="highlight-text">Us</span>
        </h1>

        <div className="about-hero-underline"></div>

        <p className="about-description">
          Hyses is a trusted provider of hydraulic and engineering solutions,
          delivering reliable services across multiple industries with precision,
          expertise, and unwavering commitment to excellence.
        </p>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <Award size={24} />
            </div>

            <div className="stat-info">
              <div className="stat-number">Quality</div>
              <div className="stat-label">Driven Workmanship</div>
            </div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-icon">
              <Clock size={24} />
            </div>

            <div className="stat-info">
              <div className="stat-number">Reliable</div>
              <div className="stat-label">Industrial Support</div>
            </div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-icon">
              <HeartHandshake size={24} />
            </div>

            <div className="stat-info">
              <div className="stat-number">100%</div>
              <div className="stat-label">Devotion</div>
            </div>
          </div>
        </div>

        <button className="about-cta" onClick={handleScrollToInfo}>
          Learn More About Us
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Bottom wave decoration */}
      <div className="about-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;