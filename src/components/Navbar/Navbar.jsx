import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">
          <p className="portfolio-tag"> <a href="#home">Portfolio</a></p>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a href="https://github.com/Mouryankit" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/ankit-mourya-7a3185291">LinkedIn</a></li>
        </ul>
        <div className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
      </nav>
    </header>
  );
};
export default Navbar;
// className={`menu-btn ${menuOpen ? "open" : ""}`} 

