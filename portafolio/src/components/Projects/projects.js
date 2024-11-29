import React from "react";
import ProjectsGrid from "../ProjectsGrid/projectsGrid";
import './projects.css';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Nasa Space App",
            description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.",
            tech: "React, Node.js, Express, Spotify API",
            github: "",
            demo: "",
            img: "",
            reverse: false,
        },
        {
            id: 2,
            title: "Nasa Space App",
            description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.",
            tech: "React, Node.js, Express, Spotify API",
            github: "",
            demo: "",
            img: "",
            reverse: true,
        },
        {
            id: 3,
            title: "Nasa Space App",
            description: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.",
            tech: "React, Node.js, Express, Spotify API",
            github: "",
            demo: "",
            img: "",
            reverse: false,
        },
    ]

    return (
        <div className="projects">
            <div className="projects-content">
                <div className="projects-title">
                    <h1>Projects</h1>
                </div>
                <div className="projects-description">
                    {projects.map((project, index) => (
                        <ProjectsGrid key={project.id} reverse={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
