import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">
          <h3 className="footer-name">Ankit Mourya</h3>
          <p className="footer-tagline">
            Full Stack Web Developer
          </p>
        </div>

        {/* Right */}
        <div className="footer-socials">
          <a href="https://github.com/Mouryankit" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/ankit-mourya-7a3185291" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:mourya.ankit1612@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://leetcode.com/u/Mouryankit/" target="_blank" rel="noreferrer">
            <SiLeetcode />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Ankit Mourya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
