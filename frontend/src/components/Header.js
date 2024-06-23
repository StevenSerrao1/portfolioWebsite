import React, { useState, useEffect } from 'react';
import './Header.css';
import './DarkModeButton.css';

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header>
      <div className="container">
        <button onClick={toggleTheme} id='darkmodebutton'>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <div className="logo">
          <h1>
            <u><a href="/">STEVEN SERRAO</a></u>
          </h1>
        </div>
        <nav>
          <ul>
            <li><a href="/#projects">Creations</a></li>
            <li><a href="/#blog-home">Insights</a></li>
            <li><a href="/#extras">Tidbits</a></li>
            <li><a href="/#contact">Connect</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
