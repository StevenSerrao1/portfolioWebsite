import React from 'react';
import Header from './Components/js/Header';
import Footer from './Components/js/Footer';
import About from './Components/js/About';
import Projects from './Components/js/Projects';
import Insights from './Components/js/Insights';
import Skills from './Components/js/Skills';
import Extras from './Components/js/Extras';
import Contact from './Components/js/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main> 
        <About /> 
        <Projects />
        <Insights />
        <Extras />
        <Skills />  
        <Contact />  
      </main>
      <Footer />
    </div>
  );
}

export default App;



