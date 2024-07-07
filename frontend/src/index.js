import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import QuizOne from './components/quizzes/QuizOne';
import QuizTwo from './components/quizzes/QuizTwo';
import GreatestFilmsBlog from './components/blogs/GreatestFilmsBlog.js';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/quiz-one" component={QuizOne} /> // Define the route for the new page
      <Route path="/quiz-two" component={QuizTwo} /> // Define the route for the new page
      <Route path="/blog/25-greatest-films" component={GreatestFilmsBlog} /> // Define the route for the new page
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
