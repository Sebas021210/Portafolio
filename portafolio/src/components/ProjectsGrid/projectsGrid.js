import React from "react";
import Icon from '@mdi/react';
import { mdiGithub, mdiOpenInNew } from '@mdi/js';
import './projectsGrid.css';

function ProjectsGrid({ reverse, title, description, tech, github, demo, img }) {
    return (
        <div className={`projects-grid ${reverse ? "reverse" : ""}`}>
            <div className="projects-grid-img">
                <img src={img} alt="img1" />
            </div>
            <div className="projects-grid-content">
                <h1>{title}</h1>
                <div className="projects-grid-description">
                    <p>{description}</p>
                </div>
                <div className="projects-grid-tech">
                    <p style={{ color: "#000" }} >{tech}</p>
                </div>
                <div className="projects-grid-buttons">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiGithub} size={1.5} color="black" />
                    </a>
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiOpenInNew} size={1.5} color="black" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectsGrid;
