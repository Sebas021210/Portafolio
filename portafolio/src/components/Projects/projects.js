import React from "react";
import ProjectsGrid from "../ProjectsGrid/projectsGrid";
import Nasa from "../../assets/Nasa.png";
import DisneyClone from "../../assets/Disney+Clone.png";
import WhastApp from "../../assets/WhatsApp.png";
import Portfolio from "../../assets/Portfolio.png";
import ImageCSS from "../../assets/ImageCSS.png";
import './projects.css';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Nasa Space App",
            description: "This project was developed as part of a hackathon organized by NASA, where we were provided with official resources and space-related data. My team worked on designing and developing an innovative solution to address one of the challenges posed by the organization. We created a functional application to analyze and visualize the challenge's information.",
            tech: "React, Node.js, NASA API",
            github: "https://github.com/Jskenpo/imagine-our-connected-earth",
            demo: "https://imagine-our-connected-earth.web.app/",
            img: Nasa,
            reverse: false,
        },
        {
            id: 2,
            title: "Disney+ Clone",
            description: "This project is a clone of the Disney+ platform that replicates its design, including some of its movies, series, and content organized by categories, as well as the original page's animations. During development, I focused my efforts on creating a responsive interface capable of adapting to different screen sizes.",
            tech: "React, Webapck, AWS",
            github: "https://github.com/Sebas021210/Proyecto1-STW",
            demo: "https://proyecto1-stw-8c95b.web.app/",
            img: DisneyClone,
            reverse: true,
        },
        {
            id: 3,
            title: "Portfolio",
            description: "This is my previous portfolio, designed to showcase my skills, projects, and professional experience in a clear and effective way. In this project, I combined modern technologies like React and Webpack to create a smooth and user-friendly experience. The design was carefully crafted to be responsive, ensuring proper visualization across various devices.",
            tech: "React, Webpack, AWS",
            github: "https://github.com/Sebas021210/ProyectoFinal-STW",
            demo: "https://portafolio-stw-8ca0c.web.app/",
            img: Portfolio,
            reverse: true,
        },
        {
            id: 4,
            title: "Whatsapp Clone",
            description: "This project is a WhatsApp clone that uses the XMPP protocol for real-time messaging. It includes individual chats, sending and receiving messages, contact management, and an interface inspired by the official app. This experience helped me explore the fundamentals of real-time communication and learn more about implementing network protocols.",
            tech: "React, Webpack, XMPP, Firebase",
            github: "https://github.com/Sebas021210/Proyecto1-Redes",
            demo: "https://github.com/Sebas021210/Proyecto1-Redes",
            img: WhastApp,
            reverse: false,
        },
        {
            id: 5,
            title: "Image CSS",
            description: "This project involved recreating an illustration using only CSS, without any external images. It was a technical challenge that allowed me to experiment with advanced CSS properties. Moreover, this project provided an excellent opportunity to refine my design skills, exploring how styles can be manipulated to achieve complex and striking visual results.",
            tech: "HTML, CSS",
            github: "https://github.com/Sebas021210/LabCSS",
            demo: "https://github.com/Sebas021210/LabCSS",
            img: ImageCSS,
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
                        <ProjectsGrid 
                            key={project.id} 
                            reverse={index % 2 !== 0} 
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            github={project.github}
                            demo={project.demo}
                            img={project.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
