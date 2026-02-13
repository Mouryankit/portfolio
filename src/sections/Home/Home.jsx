

import "./Home.css";
import Typed from "../../components/Typed/Typed.jsx";
import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import MyImage from "../../assets/images/Ankit_Image.jpg";

const Home = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Web Developer",
  ];

  return (
    <section id="home" className="home">
      <div className="home-container">

        {/* LEFT SIDE */}
        <div className="home-left">

          <h1 className="home-title">
            <FaHome className="section-icon" /><br></br>
            Hi, I’m <span className="gradient-text">Ankit Mourya</span>
          </h1>

          <p className="typed-text">
            <Typed strings={roles} />
          </p>

          <p className="home-description">
            I design and develop scalable, high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js), with a strong focus on clean architecture, optimized performance, and seamless user experiences.
          </p>

          <p className="availability">
            &#128994; Open to Internship Opportunities
          </p>

          <div className="home-actions">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a href="/src/assets/resume/Ankit_mourya_resume.pdf" className="secondary-btn" download>
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a className="icons" href="https://github.com/Mouryankit"><FaGithub /></a>
            <a className="icons" href="https://www.linkedin.com/in/ankit-mourya-7a3185291"><FaLinkedin /></a>
            <a className="icons" href="https://leetcode.com/u/Mouryankit/"><SiLeetcode /></a>
          </div>

          {/* Tech Stack */}
          <div className="home-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>ExpressJs</span>
            <span>C++</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="home-right">
          <div className="profile-card">
            <div className="profile-image">
              <img src={MyImage} alt="Profile" />
            </div>
            <p className="profile-para">MERN Stack Developer</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
