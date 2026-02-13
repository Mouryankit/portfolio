

import "./ProjectItem.css";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      {/* Media */}
      <div className="project-media">
        <img className="project-image" src={project.image} alt={project.title}></img>
      </div>

      {/* Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-text">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((item, index) => (
            <span key={index} className="tech-badge">
              {item}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank">GitHub</a>
          <a href={project.live} target="_blank">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
