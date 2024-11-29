import React from "react";
import ProjectsGrid from "../ProjectsGrid/projectsGrid";
import './projects.css';

function Projects() {
    return (
        <div className="projects">
            <div className="projects-content">
                <div className="projects-title">
                    <h1>Projects</h1>
                </div>
                <div className="projects-description">
                    <ProjectsGrid />
                    <ProjectsGrid />
                    <ProjectsGrid />
                </div>
            </div>
        </div>
    );
}

export default Projects;
