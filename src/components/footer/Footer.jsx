import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import './Footer.style.css';

const Footer = () => {
  return (
    <div class=" Footer-section " id="footer">
      <div class="row m-0">
        <div class="col col-sm-12 col-md-12 col-lg-12 col-xl-12 Contact">
          <h2>Contact</h2>
          <div className="Social">
            <a
              href="https://www.linkedin.com/in/silva-karar-front-end-developer/"
              className="footer-link"
              target="_blank"
            >
              <AiOutlineLinkedin className="iconStyles2 " />
            </a>
            <a
              href="https://twitter.com/silva_karar"
              className="footer-link"
              target="_blank"
            >
              <IoLogoTwitter className="iconStyles2 " />
            </a>
            <a
              href="mailto:silvarkarar@gmail.com"
              className="footer-link"
              target="_blank"
            >
              <AiOutlineMail className="iconStyles2 " />
            </a>
            <a
              href="https://github.com/silvakarar"
              className="footer-link"
              target="_blank"
            >
              <AiFillGithub className="iconStyles2 " />
            </a>
          </div>
        </div>
      </div>
      <div className="Footer"></div>
    </div>
  );
};

export default Footer;
