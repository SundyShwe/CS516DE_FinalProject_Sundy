import React from "react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { prj } from "../data/projects";

function Projects() {
  const [projects] = useState(prj);
  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Most Recent Works</h2>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
            {projects.map((p, i) => (
              <ProjectCard project={p} key={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
