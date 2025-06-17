import React from "react";
import "../../Assets/Fonts/LemonMilkBoldFont.css";

const HeaderComponent: React.FC = () => {
    return (
        <header className="container-fluid px-3 py-2 border-bottom border-warning border-3 bg-white">
            <nav className="d-flex flex-wrap justify-content-between align-items-center">
                {/* Left: Name */}
                <div className="lm-bold-font fs-5">
                    STEvEN serrao
                </div>

                {/* Center: Social Links */}
                <div className="d-flex gap-3 justify-content-center align-items-center">
                    <a
                        className="nav-link"
                        href="https://github.com/StevenSerrao1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-github fs-4"></i>
                    </a>
                    <a
                        className="nav-link"
                        href="https://www.instagram.com/steven_serrao"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-instagram fs-4"></i>
                    </a>
                    <a
                        className="nav-link"
                        href="https://www.linkedin.com/in/steven-serrao-0729841b1/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-linkedin fs-4"></i>
                    </a>
                    <a
                        className="text-success"
                        href="https://wa.me/27673199177?text=Hi%20Steven%2C%20I%27m%20interested%20in%20your%20work!"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{marginRight:"117px"}}
                    >
                        <i className="bi bi-whatsapp fs-4"></i>
                    </a>
                </div>

                {/* Right: CV Button */}
                <div>
                    <a
                        href="https://StevenSerrao1.github.io/Official-Projects/assets/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="resume.pdf"
                        className="btn btn-dark lm-bold-font cv-button"
                    >
                        My CV
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;
