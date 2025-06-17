import React, { useState, useEffect } from "react";
import axios from "axios";
import { Project } from "./types/interfaces"
import '../../../styles/card-styling.css'
import '../../../Assets/Fonts/LemonMilkRegularFont.css'
import ExpandProject from "./ExpandProject";

const ProjectSection: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        axios
            //.get('http://localhost:5000/api/projects/loadprojects') // Dev Endpoint
            .get('https://official-projects.onrender.com/api/projects/loadprojects') // Production Endpoint
            .then(res => {                   // If the request SUCCEEDS
                setProjects(res.data);                           // Shove data into projects[]
                setLoading(false);                              //  turn off the loading spinner
            })
            .catch(() =>                                  // If the request fails for any reason…
                setLoading(false)                              //  still turn off the spinner (no infinite wait)
            );

    }, [])

    if (loading) {                                        // If we’re still waiting on data…
        return (                                         //  bail out early and show a spinner
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading…</span>
                </div>
            </div>
        );
    }



    return (
        <div className="container-fluid my-4">
            <div className="card-header border border-warning border-3 text-center lm-reg-font py-3 bg-light">
                My Software Development Projects <i className="bi bi-code"></i>
            </div>
            <div className="border border-warning border-3 shadow p-4 bg-light">
                <div className="container py-3">
                    <div className="row g-4">
                        {projects.map(p => (
                            <div key={p.images[0].projectId} className="col-12 col-sm-6 col-md-4">
                                <div className="card h-100 border-warning border-2 hover-lift">
                                    {p.images?.[0] && (
                                        <img
                                            src={p.images[0].imageUrl}
                                            alt={p.images[0].altText}
                                            className="card-img-top"
                                            style={{ height: '160px', objectFit: 'cover' }}
                                        />
                                    )}
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title border-bottom border-3 border-warning lato-p fs-4">{p.title}</h5>
                                        <p className="card-text flex-grow-1 lato-p">{p.shortDescription}</p>
                                        <a
                                            href={p.projectURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-warning mt-auto"
                                        >
                                            View
                                        </a>
                                        <a
                                            className="btn btn-sm btn-warning mt-2"
                                            onClick={() => {
                                                setExpanded(!expanded);
                                                setSelectedProject(p);
                                            }}
                                        >
                                            Expand
                                        </a>
                                    </div>
                                </div>

                            </div>
                        ))}
                        <div>
                            {expanded && selectedProject && (
                                <div className="expanded-project text-wrap" onClick={() => setExpanded(false)}>
                                    <ExpandProject {...selectedProject} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );



}

export default ProjectSection;