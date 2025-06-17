import React from "react";
import "../../../styles/AboutMeCSS.css";
import "../../../Assets/Fonts/LemonMilkRegularFont.css"

const AboutSection: React.FC = () => {
    return (
        <div className="container-fluid my-4" id="about">
            <div className="border border-3  border-warning">
                {/* Heading */}
                <h2 className="fs-4 bg-light pb-4 text-center lm-reg-font pt-4 mb-0 mt-0">
                    <i className="fs-4 me-4 bi-terminal"></i>   Welcome to my professional full-stack developer portfolio!   <i className="fs-4 ms-4 bi-terminal-fill"></i>
                </h2>
            </div>
            <div className="border border-warning border-3 p-4 bg-custom-1">



                {/* Content */}
                <div className="row align-items-center gx-4">
                    {/* Text Section */}
                    <div className="col-md-8">
                        <p className="lato-p">
                            I’m a <strong>full-stack developer</strong> with a strong focus on <strong>backend engineering</strong> using <strong>ASP.NET Core</strong>, <strong>EF Core</strong>, and <strong>SQL</strong>. I built <strong>SoundBite™</strong>,
                            a music rating app designed with clean, scalable architecture and an emphasis on great user experience, and I’m currently working on a WhatsApp clone to sharpen my skills in real-time messaging and full-stack development.
                            I’m comfortable deploying containerized applications with <strong>Docker</strong> and managing cloud infrastructure on <strong>Azure</strong>, ensuring systems are robust and maintainable. I'm constantly pushing to level up — <strong>always learning</strong> new technologies and sharpening the tools I already use to build better, smarter systems. While I enjoy creating intuitive frontends
                            with <strong>React</strong> and <strong>Blazor</strong>, my core strength lies in backend development — building reliable, high-performance APIs and services in <strong>C#</strong> and <strong>Python</strong> that get the job done.
                            Based in South Africa, I’m open to full-time opportunities in <strong>Cape Town</strong>, <strong>Johannesburg</strong>, or <strong>Pretoria</strong> — remote, hybrid, or on-site. I’m eager to join a team that values
                             <strong> clean code</strong>, <strong>practical problem-solving</strong>, and shipping features that make a difference.
                        </p>
                        <p className="yellow-underline fs-5 lato-p"><strong>Let's Build Something Real.</strong></p>

                    </div>

                    {/* Avatar Section */}
                    <div className="col-md-4 text-center mb-5 ps-0">
                        <img
                            src="https://i.imgur.com/xhAiq5z.png"
                            alt="Steven's Avatar"
                            className="img-fluid rounded-circle border border-3 border-warning"
                            style={{ width: "225px", height: "225px", objectFit: "cover" }}
                        />
                    </div>
                </div>

                <h3 className="fw-bold mt-4 mb-5 yellow-underline text-center lm-reg-font">My Tech Stack</h3>

                <div className="row">
                    <div className="col-md-6 mt-3">
                        <div className="mb-4">
                            <strong className="yellow-underline lato-p">Languages:</strong>
                            <span className="lato-p"> C#, JavaScript/TypeScript, Python</span>
                        </div>
                        <div className="mb-4">
                            <strong className="yellow-underline lato-p">Frameworks:</strong>
                            <span className="lato-p"> ASP.NET Core, React, Django, Blazor</span>
                        </div>
                        <div className="mb-4">
                            <strong className="yellow-underline lato-p">Tools:</strong>
                            <span className="lato-p"> Docker, Git, GitHub, PowerShell, Git Bash</span>
                        </div>
                        <div className="mb-4">
                            <strong className="yellow-underline lato-p">Databases:</strong>
                            <span className="lato-p"> SQL Server, PostgreSQL</span>
                        </div>
                        <div className="mb-4">
                            <strong className="yellow-underline lato-p">Cloud:</strong>
                            <span className="lato-p"> Microsoft Azure, Render</span>
                        </div>
                        <div>
                            <strong className="yellow-underline lato-p">Other:</strong>
                            <span className="lato-p"> Unity3D, REST APIs, Clean Architecture</span>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <small className="text-muted text-decoration-underline">Relative proficiency (self-assessed)</small>
                        <div className="mb-2">
                            <span className="fs-5"><strong className="lato-p">ASP.NET Core (with C#)</strong></span>
                            <div className="progress mt-1" style={{ height: 24 }}>
                                <div className="progress-bar bg-success" style={{ width: "85%", color: "#000", fontWeight: 600 }}>
                                    85%
                                </div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <span className="fs-5"><strong className="lato-p">React (with TypeScript/JavaScript)</strong></span>
                            <div className="progress mt-1" style={{ height: 24 }}>
                                <div className="progress-bar bg-info" style={{ width: "65%", color: "#000", fontWeight: 600 }}>
                                    65%
                                </div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <span className="fs-5"><strong className="lato-p">EF Core (with C#)</strong></span>
                            <div className="progress mt-1" style={{ height: 24 }}>
                                <div className="progress-bar bg-primary" style={{ width: "65%", color: "#000", fontWeight: 600 }}>
                                    65%
                                </div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <span className="fs-5"><strong className="lato-p">SQL/PostgreSQL (with SQL)</strong></span>
                            <div className="progress mt-1" style={{ height: 24 }}>
                                <div className="progress-bar bg-warning" style={{ width: "70%", color: "#000", fontWeight: 600 }}>
                                    70%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;
