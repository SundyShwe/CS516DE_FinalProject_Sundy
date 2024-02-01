import React from "react";
function ProjectCard({ project }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src={"img/portfolio/" + project.image} className="img-fluid" alt="" />
          <div className="portfolio-links">
            <div className="portfolio-tech">
              {project.name}
              {project.tech && <p>{project.tech}</p>}
            </div>
            <div className="d-flex">
              {project.codeLink && (
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <i className="bx bx-code"></i> Code
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <i className="bx bx-globe"></i> Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
