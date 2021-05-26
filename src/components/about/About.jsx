import React from 'react';
import image from '../../assets/profile_pic.png';
import Button from '../buttons/Button';

import './About.style.css';

const About = () => {
  return (
    <div class="row About__section">
      <div class="col col-sm About__left">
        <img src={image} alt="" className="profile__pic" />
      </div>
      <div class="col col-sm About__right">
        <h2>Front-End Development</h2>
        <p>
          I focus on building beautiful functional web apps. The Tech stack that
          I use is: HTML, CSS, Sass, Bootstrap, JavaScript and React
        </p>
      </div>
    </div>
  );
};

export default About;
