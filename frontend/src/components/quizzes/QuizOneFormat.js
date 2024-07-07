// src/components/QuizOneFormat.js
import React, { useState, useEffect } from 'react';
import './Quiz.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },

  {
    questionText: 'Who invented the lightbulb?',
    answerOptions: [
      { answerText: 'Philip Seymour Hoffman', isCorrect: false },
      { answerText: 'Albert Einstein', isCorrect: false },
      { answerText: 'Bright Alman', isCorrect: false },
      { answerText: 'Thomas Edison', isCorrect: true },
    ],
  },

  {
    questionText: 'The Roman numeral MM is represented by which Arabic number?',
    answerOptions: [
      { answerText: '2000', isCorrect: true },
      { answerText: '1000', isCorrect: false },
      { answerText: '770', isCorrect: false },
      { answerText: '950', isCorrect: false },
    ],
  },

  {
    questionText: 'Who was the first woman to go to space?',
    answerOptions: [
      { answerText: 'Mae Jemison', isCorrect: false },
      { answerText: 'Valentina Tereshkova', isCorrect: true },
      { answerText: 'Eileen Collins', isCorrect: false },
      { answerText: 'Paris Hilton', isCorrect: false },
    ],
  },

  {
    questionText: 'What is the name of the currency used in Vietnam?',
    answerOptions: [
      { answerText: 'Dollar', isCorrect: false },
      { answerText: 'Bhat', isCorrect: false },
      { answerText: 'Dong', isCorrect: true },
      { answerText: 'Lira', isCorrect: false },
    ],
  },

  {
    questionText: 'Over 90% of blood plasma is water. True or false?',
    answerOptions: [
      { answerText: 'True', isCorrect: true },
      { answerText: 'False', isCorrect: false },
    ],
  },

  {
    questionText: 'What is the national animal of Germany?',
    answerOptions: [
      { answerText: 'Boreal Owl', isCorrect: false },
      { answerText: 'Red Fox', isCorrect: false },
      { answerText: 'Carrion Crow', isCorrect: false },
      { answerText: 'Golden Eagle', isCorrect: true },
    ],
  },

  {
    questionText: 'Who wrote the play \'Hamlet\'?',
    answerOptions: [
      { answerText: 'William Shakespeare', isCorrect: true },
      { answerText: 'Charles Dickens', isCorrect: false },
      { answerText: 'George Orwell', isCorrect: false },
      { answerText: 'Jane Austen', isCorrect: false },
    ],
  },

  {
    questionText: 'Which country hosted the 2016 Summer Olympics?',
    answerOptions: [
      { answerText: 'China', isCorrect: false },
      { answerText: 'France', isCorrect: false },
      { answerText: 'Brazil', isCorrect: true },
      { answerText: 'Russia', isCorrect: false },
    ],
  },

  {
    questionText: 'What is the smallest country in the world by land area?',
    answerOptions: [
      { answerText: 'Vatican City', isCorrect: true },
      { answerText: 'Monaco', isCorrect: false },
      { answerText: 'San Marino', isCorrect: false },
      { answerText: 'Andorra', isCorrect: false },
    ],
  },
  
  {
    questionText: 'Who painted \'The Persistence of Memory\', featuring melting clocks?',
    answerOptions: [
      { answerText: 'Michelangelo', isCorrect: false },
      { answerText: 'Vincent van Gogh', isCorrect: false },
      { answerText: 'Claude Monet', isCorrect: false },
      { answerText: 'Salvador Dali', isCorrect: true },
    ],
  },

  {
    questionText: 'Who was the first female Prime Minister of the United Kingdom?',
    answerOptions: [
      { answerText: 'Indira Ghandi', isCorrect: false },
      { answerText: 'Margaret Thatcher', isCorrect: true },
      { answerText: 'Teresa May', isCorrect: false },
      { answerText: 'Angela Merkel', isCorrect: false },
    ],
  },

  {
    questionText: 'In Greek Mythology, who was the god of the sea?',
    answerOptions: [
      { answerText: 'Zeus', isCorrect: false },
      { answerText: 'Poseidon', isCorrect: true },
      { answerText: 'Hades', isCorrect: false },
      { answerText: 'Apollo', isCorrect: false },
    ],
  },

  {
    questionText: 'Which social media platform was launched first?',
    answerOptions: [
      { answerText: 'Facebook', isCorrect: false },
      { answerText: 'Twitter', isCorrect: false },
      { answerText: 'Instagram', isCorrect: false },
      { answerText: 'LinkedIn', isCorrect: true },
    ],
  },

  {
    questionText: 'Which Marvel movie first introduced the character Black Panther?',
    answerOptions: [
      { answerText: 'Captain America: Civil War', isCorrect: true },
      { answerText: 'Avengers: Infinity War', isCorrect: false },
      { answerText: 'Black Panther', isCorrect: false },
      { answerText: 'Guardians Of The Galaxy Vol.2', isCorrect: false },
    ],
  },

  {
    questionText: 'Which country became the first to legalize same-sex marriage in 2001?',
    answerOptions: [
      { answerText: 'United States of America', isCorrect: false },
      { answerText: 'Iran', isCorrect: false },
      { answerText: 'The Netherlands', isCorrect: true },
      { answerText: 'Australia', isCorrect: false },
    ],
  },

  {
    questionText: 'What was the first video game ever created?',
    answerOptions: [
      { answerText: 'Tetris', isCorrect: false },
      { answerText: 'Pong', isCorrect: true },
      { answerText: 'Pac-Man', isCorrect: false },
      { answerText: 'Guitar Hero', isCorrect: false },
    ],
  },

  {
    questionText: 'Which company was originally called \'Blue Ribbon Sports\'?',
    answerOptions: [
      { answerText: 'Puma', isCorrect: false },
      { answerText: 'Adidas', isCorrect: false },
      { answerText: 'Nike', isCorrect: true },
      { answerText: 'Reebok', isCorrect: false },
    ],
  },

  {
    questionText: 'What major event happened in the United States on July 20, 1969?',
    answerOptions: [
      { answerText: 'Moon Landing by Apollo 11', isCorrect: true },
      { answerText: 'Woodstock Music Festival', isCorrect: false },
      { answerText: 'The Assassination of JFK', isCorrect: false },
      { answerText: 'Launch of The Internet', isCorrect: false },
    ],
  },

  {
    questionText: 'Which British band released the album \'Dark Side of the Moon\' in 1973?',
    answerOptions: [
      { answerText: 'One Direction', isCorrect: false },
      { answerText: 'The Beatles', isCorrect: false },
      { answerText: 'The Rolling Stones', isCorrect: false },
      { answerText: 'Pink Floyd', isCorrect: true },
    ],
  }

];

const QuizOneFormat = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (sectionId) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    useEffect(() => {
        const miniQuizzesHeading = document.getElementById("quiz-heading");

        const handleScroll = () => {
            const miniQuizzesSection = document.getElementById("quiz-heading");
            const offset = -147;
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

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1 id='quiz-heading'>General Knowledge Quiz!</h1>
        <p id='quiz-header-text'>This quiz consists of 20 general knowledge questions aimed at the everyday person.</p>
      </div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizOneFormat;
