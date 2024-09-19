import React from "react";
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import './home.css';

function Home() {
    return (
        <div className="home">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="content">
                <div className="name">
                    <h1>Sebastián Solorzano</h1>
                </div>
                <div className="description">
                    <h2>Student of Computer Science</h2>
                </div>
                <div className="contacts">
                    <a href="https://github.com/Sebas021210" target="_blank" rel="noopener noreferrer"><Icon path={mdiGithub} size={2} color="white" /></a>
                    <a href="https://www.linkedin.com/in/sebasti%C3%A1n-jos%C3%A9-solorzano-p%C3%A9rez-7544b9205/" target="_blank" rel="noopener noreferrer"><Icon path={mdiLinkedin} size={2} color="white" /></a>
                    <a href="https://www.instagram.com/sebass.sp/" target="_blank" rel="noopener noreferrer"><Icon path={mdiInstagram} size={2} color="white" /></a>
                </div>
            </div>
        </div>
    );
}

export default Home;
