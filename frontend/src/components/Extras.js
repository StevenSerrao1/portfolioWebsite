import React, { useState, useEffect } from 'react';
import './Extras.css';

const Extras = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (sectionId) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    useEffect(() => {
        const miniQuizzesHeading = document.getElementById("mini-quizzes-heading");

        const handleScroll = () => {
            const miniQuizzesSection = document.getElementById("mini-quizzes-section");
            const offset = -105;
            const sectionPosition = miniQuizzesSection.getBoundingClientRect().top + window.pageYOffset + offset;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        };

        miniQuizzesHeading.addEventListener("click", handleScroll);

        // Clean up event listener on component unmount
        return () => {
            miniQuizzesHeading.removeEventListener("click", handleScroll);
        };
    }, []);

    useEffect(() => {
        const miniGamesHeading = document.getElementById("mini-games-heading");

        const handleScroll = () => {
            const miniGamesSection = document.getElementById("mini-games-section");
            const offset = -105;
            const sectionPosition = miniGamesSection.getBoundingClientRect().top + window.pageYOffset + offset;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        };

        miniGamesHeading.addEventListener("click", handleScroll);

        // Clean up event listener on component unmount
        return () => {
            miniGamesHeading.removeEventListener("click", handleScroll);
        };
    }, []);

    useEffect(() => {
        const miniVideosHeading = document.getElementById("mini-videos-heading");

        const handleScroll = () => {
            const miniVideosSection = document.getElementById("mini-videos-section");
            const offset = -105; // Adjust this value as needed to change the final scroll position
            const sectionPosition = miniVideosSection.getBoundingClientRect().top + window.pageYOffset + offset;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        };

        miniVideosHeading.addEventListener("click", handleScroll);

        // Clean up event listener on component unmount
        return () => {
            miniVideosHeading.removeEventListener("click", handleScroll);
        };
    }, []);

    useEffect(() => {
        const miniDWHeading = document.getElementById("mini-dw-heading");

        const handleScroll = () => {
            const miniDWSection = document.getElementById("mini-dw-section");
            const offset = -105;
            const sectionPosition = miniDWSection.getBoundingClientRect().top + window.pageYOffset + offset;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        };

        miniDWHeading.addEventListener("click", handleScroll);

        // Clean up event listener on component unmount
        return () => {
            miniDWHeading.removeEventListener("click", handleScroll);
        };
    }, []);

    return (
        <section id="extras" class="scroll-margin">
            <div className="container">
                <h2>Browse the extras</h2>

                {/* Mini Quizzes Section */}
                <div className={`extra-section ${activeSection === 'quizzes' ? 'active' : ''}`} id="mini-quizzes-section">
                    <h3 onClick={() => toggleSection('quizzes')} id="mini-quizzes-heading">Mini Quizzes</h3>
                    <div className="quiz-items">
                        <div className="quiz-item">
                            <h4>General Knowledge Quiz!</h4>
                            <p>Do you know more than the average person? Test your general knowledge right here and find out!</p>
                            <button><a href="/quiz-one">Start Quiz</a></button>
                        </div>
                        <div className="quiz-item">
                            <h4>Let's Get Technical - Quiz!</h4>
                            <p>Answer technical coding questions related modern programming languages and modern development tools!</p>
                            <button><a href="/quiz-two">Start Quiz</a></button>
                        </div>
                    </div>
                </div>

                {/* Games Section */}
                <div className={`extra-section ${activeSection === 'games' ? 'active' : ''}`} id="mini-games-heading">
                    <h3 onClick={() => toggleSection('games')} id="mini-games-section">Games</h3>
                    <div className="game-items">
                        <div className="game-item">
                            <h4>Tetris</h4>
                            <p>Play Tetris directly on the site.</p>
                            <button>Play Now</button>
                        </div>
                        <div className="game-item">
                            <h4>Game Title 2</h4>
                            <p>Description of Game 2.</p>
                            <button>Play Now</button>
                        </div>
                    </div>
                </div>

                {/* Videos Section */}
                <div className={`extra-section ${activeSection === 'videos' ? 'active' : ''}`} id="mini-videos-heading">
                    <h3 onClick={() => toggleSection('videos')} id="mini-videos-section">Videos</h3>
                    <div className="video-items">
                        <div className="video-item">
                            <h4>Video Title 1</h4>
                            <p>Description of Video 1.</p>
                            <a href="#">Watch Now</a>
                        </div>
                        <div className="video-item">
                            <h4>Video Title 2</h4>
                            <p>Description of Video 2.</p>
                            <a href="#">Watch Now</a>
                        </div>
                    </div>
                </div>

                {/* Downloadables Section */}
                <div className={`extra-section ${activeSection === 'downloadables' ? 'active' : ''}`} id="mini-dw-heading">
                    <h3 onClick={() => toggleSection('downloadables')} id="mini-dw-section">Downloadables</h3>
                    <div className="download-items">
                        <div className="download-item">
                            <h4>Code Example 1</h4>
                            <a href="#">Download</a>
                        </div>
                        <div className="download-item">
                            <h4>Resume</h4>
                            <a href="#">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    );
}

export default Extras;
