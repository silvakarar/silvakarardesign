import React from 'react';
import { RiCss3Line } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import './Icons.css';

const Icons = () => {
  return (
    <div>
      <ul className="icons">
        <li>
          <AiOutlineHtml5  className="dev-icon"/>
        </li>
        <li>
          <RiCss3Line className="dev-icon"/>
        </li>
        <li>
          <IoLogoJavascript className="dev-icon"/>
              </li>
              <li>
          <FaReact className="dev-icon"/>
              </li>
              <li>
          <FaNode className="dev-icon"/>
        </li>
        <li>
          <SiMysql className="dev-icon"/>
        </li>
      </ul>
    </div>
  );
};

export default Icons;
