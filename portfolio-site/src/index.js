import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizOne from './Components/quizzes/QuizOne';
import GreatestFilmsBlog from './Components/blogs/js/GreatestFilmsBlog';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quiz-one" element={<QuizOne />} />
      <Route path="/blog/25-greatest-films" element={<GreatestFilmsBlog />} />
    </Routes>
  </BrowserRouter>
);

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
}
