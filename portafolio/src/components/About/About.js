import React, { useState, useEffect } from "react";
import { Fieldset } from 'primereact/fieldset';
import Icon from '@mdi/react';
import { mdiLanguageJava, mdiLanguageJavascript, mdiLanguagePython, mdiLanguageC, mdiLanguageCpp, mdiLanguageKotlin } from '@mdi/js';
import { mdiLanguageHtml5, mdiLanguageCss3, mdiReact, mdiAngular, mdiVuejs, mdiBootstrap } from '@mdi/js';
import { mdiNodejs } from '@mdi/js';
import { mdiGit, mdiDocker, mdiAws, mdiFirebase } from '@mdi/js';
import Mongo from '../../assets/mongodb.svg';
import Postgresql from '../../assets/postgresql.svg';
import Expressjs from '../../assets/expressjs.svg';
import SebasSol from '../../assets/SebasSol.JPEG';
import './About.css';

function About() {
    const [iconSize, setIconSize] = useState(1.5);
    const [iconSizeImage, setIconSizeImage] = useState(30);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setIconSize(1);
                setIconSizeImage(24);
            } else {
                setIconSize(1.5);
                setIconSizeImage(30);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

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
                                <div className="Icon-tec-info">
                                    <Icon path={mdiLanguageJava} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiLanguageJavascript} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiLanguagePython} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiLanguageC} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiLanguageCpp} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiLanguageKotlin} size={iconSize} color="black" className="Icon-tec-info" />
                                </div>
                            </Fieldset>
                            <Fieldset legend="Front-End" className="customFieldset">
                                <div className="Icon-tec-info">
                                    <Icon path={mdiLanguageHtml5} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiLanguageCss3} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiReact} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiAngular} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiVuejs} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiBootstrap} size={iconSize} color="black" className="Icon-tec-info" />
                                </div>
                            </Fieldset>
                            <Fieldset legend="DataBase" className="customFieldset">
                                <div className="Icon-tec-info">
                                    <img src={Mongo} alt="Mongo" className="Icon-tec-info" width={iconSizeImage} />
                                    <img src={Postgresql} alt="Postgresql" className="Icon-tec-info" width={iconSizeImage} />
                                </div>
                            </Fieldset>
                            <Fieldset legend="Back-End" className="customFieldset">
                                <div className="Icon-tec-info">
                                    <Icon path={mdiNodejs} size={iconSize} color="black" className="Icon-tec-info" />
                                    <img src={Expressjs} alt="Expressjs" className="Icon-tec-info" width={iconSizeImage} />
                                </div>
                            </Fieldset>
                            <Fieldset legend="Tools" className="customFieldset">
                                <div className="Icon-tec-info">
                                    <Icon path={mdiGit} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiDocker} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiAws} size={iconSize} color="black" className="Icon-tec-info" />
                                    <Icon path={mdiFirebase} size={iconSize} color="black" className="Icon-tec-info" />
                                </div>
                            </Fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
