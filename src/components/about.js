import React from 'react';
import { NavLink } from 'react-router-dom';
import alex from '../img/alex.jpg';
import brooklyn from '../img/gallery/brooklyn.jpg';
import hands from '../img/gallery/hands.jpg';
import nyc from '../img/gallery/nyc.jpg';
import orangeflowers from '../img/gallery/orange-flowers.jpg';
import painting from '../img/gallery/painting.jpg';
import paris from '../img/gallery/paris.jpg';
import perk from '../img/gallery/perk.jpg';
import plant from '../img/gallery/plant.jpg';
import portrait from '../img/gallery/portrait.jpg';
import snow from '../img/gallery/snow.jpg';
import subway from '../img/gallery/subway.jpg';
import yellowflowers from '../img/gallery/yellow-flowers.jpg';
import { aboutimagetext } from './text';

const page1 = (props) => {
  return (
    <div className="split-page" id="about-split-page">
      <img src={alex} alt="baker tower" />
      <div>
        <h3>Fun facts about me</h3>
        <p>{aboutimagetext}</p>
      </div>
    </div>
  );
};

const page2 = (props) => {
  return (
    <div className="photo-layout-page">
      <h2>{'Photos I\'ve taken along the way'}</h2>
      <div className="wrapper">
        <div className="row">
          <div className="column">
            <img src={yellowflowers} alt="yellow flowers" />
            <img src={portrait} alt="portrait" />
          </div>
          <div className="column">
            <img src={snow} alt="snow on mountain" />
            <img src={perk} alt="central perk" />
          </div>
          <div className="column">
            <img src={subway} alt="subway" />
            <img src={hands} alt="hands" />
          </div>
          <div className="column">
            <img src={plant} alt="green plant" />
            <img src={nyc} alt="new york city street" />
          </div>
          <div className="column">
            <img src={brooklyn} alt="brooklyn bridge" />
            <img src={orangeflowers} alt="orange flowers" />
          </div>
          <div className="column">
            <img src={painting} alt="painting" />
            <img src={paris} alt="paris" />
          </div>
        </div>
      </div>
      <NavLink to="/"><button type="button" className="inverse-button">Go back to home</button></NavLink>
    </div>
  );
};

const About = (props) => {
  return (
    <div id="pages">
      <div className="main-page" id="about-main">
        <h1>Who I am.</h1>
        <h4>Some of my interests, hobbies, and background.</h4>
      </div>
      {page1()}
      {page2()}
    </div>
  );
};

export default About;
