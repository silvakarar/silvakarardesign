import React, { useState, useEffect } from 'react';
import Profile from '../../assets/myAvatar.png';
import { CgShapeTriangle } from 'react-icons/cg';
import { CgShapeZigzag } from 'react-icons/cg';
import { CgShapeRhombus } from 'react-icons/cg';
import {CgShapeCircle } from 'react-icons/cg';
import './Header.style.css';

const Header = props => {
  const [text, setText] = useState('');
  const [fullText, setFullText] = useState('Silva');
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 200);
    }
  }, [index]);



  return (
  
    <div class=" Header-section" id="header">
      <div class="row ">
        <div class="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="textDiv">
            <img src={Profile} alt="profile" className="profile-img" />
            <h1>
              Hi, I'm <span> {text}</span>
            </h1>
            <p>A Front-end Developer and Designer</p>
          </div>
          <div className="boxes">
          <div className="box">
            <CgShapeTriangle />
          </div>
          <div className="box">
            <CgShapeCircle/>
          </div>
          <div className="box">
            <CgShapeZigzag />
          </div>
          <div className="box">
            <gShapeCircle />
          </div>
          <div className="box">
            <CgShapeTriangle />
          </div>
          <div className="box">
            <CgShapeZigzag />
          </div>
          <div className="box">
            <CgShapeZigzag />
          </div>
          <div className="box">
            <CgShapeRhombus />
          </div>
  </div>
  
        </div>
      </div>
    </div>
  );
};

export default Header;
