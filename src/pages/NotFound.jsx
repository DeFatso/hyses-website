// src/pages/NotFound.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, Wrench, AlertCircle, Compass } from "lucide-react";
import "../styles/NotFound.css";

const NotFound = () => {
  const [rotation, setRotation] = useState(0);
  const [hydraulicJokes] = useState([
    "Looks like this page lost pressure...",
    "Don't worry, we're not under pressure about this!",
    "Even the best hydraulics hit a leak sometimes.",
    "This page seems to be feeling a little deflated.",
    "Our engineers are on it! Well... almost.",
    "404: Hydraulic fluid not found in this pipeline.",
    "Looks like this page went on a break without telling anyone.",
    "Even our best fittings couldn't connect you to this page.",
    "This page has been disconnected - probably a loose hose.",
    "We've applied pressure, but this page won't budge."
  ]);

  const [currentJoke, setCurrentJoke] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Random rotation for the hydraulic arm
    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
    }, 50);

    // Random joke on mount
    const randomJoke = hydraulicJokes[Math.floor(Math.random() * hydraulicJokes.length)];
    setCurrentJoke(randomJoke);

    return () => clearInterval(interval);
  }, [hydraulicJokes]);

  const refreshJoke = () => {
    const newJoke = hydraulicJokes[Math.floor(Math.random() * hydraulicJokes.length)];
    setCurrentJoke(newJoke);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="not-found-container">
      {/* Animated background elements */}
      <div className="error-bg">
        <div className="error-bg-circle circle-1"></div>
        <div className="error-bg-circle circle-2"></div>
        <div className="error-bg-circle circle-3"></div>
        <div className="error-bg-circle circle-4"></div>
      </div>

      {/* Floating particles */}
      <div className="error-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="error-particle" style={{
            '--delay': `${i * 0.5}s`,
            '--duration': `${3 + Math.random() * 4}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`
          }}></div>
        ))}
      </div>

      <div className="error-content">
        {/* 404 Animated Number */}
        <div className="error-number-wrapper">
          <div className="error-number">
            <span className="digit">4</span>
            <div className="hydraulic-icon">
              <Wrench size={60} className="wrench-icon" style={{ transform: `rotate(${rotation}deg)` }} />
            </div>
            <span className="digit">4</span>
          </div>
        </div>

        {/* Witty Message */}
        <div className="error-message">
          <AlertCircle size={40} className="alert-icon" />
          <h1>Pressure Drop Detected!</h1>
          <div className="error-joke">
            <p>{currentJoke}</p>
            <button className="joke-refresh" onClick={refreshJoke} title="Another joke?">
              🔄
            </button>
          </div>
          {showTooltip && <span className="joke-tooltip">Fresh joke delivered! 🎉</span>}
        </div>

        {/* Helpful Suggestions */}
        <div className="error-suggestions">
          <h3>Maybe you were looking for:</h3>
          <div className="suggestions-grid">
            <Link to="/" className="suggestion-card">
              <Home size={20} />
              <span>Home Page</span>
            </Link>
            <Link to="/services" className="suggestion-card">
              <Wrench size={20} />
              <span>Our Services</span>
            </Link>
            <Link to="/about" className="suggestion-card">
              <Compass size={20} />
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="suggestion-card">
              <Search size={20} />
              <span>Contact Support</span>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="error-actions">
          <Link to="/" className="error-btn primary">
            <Home size={18} />
            Back to Home
          </Link>
          <button className="error-btn secondary" onClick={() => window.history.back()}>
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Hand-drawn style arrow pointing to buttons */}
        <div className="error-arrow">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path d="M2 20 L100 20 M95 15 L100 20 L95 25" stroke="#f85f1c" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <text x="100" y="15" fill="#f85f1c" fontSize="10" fontWeight="bold">↓ Click here ↓</text>
          </svg>
        </div>
      </div>

      {/* Footer note */}
      <div className="error-footer">
        <p>P.S. Even the best engineers hit a 404 sometimes. We'll get this fixed! 🔧</p>
      </div>
    </div>
  );
};

export default NotFound;