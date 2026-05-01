import { useEffect } from "react";
import "../styles/About.css";

function About() {
  useEffect(() => {
    const counter = document.getElementById("experience-count");
    let start = 0;
    const end = 8; // final number

    const duration = 1500;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start++;
      if (counter) {
        counter.textContent = start;
      }

      if (start === end) {
        clearInterval(timer);
        if (counter) {
          counter.textContent = start + "+";
        }
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about" id="about">
      {/* HEADER */}
      <div className="about-header">
        <h1>ABOUT US</h1>
      </div>

      {/* MAIN SECTION */}
      <div className="about-main">
        <div className="about-images">
          <div className="dots"></div>

          <img
            src="/about-main.jpg"
            alt="Hydraulic equipment"
            className="about-img-main"
          />

          <img
            src="/about-small.png"
            alt="Hydraulic pump"
            className="about-img-small"
          />

          <div className="experience-box">
            <span id="experience-count">0</span>
            <p>
              Years of <br /> Experience
            </p>
          </div>
        </div>

        <div className="about-content">
          <h4>About Hyses</h4>
          <h2>Delivering Precision Hydraulic & Engineering Solutions</h2>

          <p>
            Hyses is a trusted provider of hydraulic and engineering solutions,
            delivering reliable services across multiple industries.
          </p>

          <ul>
            <li>Hydraulic Hose & Fittings</li>
            <li>Hydraulic Cylinder Repair</li>
            <li>Hydraulic Specialist Field Services</li>
          </ul>

          <a href="#contact" className="about-btn">
            Contact Us <span>→</span>
          </a>
        </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className="testimonial-section">
        <div className="testimonial-title">
          <h4>Testimonial</h4>
          <h2>
            What Our Clients <br /> Are Saying
          </h2>
        </div>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="client">
              <img src="/client-1.png" alt="Peter James" />
              <h3>Peter James</h3>
            </div>
            <p>
              “Hyses transformed our hydraulic systems completely. Their team
              delivered professional and efficient solutions.”
            </p>
          </div>

          <div className="testimonial-card">
            <div className="client">
              <img src="/client-2.png" alt="Michael Thompson" />
              <h3>Michael Thompson</h3>
            </div>
            <p>
              “Quick diagnosis and expert repairs saved us from major downtime.
              Highly recommended.”
            </p>
          </div>

          <div className="testimonial-card">
            <div className="client">
              <img src="/client-3.png" alt="Craig Ndlovu" />
              <h3>Craig Ndlovu</h3>
            </div>
            <p>
              “Their response time and professionalism are unmatched in the
              industry.”
            </p>
          </div>
        </div>
      </div>

      {/* TEXT BLOCK */}
      <div className="about-text">
        <p>
          Hyses is a leading B-BBEE Level 1 provider of hydraulic and engineering
          solutions across Southern Africa. We deliver reliable, cost-effective
          services to mining, manufacturing, construction, and power industries.
        </p>
        <p>
          Our expertise spans design, installation, repairs, preventative
          maintenance, and 24-hour field support for hydraulic systems.
        </p>
      </div>

      {/* INFO BOXES */}
      <div className="info-boxes">
        <div className="info-box">
          <h3>Our Mission</h3>
          <p>
            To provide efficient and sustainable hydraulic solutions while
            maintaining the highest standards of safety and professionalism.
          </p>
        </div>

        <div className="info-box">
          <h3>Our Vision</h3>
          <p>
            To be a trusted leader in engineering services, recognized for
            excellence and innovation.
          </p>
        </div>

        <div className="info-box">
          <h3>Core Values</h3>
          <p>
            Integrity, Innovation, Quality, and Safety guide everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;