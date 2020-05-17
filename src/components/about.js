import React from 'react';
import alex from '../img/alex.jpg';
import { aboutimagetext } from './text';

const page1 = (props) => {
  return (
    <div className="split-page">
      <img src={alex} alt="baker tower" />
      <div>
        <h3>Some facts about me</h3>
        <p>{aboutimagetext}</p>
      </div>
    </div>
  );
};

const page2 = (props) => {
  return (
    <div className="photo-layout-page">
      <div>
        t
      </div>
    </div>
  );
};

const About = (props) => {
  return (
    <div id="pages">
      <div className="main-page" id="about-main">
        <h1>Who I am.</h1>
      </div>
      {page1()}
      {page2()}
    </div>
  );
};

export default About;
