import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import ProgressBar from 'react-scroll-progress-bar';
import Landing from './landing';
import Contact from './contact';
import About from './about';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li>
          <NavLink to="/about" className="navright">About</NavLink>
          <NavLink to="/contact" className="navright">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <div>
      <ProgressBar bgcolor="#A8DADC" />
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
