import React, { useState, useEffect } from 'react';
import '../css/Extras.css';

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
        <section id="extras" className="scroll-margin">
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

                {/* Downloadables Section */}
                <div className={`extra-section ${activeSection === 'downloadables' ? 'active' : ''}`} id="mini-dw-heading">
                    <h3 onClick={() => toggleSection('downloadables')} id="mini-dw-section">Downloadables</h3>
                    <div className="download-items">
                        <div className="download-item">
                            <h4>Code Example 1</h4>
                            <p>Here is a section dedicated to some code samples from the site you are currently browsing. Take a look!</p>
                            <a href="#">Download</a>
                        </div>
                        <div className="download-item">
                            <h4>Resume</h4>
                            <p>Browse through my resume and determine for yourself if I would be a good fit your company!</p>
                            <a href="#">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    );
}

export default Extras;
