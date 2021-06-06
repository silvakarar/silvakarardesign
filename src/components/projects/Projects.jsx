import React from 'react';
import { IoGameControllerOutline } from 'react-icons/io5';
import { BiMap } from 'react-icons/bi';
import { FaStoreAlt } from 'react-icons/fa';
import { AiOutlineForm } from 'react-icons/ai';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { GiFilmProjector } from 'react-icons/gi';


import './Projects.style.css';

const Projects = props => {
  return (
    <section className="projects__section ">
      <h2>My Work</h2>
      <hr />
      <div className="row">
        <div className="col col-sm m-1">
          <div className="project-cards ">
            <div className="face face1">
              <div className="content">
                <h2>Ninja Wars</h2>
                <p>Online turn based board game build with JavaScript.</p>
                <a href="#" target="_blank" >Project link</a>
                <a href="https://github.com/silvakarar/turn-based-online-board-game" target="_blank" >Github link</a>
              </div>
            </div>
            <div className="face face2">
              <h2>
                <IoGameControllerOutline />
              </h2>
            </div>
          </div>
        </div>
        <div className="col col-sm m-1">
          <div className="project-cards ">
            <div className="face face1">
              <div className="content">
                <h2>Restaurant review</h2>
                <p>
                  Restaurant Review site with Google Maps API. Build with React
                </p>
                <a href="#" target="_blank" >Project link</a>
                <a href="#" target="_blank" >Github link</a>
              </div>
            </div>
            <div className="face face2">
              <h2>
                <BiMap />
              </h2>
            </div>
          </div>
        </div>
        <div className="col col-sm m-1">
          <div className="project-cards ">
            <div className="face face1">
              <div className="content">
                <h2>EarthFinn Store</h2>
                <p>React project with firebase firestore storage</p>
                <a href="#" target="_blank" >Project link</a>
                <a href="#"target="_blank" >Github link</a>
              </div>
            </div>
            <div className="face face2">
              <h2>
                <FaStoreAlt />
              </h2>
            </div>
          </div>
        </div>
        <div className="col col-sm m-1">
          <div className="project-cards ">
            <div className="face face1">
              <div className="content">
                <h2>Glass Form</h2>
                <p>Glassmorphim React Form with Google authentication.</p>
                <a href="https://glassform.netlify.app/" target="_blank" >Project link</a>
                <a href="https://github.com/silvakarar/react-glassmorphism-form-with-firebase"target="_blank" >Github link</a>
              </div>
            </div>
            <div className="face face2">
              <h2>
                <AiOutlineForm />
              </h2>
            </div>
          </div>
        </div>
        <div className="col col-sm m-1">
          <div className="project-cards ">
            <div className="face face1">
              <div className="content">
                <h2>Film Festival</h2>
                <p> Boston outdoor Film Festival</p>
                <a href="https://watchitoutsideeventsco.netlify.app/"target="_blank" >Project link</a>
                <a href="https://github.com/silvakarar/bootstrap-film-festival-project"target="_blank" >Github link</a>
              </div>
            </div>
            <div className="face face2">
              <h2>
                <GiFilmProjector />
              </h2>
            </div>
          </div>
        </div>
        <div className="col col-sm m-1">
          <div className="project-cards ">
            <div className="face face1">
              <div className="content">
                <h2>Classic Quotegenerator</h2>
                <p>JavaScript quote generator</p>
                <a href="https://quotegeneratorforyou.netlify.app/"target="_blank" >Project link</a>
                <a href="https://github.com/silvakarar/javaScript-quote-generator "target="_blank" >Github link</a>
              </div>
            </div>
            <div className="face face2">
              <h2>
                <BsFillChatQuoteFill />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
