import React from "react";
import SebasSol from '../../assets/SebasSol.JPEG';
import './projectsGrid.css';

function ProjectsGrid() {
    return (
        <div className="projects-grid">
            <div className="projects-grid-img">
                <img src={SebasSol} alt="SebasSol" />
            </div>
            <div className="projects-grid-content">
                <h1>Project</h1>
                <div className="projects-grid-description">
                    <p>Description</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectsGrid;
