import React from "react";
import './experience.css';

function Experience() {
    return (
        <div className="experience">
            <div className="experience-title">
                <h1>Experience</h1>
            </div>
            <div className="experience-content">
                <div className="experience-item">
                    <h2>Web Developer</h2>
                    <h3>Freelancer</h3>
                    <h4>2021 - Present</h4>
                    <p>Developing web applications using React.js, Node.js, Express.js, and MongoDB.</p>
                </div>
                <div className="experience-item">
                    <h2>Software Developer</h2>
                    <h3>Freelancer</h3>
                    <h4>2021 - Present</h4>
                    <p>Developing desktop applications using Java and Python.</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
