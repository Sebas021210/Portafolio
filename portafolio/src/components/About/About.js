import React from "react";
import { Fieldset } from 'primereact/fieldset';
import SebasSol from '../../assets/SebasSol.JPEG';
import './About.css';

function About() {
    return (
        <div className="about">
            <div className="about-content">
                <div className="about-title">
                    <h1>About Me</h1>
                </div>
                <div className="about-description">
                    <div className="about-description-info">
                        <div className="about-description-info-image">
                            <img src={SebasSol} alt="SebasSol" className="profile-image" />
                        </div>
                        <div className="about-description-info-text">
                            <p>
                                Hi! I'm Sebastián Solorzano, a student of Computer Science at the National University of Costa Rica. I am passionate about software development and I am always looking for new challenges to learn and grow as a professional. I have experience in web development and desktop application development. I am currently learning about cloud computing and cybersecurity.
                            </p>
                        </div>
                    </div>
                    <div className="about-description-tec">
                        <h2>Technologies</h2>
                        <div className="about-description-tec-info">
                            <Fieldset legend="Languages" className="customFieldset">
                                <p className="m-0">
                                    Java, Python, C, C++, JavaScript
                                </p>
                            </Fieldset>
                            <Fieldset legend="Front-End" className="customFieldset">
                                <p className="m-0">
                                    HTML, CSS, React, Angular, Vue, Bootstrap
                                </p>
                            </Fieldset>
                            <Fieldset legend="DataBase" className="customFieldset">
                                <p className="m-0">
                                    PostgreSQL, MongoDB, Neo4j
                                </p>
                            </Fieldset>
                            <Fieldset legend="Back-End" className="customFieldset">
                                <p className="m-0">
                                    Node.js, Express
                                </p>
                            </Fieldset>
                            <Fieldset legend="Tools" className="customFieldset">
                                <p className="m-0">
                                    Git, Docker, AWS, Firebase
                                </p>
                            </Fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
