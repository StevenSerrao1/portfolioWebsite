// src/App.js
import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Insights from './components/Insights';
import Extras from './components/Extras';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Insights />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
