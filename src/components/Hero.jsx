import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-shape">
        <div className="hero-content">
          <p className="hero-label">Hyses</p>

          <h1>
            Experience The
            <br />
            Difference in
            <br />
            Hydraulics
          </h1>

          <div className="hero-buttons">
            <a href="#about" className="hero-btn hero-btn-filled">
              Read More
            </a>

            <a href="#contact" className="hero-btn hero-btn-outline">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;