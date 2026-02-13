



import "./About.css";
import { FaUser } from "react-icons/fa";


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <h2 className="about-heading">
          <FaUser className="section-icon" />&nbsp;
          About <span>Me . .</span>
        </h2>

        <p className="about-description">
          I specialize in MongoDB, Express.js, React.js, and Node.js, focusing on clean architecture,
          efficient backend systems, and dynamic frontend experiences. I continuously
          improve my skills through real-world projects and hands-on practice.
        </p>

        <div className="about-highlights">
          <div className="about-card">
            <h3 className="about-card-title">Clean Code</h3>
            <p className="about-card-text">
              I focus on writing readable, maintainable and scalable code.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Modern Stack</h3>
            <p className="about-card-text">
              React, Node.js, Express, MongoDB and modern CSS.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Problem Solver</h3>
            <p className="about-card-text">
              I enjoy breaking complex problems into simple solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
