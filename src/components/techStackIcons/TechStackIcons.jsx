import React from 'react'
import { RiCss3Line } from 'react-icons/ri';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaBootstrap } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import './TechStackIcons.css'

const TechStackIcons = (props) => {
    return (
        <div class=" section wrapper">
        <section className="tech-stack ">
          <div className="icon html">
            <div className="tooltip">HTML</div>
            <span>
              <a
                className="tech__link"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
              >
                <AiOutlineHtml5 className="iconStyles item1" />
              </a>
            </span>
          </div>
          <div className=" icon css">
            <div className="tooltip">CSS</div>
            <span>
              <a
                className="tech__link"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <RiCss3Line className="iconStyles item2" />
              </a>
            </span>
          </div>
          <div className=" icon javascript">
            <div className="tooltip">JavaScript</div>
            <span>
              <a
                className="tech__link"
                href="https://www.javascript.com/"
                target="_blank"
              >
                <IoLogoJavascript className="iconStyles item3" />
              </a>
            </span>
          </div>
          <div className=" icon react">
            <div className="tooltip">React</div>
            <span>
              <a
                class="tech__link"
                href="https://reactjs.org/"
                target="_blank"
              >
                <FaReact className="iconStyles item4" />
              </a>
            </span>
          </div>
          <div className="icon mysql">
            <div className="tooltip">MySQL</div>
            <span>
              <a
                className="tech__link"
                href="https://www.mysql.com/"
                target="_blank"
              >
                <SiMysql className="iconStyles item5" />
              </a>
            </span>
          </div>
          <div className="icon figma">
            <div className="tooltip">Figma</div>
            <span>
              <a
                class="tech__link"
                href="https://www.figma.com/"
                target="_blank"
              >
                <FiFigma className="iconStyles item6" />
              </a>
            </span>
          </div>
          <div className=" icon github">
            <div className="tooltip">GitHub</div>
            <span>
              <a
                class="tech__link"
                href="https://github.com/"
                target="_blank"
              >
                <AiFillGithub className="iconStyles item7" />
              </a>
            </span>
          </div>
          <div className="icon bootstrap">
            <div className="tooltip">Bootstrap</div>
            <span>
              <a
                class="tech__link"
                href="https://getbootstrap.com/"
                target="_blank"
              >
                <FaBootstrap className="iconStyles item8" />
              </a>
            </span>
          </div>
          <div className="icon sass">
            <div className="tooltip">Sass</div>
            <span>
              <a
                class="tech__link"
                href="https://sass-lang.com/"
                target="_blank"
              >
                <FaSass className="iconStyles item9" />
              </a>
            </span>
          </div>
        </section>
      </div>
    )
}

export default TechStackIcons
