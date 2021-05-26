import React from 'react';
import Button from '../buttons/Button';
import Form from '../forms/Form';
import './Footer.style.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {


  const iconStyles = {
    fontSize: '50px'
  }
  return (
    <div class=" Footer__section">
      <div class="row ">
        <div class="col-sm Contact">
          <h2>Contact</h2>
          <div className="Social">
            <AiFillLinkedin className='icon'
            />

            <AiFillTwitterSquare className='icon' />

            <AiOutlineMail className='icon'/>
          </div>
        </div>
      </div>
      <div className='Footer'>
        <button className='Footer__button'>Let's work together</button> 
      </div>
 
    </div>
  );
};

export default Footer;
