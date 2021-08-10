import React from 'react';
import { IoGameControllerOutline } from 'react-icons/io5';
import { BiMap } from 'react-icons/bi';
import { FaStoreAlt } from 'react-icons/fa';
import { AiOutlineForm } from 'react-icons/ai';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { GiFilmProjector } from 'react-icons/gi';
import { GiArtificialIntelligence } from 'react-icons/gi';
import Project from '../project/Project';

import './Projects.style.css';

const Projects = props => {
  return (
    <section className="projects-section " >
      <div className="projects-title">
        <h2>My Projects</h2>
        <hr />
      </div>
      <div className="">
        <div className="row">
          <div className="col col-sm m-1">
            <div className="project-cards ">
              <div className="face face1">
                <div className="project-content">
                  <Project
                    Heading="Ninja Wars"
                    Description="Online turn based board game build with JavaScript"
                  ></Project>
                  <a
                    href="https://github.com/silvakarar/javascript--turn-based-board-game"
                    target="_blank"
                  >
                    GitHub Link
                  </a>
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
                <div className="project-content">
                  <Project
                    Heading="Restaurant App"
                    Description="    Restaurant Review site with Google Maps API. Build with React"
                  ></Project>
                  {/* <a href="#" target="_blank">
                  Project link
                </a> */}
                  <a
                    href="https://github.com/silvakarar/react-restaurant-review-app"
                    target="_blank"
                  >
                    Github link
                  </a>
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
                <div className="project-content">
                  <Project
                    Heading="Online Store"
                    Description="React project with firebase firestore storage"
                  ></Project>
                  {/* <a href="#" target="_blank">
                  Project link
                </a> */}
                  <a
                    href="https://github.com/silvakarar/react-earthfinn-clothing-store"
                    target="_blank"
                  >
                    Github link
                  </a>
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
                <div className="project-content">
                  <Project
                    Heading="Glass Form"
                    Description="Glassmorphims React Form with Google authentication."
                  ></Project>
                  <a href="https://glassform.netlify.app/" target="_blank">
                    Project link
                  </a>
                  <a
                    href="https://github.com/silvakarar/react-glassmorphism-form-with-firebase"
                    target="_blank"
                  >
                    Github link
                  </a>
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
                <div className="project-content">
                  <Project
                    Heading="AI Face Recognition App"
                    Description="Face regocnition app with AI face dectection API."
                  ></Project>
                  <a
                    href="https://silvakarar.github.io/face_recognition_app/"
                    target="_blank"
                  >
                    Project link
                  </a>
                  <a
                    href="https://github.com/silvakarar/face_recognition_app"
                    target="_blank"
                  >
                    Github link
                  </a>
                </div>
              </div>
              <div className="face face2">
                <h2>
                  <GiArtificialIntelligence />
                </h2>
              </div>
            </div>
          </div>
          <div className="col col-sm m-1">
            <div className="project-cards ">
              <div className="face face1">
                <div className="project-content">
                  <Project
                    Heading="Film Festival"
                    Description="Boston outdoor Film Festival"
                  ></Project>
                  <a
                    href="https://watchitoutsidefilmfestival.netlify.app/"
                    target="_blank"
                  >
                    Project link
                  </a>
                  <a
                    href="https://github.com/silvakarar/bootstrap-film-festival-project"
                    target="_blank"
                  >
                    Github link
                  </a>
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
                <div className="project-content">
                  <Project
                    Heading="Classic Quotegenerator"
                    Description="JavaScript quote generator"
                  ></Project>
                  <a
                    href="https://quotegeneratorforyou.netlify.app/"
                    target="_blank"
                  >
                    Project link
                  </a>
                  <a
                    href="https://github.com/silvakarar/javaScript-quote-generator "
                    target="_blank"
                  >
                    Github link
                  </a>
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
      </div>
    </section>
  );
};

export default Projects;
