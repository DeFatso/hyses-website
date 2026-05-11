// src/components/WhyChooseUs.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import "../styles/WhyChooseUs.css";

import WhyChooseUsImage from "../assets/why-choose-us-main.jpg";
import QualityIcon from "../assets/icons/quality.svg";
import SupportIcon from "../assets/icons/support.svg";
import InnovationIcon from "../assets/icons/innovation.svg";
import ExpertiseIcon from "../assets/icons/expertise.svg";

import HydraulicMaintenanceImg from "../assets/hydraulic-maintenance.jpg";
import IndustrialEquipmentImg from "../assets/industrial-equipment.jpg";

const WhyChooseUs = () => {
  const navigate = useNavigate(); // Initialize navigate

  const features = [
    {
      id: 1,
      icon: QualityIcon,
      title: "Premium Quality",
      description:
        "ISO-certified components and rigorous testing ensure every solution meets the highest industry standards.",
      delay: "0.1s",
    },
    {
      id: 2,
      icon: SupportIcon,
      title: "24/7 Field Support",
      description:
        "Round-the-clock technical assistance and on-site support to minimize your operational downtime.",
      delay: "0.2s",
    },
    {
      id: 3,
      icon: InnovationIcon,
      title: "Innovation First",
      description:
        "Cutting-edge hydraulic solutions with continuous R&D to keep your operations ahead of the curve.",
      delay: "0.3s",
    },
    {
      id: 4,
      icon: ExpertiseIcon,
      title: "Expert Engineers",
      description:
        "20+ years of combined experience with certified hydraulic specialists at your service.",
      delay: "0.4s",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed", delay: "0.2s" },
    { value: "98%", label: "Client Satisfaction", delay: "0.3s" },
    { value: "15+", label: "Industry Awards", delay: "0.4s" },
    { value: "24/7", label: "Emergency Support", delay: "0.5s" },
  ];

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>

          <h2 className="section-title">
            Setting New Standards In
            <span className="gradient-text"> Hydraulic Excellence</span>
          </h2>

          <p className="section-subtitle">
            Discover why industry leaders trust Hyses for their most critical
            hydraulic and engineering needs.
          </p>
        </div>

        <div className="why-choose-content">
          <div className="content-left">
            <div className="image-grid">
              <div className="main-image-wrapper">
                <img
                  src={WhyChooseUsImage}
                  alt="Hydraulic engineering expert at work"
                  className="main-image"
                  loading="lazy"
                />

                <div className="experience-badge">
                  <span className="years">20+</span>
                  <span className="text">Years of Excellence</span>
                </div>
              </div>

              <div className="image-stack">
                <div className="stack-item">
                  <img
                    src={HydraulicMaintenanceImg}
                    alt="Hydraulic system maintenance"
                    loading="lazy"
                  />
                </div>

                <div className="stack-item">
                  <img
                    src={IndustrialEquipmentImg}
                    alt="Industrial hydraulic equipment"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="stats-wrapper">
              {stats.map((stat, index) => (
                <div
                  className="stat-item"
                  key={index}
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="cta-wrapper">
              <button className="cta-button" onClick={handleLearnMore}>
                Learn More About Us
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="content-right">
            <div className="features-grid">
              {features.map((feature) => (
                <div
                  className="feature-card"
                  key={feature.id}
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="feature-icon">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="feature-icon-svg"
                    />
                  </div>

                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;