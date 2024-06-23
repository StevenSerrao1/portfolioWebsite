import React from 'react';
import './Projects.css';

const Projects = () => (
    <section id="projects" class="scroll-margin">
        <div className="container">
            <h2>Projects that I work on</h2>
                <div className="project-list">
                    <div className="project-item"  id='game-project'>
                        <h3>Unity3D Game</h3>
                        <p>Clash Royale Knock-off? 3D Stealth Game? Scrolling Action RPG? Will have to be indie-sized and somewhat basic. Aim for fun factor. Function over Form. Include many video bites and screenshots of project in case recruiter does not want to download the game.</p>
                    </div>
                    <div className="project-item" id="webapp-project">
                        <h3>Geno [G-know] Learning Platform</h3>
                        <p>Interactive and highly-functional online learning platform. Totally free and multi-categorical. ASP.NET Core backend with MVC and Entity Framework Core. Frontend with Angular, styled with Bootstrap. Microsoft ecosystem for development support.</p>
                    </div>
                    <div className="project-item" id="webextras-project">
                        <h3>Machine Learning Project</h3>
                        <p>Real-time Face Detection:

Create a web-based demo using OpenCV.js for real-time face detection in webcam feeds. This project demonstrates computer vision techniques and can be deployed with minimal server resources.</p>
                    </div>
                </div>
        </div>
    </section>
);

export default Projects;
