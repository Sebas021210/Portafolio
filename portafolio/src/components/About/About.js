import React, { useState, useEffect } from "react";
import { Fieldset } from 'primereact/fieldset';
import Tooltip from '@mui/material/Tooltip';
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
                                Hi, I'm Sebastián, a 21-year-old student of Computer Science and Information Technology Engineering at Universidad del Valle de Guatemala. I am passionate about software development and always looking for new challenges to learn and grow as a professional. I have experience in web development and desktop applications. My goal is to gain experience and contribute my knowledge and skills to the development and success of the projects I participate in, while continuing to learn and grow as a professional.
                            </p>
                        </div>
                    </div>
                    <div className="about-description-tec">
                        <h2>Technologies</h2>
                        <div className="about-description-tec-info">
                            <Fieldset legend="Languages" className="customFieldset">
                                <div className="Icon-tec-info">
                                    <Tooltip title="Java" placement="bottom" >
                                        <Icon path={mdiLanguageJava} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="JavaScript" placement="bottom">
                                        <Icon path={mdiLanguageJavascript} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="Python" placement="bottom">
                                        <Icon path={mdiLanguagePython} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="C" placement="bottom">
                                        <Icon path={mdiLanguageC} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="C++" placement="bottom">
                                        <Icon path={mdiLanguageCpp} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="Kotlin" placement="bottom">
                                        <Icon path={mdiLanguageKotlin} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                </div>
                            </Fieldset>
                            <Fieldset legend="Front-End" className="customFieldset">
                                <div className="Icon-tec-info">
                                    <Tooltip title="HTML" placement="bottom">
                                        <Icon path={mdiLanguageHtml5} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="CSS" placement="bottom">
                                        <Icon path={mdiLanguageCss3} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="React" placement="bottom">
                                        <Icon path={mdiReact} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="Angular" placement="bottom">
                                        <Icon path={mdiAngular} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="Vue" placement="bottom">
                                        <Icon path={mdiVuejs} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="Bootstrap" placement="bottom">
                                        <Icon path={mdiBootstrap} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                </div>
                            </Fieldset>
                            <Fieldset legend="DataBase" className="customFieldset">
                                <div className="Icon-tec-info">
                                    <Tooltip title="MongoDB" placement="bottom">
                                        <img src={Mongo} alt="Mongo" className="Icon-tec-info" width={iconSizeImage} />
                                    </Tooltip>
                                    <Tooltip title="PostgreSQL" placement="bottom">
                                        <img src={Postgresql} alt="Postgresql" className="Icon-tec-info" width={iconSizeImage} />
                                    </Tooltip>
                                </div>
                            </Fieldset>
                            <Fieldset legend="Back-End" className="customFieldset">
                                <div className="Icon-tec-info">
                                    <Tooltip title="Node.js" placement="bottom">
                                        <Icon path={mdiNodejs} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="Express.js" placement="bottom">
                                        <img src={Expressjs} alt="Expressjs" className="Icon-tec-info" width={iconSizeImage} />
                                    </Tooltip>
                                </div>
                            </Fieldset>
                            <Fieldset legend="Tools" className="customFieldset">
                                <div className="Icon-tec-info">
                                    <Tooltip title="Git" placement="bottom">
                                        <Icon path={mdiGit} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="Docker" placement="bottom">
                                        <Icon path={mdiDocker} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="AWS" placement="bottom">
                                        <Icon path={mdiAws} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
                                    <Tooltip title="Firebase" placement="bottom">
                                        <Icon path={mdiFirebase} size={iconSize} color="black" className="Icon-tec-info" />
                                    </Tooltip>
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
