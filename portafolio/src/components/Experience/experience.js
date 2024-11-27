import React, { useState, useEffect } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import './experience.css';

function Experience() {
    const [typography, setTypography] = useState("h6");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setTypography("body2");
            } else {
                setTypography("h6");
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="experience">
            <div className="experience-title">
                <h1>Experience</h1>
            </div>
            <div className="experience-content">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            2007 - 2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot >
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant={typography} component="span">
                                High School
                            </Typography>
                            <p>I developed an interest in technology during my high school years, where I gained a strong foundation that sparked my passion for computer science.</p>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            2021 - 2025
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot style={{ backgroundColor: "#598392" }}>
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant={typography} component="span">
                                University
                            </Typography>
                            <p>I am currently studying Computer Science and Information Technology Engineering at Universidad del Valle de Guatemala, where I have developed skills in programming, data analysis, and software development.</p>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            2021 - 2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant={typography} component="span">
                                Teacher at a Computer Academy
                            </Typography>
                            <p>I had the opportunity to teach at a computer academy, where I helped students learn the fundamentals of computing and develop practical projects, strengthening my communication and leadership skills.</p>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            2024 - 2025
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot style={{ backgroundColor: "#598392" }}>
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant={typography} component="span">
                                Teaching Assistant at the University
                            </Typography>
                            <p>I served as a teaching assistant for Basic Programming, where I supported students with their projects and deepened my knowledge of Python. This experience allowed me to contribute to teaching and grow professionally.</p>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            2024 - 2025
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant={typography} component="span">
                                Teaching Assistant at the University
                            </Typography>
                            <p>For the second time, I participated as a teaching assistant at the university, also in Basic Programming. I contributed to the students' learning and the development of academic activities.</p>
                        </TimelineContent>
                    </TimelineItem>

                </Timeline>
            </div>
        </div>
    );
}

export default Experience;
