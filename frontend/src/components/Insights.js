import React, { useState } from 'react';
import './Insights.css';

const Insights = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const blogPosts = [
        {
            title: 'More about my technical journey',
            content: 'Here, I discuss my main motivation for getting into software development, my self-taught development journey, the technologies that I use, and finally, my professional goals moving forward...',
            link: 'https://www.youtube.com',
        },
        {
            title: '25 Greatest Films of All Time',
            content: 'In this (totally objective) list of cinema\'s most profound feats, I look at 25 indispensable silver-screen hits and what makes each of them so excellent.',
            link: './blog/25-greatest-films',
        }
    ];

    const prevPost = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : blogPosts.length - 1));
    };

    const nextPost = () => {
        setCurrentIndex((prevIndex) => (prevIndex < blogPosts.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <section id="blog-home" className="scroll-margin">
            <div className="container">
                <h2>Things that interest me</h2>
                <div className="blog-container">
                    <button className="nav-button left" onClick={prevPost}>←</button>
                    <div className="blog-card">
                        <h3>{blogPosts[currentIndex].title}</h3>
                        <p>{blogPosts[currentIndex].content}</p>
                        <a href={blogPosts[currentIndex].link} target="_blank">Read More</a>
                    </div>
                    <button className="nav-button right" onClick={nextPost}>→</button>
                </div>
            </div>
        </section>
    );
};

export default Insights;
