import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/App.css';

const QuizTwoFormat = () => {
    return (
      <div>
        <h1>Welcome to the SECOND Quiz!</h1>
        <p>This is the content of the new page.</p>
      </div>
    );
  };


const QuizTwo = () => {
    return (
            <div classname="App">
                <Header />
                <QuizTwoFormat />
                <Footer />
            </div>
        );
    }

export default QuizTwo;