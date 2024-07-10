// src/components/QuizOne.js
import React from 'react';
import Header from '../js/Header';
import Footer from '../js/Footer';
import QuizOneFormat from './QuizOneFormat';
import '../../styles/App.css';

const QuizOne = () => {
  return (
    <div className="App">
      <Header />
      <QuizOneFormat />
      <Footer />
    </div>
  );
};

export default QuizOne;
