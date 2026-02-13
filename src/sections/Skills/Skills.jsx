
import "./Skills.css";

import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLock,
} from "react-icons/fa";
import { SiExpress, SiLeetcode, SiMongodb, } from "react-icons/si";

const Skills = () => {

  const skills = [
    {
      icon: SiLeetcode,
      title: "C++",
      text: "Solving DSA problems using C++",
    },
    {
      icon: FaHtml5,
      title: "HTML5",
      text: "Semantic and accessible markup",
    },
    {
      icon: FaCss3Alt,
      title: "CSS3",
      text: "Responsive layouts & animations",
    },
    {
      icon: FaJsSquare,
      title: "JavaScript",
      text: "ES6+, async logic, DOM handling",
    },
    {
      icon: FaReact,
      title: "React",
      text: "Component-based UI development",
    },
    {
      icon: FaNodeJs,
      title: "Node.js",
      text: "Backend APIs & server logic",
    },
    {
      icon: SiExpress,
      title: "Express.js",
      text: "RESTful backend services",
    },
    {
      icon: SiMongodb,
      title: "MongoDB",
      text: "NoSQL database management",
    },
    {
      icon: FaGitAlt,
      title: "Git/GitHub",
      text: "Version control & collaboration",
    },
    {
      icon: FaLock,
      title: "Authentication & Authorization",
      text: "Passport.js",
    },
    {
      icon: FaCode,
      title: "other languages",
      text: "Python, Java, SQL",
    }
  ];

  return (
    <div className="skills-container" id="skills">

      <h2 className="skills-heading">
        <FaCode className="section-icon" /> &nbsp;
        My <span>Skills . .</span>
      </h2>

      <p className="skills-description">
        Technologies and tools I use to build modern, scalable
        web applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div className="skill-card" key={index}>
              <IconComponent className="skill-icon" />
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-text">{skill.text}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Skills;
