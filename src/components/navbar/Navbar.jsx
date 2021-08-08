import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/SK-logo-white.png';
import About from '../about/About';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Projects from '../projects/Projects';

import './Navbar.style.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-custom  sticky-top m-0 p-0">
      <a className="navbar-brand  " href="#">
        <img src={Logo} width="50" height="50" alt="logo" />
      </a>
      <nav className="navbar navbar-expand-lg ">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav nav ">
            <li className="nav-item">
              <Link
                onClick={this.handleScroll}
                to="header"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                <a className="nav-item nav-link active text-light" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.handleScroll}
                to="projects"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                <a className="nav-item nav-link text-white  " href="#">
                  Projects
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.handleScroll}
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                <a className="nav-item nav-link text-light" href="#">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.handleScroll}
                to="footer"
                activeClass="active"
                spy={true}
                smooth={true}
              >
                <a className="nav-item nav-link text-light" href="#">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
