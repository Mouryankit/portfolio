
import "./Projects.css";
import ProjectItem from "./ProjectItem";
import SpotifyImage from "../../assets/images/spotify_clone.png";
import WanderlustReactImage from "../../assets/images/WanderlustReact.png";
import WandurlustImage from "../../assets/images/Wandurlust.png";
import PortfolioImage from "../../assets/images/portfolio.png";
import MinProjectImage from "../../assets/images/iwt_miniproject.PNG";
import { FaLaptopCode } from "react-icons/fa";


const Projects = () => {
  const projects = [
    {
      index:"1",
      title: "Wanderlust-React",
      description:
        "This travel booking app brings your next adventure to life with a clean MERN stack build. It lets you browse stays, upload property photos, book trips, and manage profiles. Core features include secure login, search and filters, live availability, dynamic pricing, and reviews—all wrapped in a smooth, responsive UI for a simple travel experience. This is an updated version of the Wanderlust project, now built with React for a more dynamic and interactive user experience.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "JWT","vanilla-css", "sweetalert"],
      image: WanderlustReactImage,
      github: "https://github.com/Mouryankit/wanderlust",
      live: "https://wanderlust-36j4.onrender.com",
    },
    {
      index:"4",
      title: "Portfolio",
      description:
        "This project is a personal portfolio website built using React and styled with CSS. The portfolio showcases my skills, projects, and experience in a clean and modern design. It features sections for home, about, skills, projects, and education, providing a comprehensive overview of my professional background. The website is fully responsive, ensuring an optimal viewing experience across different devices.",
      tech: ["React", "CSS", "Vite"],
      image: PortfolioImage,
      github: "https://github.com/Mouryankit/portfolio",
      live: "https://mouryankit.github.io/portfolio/",
    },
    {
      index:"2",
      title: "Spotify Clone",
      description:
        "This project is a frontend clone of Spotify built with HTML and CSS. It focuses on practicing web page structure, layout design, and responsive UI. The interface mimics Spotify’s look with a sidebar, playlist section, song cards, and music player area. It’s a simple yet polished project for learning how to recreate a modern music app experience using only frontend code.",
      tech: ["HTML", "CSS"],
      image: SpotifyImage,
      github: "https://github.com/Mouryankit/Spotify_Clone",
      live: "https://mouryankit.github.io/Spotify_Clone/",
    },
    {
      index:"3",
      title: "Wanderlust",
      description:
        "Wanderlust is a full-stack travel web application built using MongoDB, Node.js, and Express, following the MVC architecture. The platform allows users to explore and discover various travel destinations with a clean and responsive UI designed using Bootstrap. Authentication and session management were implemented using Passport.js, ensuring secure user login and authorization",
      tech: ["Node.js", "Express", "MongoDB", "Bootstrap", "Passport.js", "MVC", "express-sessions"],
      image: WandurlustImage,
      github: "https://github.com/Mouryankit/wanderlust-airbnb",
      live: "https://wanderlust-6g0k.onrender.com/",
    },
    
    // {
    //   index:"5",
    //   title: "Iwt-miniproject",
    //   description:
    //     "This mini project was developed to strengthen my understanding of core web technologies including HTML, CSS, JavaScript, PHP and basic database connectivity with mysql. The primary objective was to build a responsive and user-friendly website that showcases various mini projects created during classroom learning, featuring multiple functional web applications.",
    //   tech: ["Html", "CSS", "JavaScript", "PHP", "MySQL"],
    //   image: MinProjectImage,
    //   github: "https://github.com/Mouryankit/Iwt-mini-project",
    //   live: "http://ankitmourya.page.gd",
    // },
    
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-heading section-heading">
          <FaLaptopCode className="section-icon" />&nbsp;
          My <span>Projects . .</span>
        </h2>

        <p className="projects-description">
          Some of the projects I’ve worked on, focusing on clean UI,
          performance, and real-world use cases.
        </p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


