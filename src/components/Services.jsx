import React from "react";
import "../styles/Services.css";
import {
  Wrench,
  Settings,
  Zap,
  Cog,
  Droplet,
  Link,
  Battery,
  PanelTop,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: <Settings size={40} />,
    title: "Hydraulic Cylinders",
    text: "Manufacture, repair and refurbishment of hydraulic cylinders for reliable performance.",
  },
  {
    icon: <Wrench size={40} />,
    title: "Valve Banks & Mono Blocks",
    text: "Repair, setting and testing for smooth and dependable hydraulic operation.",
  },
  {
    icon: <Zap size={40} />,
    title: "Hydraulic Power Packs",
    text: "Assembling and factory acceptance testing for strong, efficient power systems.",
  },
  {
    icon: <Cog size={40} />,
    title: "Electrohydraulic Actuators",
    text: "Assembling, repair and testing for accurate and controlled movement.",
  },
  {
    icon: <Droplet size={40} />,
    title: "Hydraulic Pumps",
    text: "Professional pump repairs and testing to restore power and extend service life.",
  },
  {
    icon: <Link size={40} />,
    title: "Hoses & Fittings",
    text: "Hydraulic hose solutions and precision crimping for safe, leak-free systems.",
  },
  {
    icon: <Battery size={40} />,
    title: "Accumulators",
    text: "Repair, assembling and precharging for optimal hydraulic system performance.",
  },
  {
    icon: <PanelTop size={40} />,
    title: "Control Panels",
    text: "Power pack supply and custom control panel building for industrial systems.",
  },
  {
    icon: <Cpu size={40} />,
    title: "PLC Solutions",
    text: "Designing, implementing and supporting integrated PLC networks.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-bg-shape"></div>

      <div className="services-container">
        <div className="services-header">
          <p className="services-label">What We Do</p>
          <h2>Services</h2>
          <p>
            End-to-end hydraulic and engineering solutions built for performance,
            reliability and efficiency.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <span></span>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;