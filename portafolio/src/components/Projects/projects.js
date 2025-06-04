import React, { useState } from "react";
import ProjectsGrid from "../ProjectsGrid/projectsGrid";
import Cards from "../Cards/cards";
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
            description: "This project was developed as part of a NASA hackathon using official resources and space-related data. My team worked on designing and developing an innovative solution to address one of the challenges posed by the organization. We created a functional application, earning us the distinction of being the First Global Winner representing Guatemala.",
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
    ];

    const OtherProjects = [
        {
            id: 6,
            title: "AsyStorage",
            description: "An API developed with FastAPI that allows users to upload files, encrypt them using RSA or ECC, digitally sign them, and store metadata in MongoDB Atlas. Files can later be securely downloaded along with their respective public keys. This project focuses on secure file handling by integrating modern cryptographic techniques with a service-oriented architecture.",
            github: "https://github.com/Sebas021210/Lab4-CifradosAsimetricos-API",
            demo: "",
        },
        {
            id: 7,
            title: "Secure Chat Platform",
            description: "A robust API built with FastAPI that enables highly secure messaging between users. It supports user registration and authentication using OAuth and MFA. Messages are encrypted using AES in combination with ECC, digitally signed with ECDSA for authenticity, and verified using SHA-256 or SHA-3 hashing to ensure data integrity. A comprehensive solution focused on cybersecurity and privacy in digital communication.",
            github: "https://github.com/Sebas021210/Proyecto2-Cifrados",
            demo: ""
        },
        {
            id: 8,
            title: "Cosita Mia",
            description: "A web application designed to simplify the online shopping experience. Users can explore a product catalog, add desired items to a shopping cart, and manage their purchases with ease. The user-friendly interface enables seamless tracking of selected products, promoting an efficient and enjoyable user experience.",
            github: "https://github.com/Jskenpo/Cositamia",
            demo: "https://cositamia-f3bb9.web.app/",
        },
        {
            id: 9,
            title: "Taste Trail",
            description: "This web application aims to enhance the dining experience by allowing users to make reservations at a wide variety of restaurants. Additionally, it provides an intuitive interface that simplifies the process of selecting a restaurant and the desired time, making event or meal planning more practical and accessible.",
            github: "https://github.com/Sebas021210/DB2-Proyecto1",
            demo: null,
        },
        {
            id: 10,
            title: "Watch Wise",
            description: "A web tool designed for movie and series enthusiasts. Watch Wise offers personalized recommendations based on the series and movies the user has added to their list. It also includes advanced filters to search for content by streaming platform, genre, or even favorite actors. It’s an ideal solution for discovering relevant content tailored to personal tastes.",
            github: "https://github.com/Sebas021210/DB2-Proyecto2",
            demo: null,
        },
        {
            id: 11,
            title: "Compiler",
            description: "A technical project consisting of a compiler developed in Python using the ANTLR library and the Compiscript language. It includes a graphical interface where users can write their code, and upon compiling, it performs lexical, syntactic, and semantic analysis. The compiler generates machine code ready for execution, providing a practical and comprehensive way to understand the processes behind a compiler.",
            github: "https://github.com/Jskenpo/COMPIS_PROYECTO1",
            demo: null,
        },
    ];

    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <div className="projects">
            <div className="projects-content">
                <div className="projects-title">
                    <h1>Projects</h1>
                </div>
                <div className="projects-description">
                    {visibleProjects.map((project, index) => (
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
                <div className="projects-button">
                    <button onClick={handleToggle}>
                        {showAll ? "View Less" : "View More"}
                    </button>
                </div>
            </div>
            <div className="more-projects">
                <div className="more-projects-title">
                    <h1>More Projects</h1>
                </div>
                <div className="more-projects-cards">
                    {OtherProjects.map((project) => (
                        <Cards
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            github={project.github}
                            demo={project.demo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
