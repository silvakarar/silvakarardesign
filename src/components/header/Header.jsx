import React, { useState, useEffect } from 'react';
import Button from '../buttons/Button';
import { AiOutlineArrowDown } from 'react-icons/ai';
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
    <div class="Header__section">
      <div class="row">
        <div class="col col-md-12">
          <div className="textDiv">
            <h1>
              Hi, I'm <span> {text}</span>
            </h1>
            <p>A Front-End-Developer</p>
            <p>
              <a className="btn btn-m" href="#" role="button">
               Let's work together
              </a>
            </p>
          </div>
          <p className="vertical__text">
            Scroll down <AiOutlineArrowDown style={{ color: 'white', fontSize: '1rem', margin: '0'}}/>
          </p>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
      
        </div>

        {/* <section className='col col-md-6 background-animation'>
  
        </section> */}

        {/* <div class="col">
      <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
      <div class="circle4"></div>
      </div> */}
      </div>
    </div>
  );
};

export default Header;
