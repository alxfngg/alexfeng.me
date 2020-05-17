import React from 'react';
import { NavLink } from 'react-router-dom';
import baker from '../img/baker.jpg';
import beach from '../img/beach.jpg';
import hawaii from '../img/hawaii.jpg';
import silhouette from '../img/silhouette.jpg';
import { landingimagetext, aboutsub } from './text';

const page1 = (props) => {
  return (
    <div className="split-page">
      <img src={baker} alt="baker tower" />
      <div>
        <h3>{'I\'m a student at Dartmouth College'}</h3>
        <p>{landingimagetext}</p>
      </div>
    </div>
  );
};

const page2 = (props) => {
  return (
    <div className="sections-page">
      <h2>A look at some of my developing skills. Still a work in progress!</h2>
      <div>
        <div className="skill">
          <h4>Front-end</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Back-end</h4>
          <ul>
            <li>MySQL</li>
            <li>Java</li>
            <li>Bash</li>
            <li>Express.js</li>
            <li>C</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Still Learning</h4>
          <ul>
            <li>Matlab</li>
            <li>ReactNative</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const page3 = (props) => {
  return (
    <div className="images-page">
      <h2>Adventure is core to who I am.</h2>
      <p>{aboutsub}</p>
      <div>
        <img src={silhouette} alt="silhouette" />
        <img src={hawaii} alt="hawaii mountain" id="middleimg" />
        <img src={beach} alt="beach" />
      </div>
      <NavLink to="/about"><button type="button" className="inverse-button">Learn more about me</button></NavLink>
    </div>
  );
};

const Landing = (props) => {
  return (
    <div id="pages">
      <div className="main-page" id="landing-main">
        <h1>{'Hi, I\'m Alex.'}</h1>
        <NavLink to="/contact" className="navright"><button type="button">Connect with me</button></NavLink>
      </div>
      {page1()}
      {page2()}
      {page3()}
    </div>
  );
};

export default Landing;
