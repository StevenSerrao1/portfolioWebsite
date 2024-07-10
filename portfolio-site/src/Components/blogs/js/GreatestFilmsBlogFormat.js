import React, { useState } from 'react';
import '../css/BlogStyle.css';
import Films from './films'; // Correct import

const FilmPost = ({ film }) => {
    if (!film) {
        return <div>No film data available</div>;
    }

    return (
        <div className="film-post-1">
            <h2 className="film-title-1">{film.rank} - {film.title}</h2>
            <p className="film-release-date-1"><strong>Release Date:</strong> {film.releaseDate}</p>
            <p className="film-director-1"><strong>Director:</strong> {film.director}</p>
            
            <p className="film-description-1"><strong className="boldify">What it's about:</strong> {film.description}</p>
            <p className="film-why-1"><strong className="boldify">Why it's great:</strong> {film.why}</p>
        </div>
    );
};

const GreatestFilmsBlogFormat = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevFilm = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : Films.length - 1));
    };

    const nextFilm = () => {
        setCurrentIndex((prevIndex) => (prevIndex < Films.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <article className="blog-post-1">
    <h2>25 of the Greatest Films of All Time - and why they are great</h2>
    <p className="post-date-1">June 29, 2024</p>
    <div className="post-content-1">
        <FilmPost film={Films[currentIndex]} />
        <div className="film-navigation-1">
            <button className="nav-button-1 left" onClick={prevFilm}>
                Prev
            </button>
            <button className="nav-button-1 right" onClick={nextFilm}>
                Next
            </button>
        </div>
    </div>
    <a href={Films[currentIndex].link} target='_blank' rel="noreferrer" >
        <img src={Films[currentIndex].image} alt={`${Films[currentIndex].title} Poster`} className="film-image-1" />
    </a>
    
</article>

    );
};

export default GreatestFilmsBlogFormat;
