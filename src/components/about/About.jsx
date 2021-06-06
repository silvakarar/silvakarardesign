import React from 'react';
import image from '../../assets/profile_pic.png';
import Button from '../buttons/Button';
import Icons from '../Icons/Icons';
import { RiCss3Line } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';

import './About.style.css';

const About = () => {
  return (
    <div className="About__section">
      <div class="container">
  <div class="row">
    <div class="col-sm">
    <h3>ABOUT ME</h3>
          <p>
            I am a Developer / Designer based in Orange County California. I
            specialize in HTML, CSS, JavaScript, and React.
            <br />
            <br />
            I'm passionate about creating beautiful, functional websites that
            are SEO-friendly. I focus on solving problems, through design and
            development.
            <br />
            <br />I love CSS animations and making sure websites have an
            interesting and cohesive UI. 
          </p>
    </div>
    <div class="col-sm">
            <a href="" > <FaReact  className='iconStyles'/> </a>
            <a href=""> <RiCss3Line className='iconStyles'/> </a>
            <a href=""> <AiOutlineHtml5 className='iconStyles'/> </a>
            <a href=""> <IoLogoJavascript className='iconStyles'/> </a>
            <a href=""> <SiMysql className='iconStyles'/> </a>
            <a href=""> <FaNode className='iconStyles'/> </a>
    </div>
 
  </div>
</div>
</div>
  );
};

export default About;
