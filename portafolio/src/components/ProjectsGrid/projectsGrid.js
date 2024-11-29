import React from "react";
import img1 from "../../assets/img1.png"
import Icon from '@mdi/react';
import { mdiGithub, mdiOpenInNew } from '@mdi/js';
import './projectsGrid.css';

function ProjectsGrid({ reverse }) {
    return (
        <div className={`projects-grid ${reverse ? "reverse" : ""}`}>
            <div className="projects-grid-img">
                <img src={img1} alt="img1" />
            </div>
            <div className="projects-grid-content">
                <h1>Nasa Space App</h1>
                <div className="projects-grid-description">
                    <p>Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.</p>
                </div>
                <div className="projects-grid-tech">
                    <p style={{ color: "#000" }} >React, Node.js, Express, Spotify API</p>
                </div>
                <div className="projects-grid-buttons">
                    <a href="https://github.com/Sebas021210" target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiGithub} size={1.5} color="black" />
                    </a>
                    <a href="https://github.com/Sebas021210" target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiOpenInNew} size={1.5} color="black" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectsGrid;
