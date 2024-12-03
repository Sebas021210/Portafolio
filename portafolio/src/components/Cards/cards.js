import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Icon from '@mdi/react';
import { mdiFolder, mdiGithub, mdiOpenInNew } from '@mdi/js';

function Cards(props) {
    return (
        <div className="cards">
            <div className="cards-content">
                <Card 
                    sx={{ 
                        maxWidth: 345, 
                        minHeight: 350, 
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                        '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                        }
                    }}
                >
                    <CardHeader
                        avatar={
                            <Icon path={mdiFolder} size={1.5} />
                        }
                        action={
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                {props.github && (
                                    <a href={props.github} target="_blank" rel="noopener noreferrer">
                                        <Icon path={mdiGithub} size={1.5} color="black" />
                                    </a>
                                )}
                                {props.demo && (
                                    <a href={props.demo} target="_blank" rel="noopener noreferrer">
                                        <Icon path={mdiOpenInNew} size={1.5} color="black" />
                                    </a>
                                )}
                            </div>
                        }
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {props.description}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Cards;
