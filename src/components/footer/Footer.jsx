import React from 'react';
import Button from '../buttons/Button';
import Form from '../forms/Form';
import './Footer.style.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import ContactFormPage from '../../pages/contact-form-page/contact-form-page';

//React router handle onclick event
const Footer = () => {

  let history = useHistory();
  const redirect = () => {
    history.push('/contact-form-page')
  }
  return (
    <div class=" Footer__section">
      <hr/>
      <div class="row ">
        <div class="col-sm Contact">
          <h2>Contact</h2>
          <div className="Social">
            <a
              href="https://www.linkedin.com/in/silva-karar-front-end-developer/"
              className="footer-link"
              target="_blank"
            >
              <AiFillLinkedin className="iconStyles " />
            </a>
            <a
              href="https://twitter.com/silva_karar"
              className="footer-link"
              target="_blank"
            >
              <AiFillTwitterSquare className="iconStyles " />
            </a>
            <a
              href="mailto:silvarkarar@gmail.com"
              className="footer-link"
              target="_blank"
            >
              <AiOutlineMail className="iconStyles " />
            </a>
          </div>
        </div>
      </div>
      <div className="Footer">
        <button target={"_blank"}  className="Footer__button" onClick={redirect}  >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Footer;
