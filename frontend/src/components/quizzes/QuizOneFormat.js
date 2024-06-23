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
