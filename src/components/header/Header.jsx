import React, { useState, useEffect } from 'react';
import Button from '../buttons/Button';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
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

  let history = useHistory();
  const redirect = () => {
    history.push('/contact-form-page');
  };

  return (
    <div class="Header__section">
      <div class="row m-0">
        <div class="col col-md-12">
          <div className="textDiv">
            <h1>
              Hi, I'm <span> {text}</span>
            </h1>
            <p>A Web Developer</p>
            <button className="header__button" onClick={redirect}>
              Let's work together
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
