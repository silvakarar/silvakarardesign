import React from 'react';
import { RiCss3Line } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaBootstrap } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';

import './About.style.css';
import TechStackIcons from '../techStackIcons/TechStackIcons';

const About = props => {
  return (
    <div className=" about-me-section">
      <div className="row ">
        <div className="col col-xs-12 col-sm-12 col md-6 col-xl-6 px-0 .">
          <figure className="quote ">
            <blockquote>
              <p>
                Developer and UI Designer based in Orange County California.
                Specializing in
                <span> HTML, CSS, JavaScript, React , UI | UX</span>.
              </p>
            </blockquote>
          </figure>
        </div>
        <div className="col col-xs-12 col-sm-12 col md-6 col-xl-6 px-0">
          <TechStackIcons />
        </div>
      </div>
    </div>
  );
};

export default About;
