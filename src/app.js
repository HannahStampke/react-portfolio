import Education from "./components/education";
import Projects from "./components/project";
import Work from "./components/resume";
import "./assests/styles.css";
import { useState } from "react";
import Contact from "./components/contact";
export default function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);
  function SetAllFalse() {
    seteducation(false);
    setworkhistory(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex aling-items-center justify-content-center">
            Hannah Stampke
          </span>
          <div className="bars" onClick={() => setopennav(!opennav)}></div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? "d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all"
            : "d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all"
        }
      >
        <span className="brand-name">Hannah Stampke</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About Me
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Resume
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hi I'm <span className="name-Im-text">Hannah!</span>
              </span>
              <span className="Im-text-enthusiastic py-2">
                Jack of all trades, master of absolutely none
              </span>
              <span className="Im-text-subheading">
                I am passionate about exploring full stack web development and all things marketing!
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Get in touch
                </a>
                <a
                  href="https://docs.google.com/document/d/1NrcyyyHgAOmPxN_k8kIjbdaVj6k4xY7TJJ1UEVkdHUs/edit"
                  className="btn-resume-me"
                  target="blank"
                >
                  Suss my credentials
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="..\assets\images\FB_IMG_1642238104707.jpg"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            About Me
          </span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                    Fast-paced marketing experience and a
                    Bachelor in CA makes campaign strategy
                    and creation a passion and pride.
                    In previous positions, I have traversed
                    everything from palliative procedural
                    writing to gin branding.
        
                    I flourish under pressure and sprint
                    into challenges like a greyhound
                    out of the gate.
                    
                    My vast event planning and management
                    experience serves as a not-so-secret
                    weapon for organisation on a
                    personal and company scale.
              </span>
              <span className="few-highlights">
                <span className="few-text">
                  Learnt coding languages
                </span>
                <span className="few-list">
                  <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>Bootstrap, SQL/NoSQL, Node.js</li>
                    <li>Express.js, React</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto ", height: "400px" }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span class="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column bg-white">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  workhistory === false
                    ? "resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkhistory, true);
                }}
              >
                Employment History
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>

      <div className="contact-me-part" id="contactme">
        <div className="relative-bg"></div>
        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <Contact />
        </div>
      </div>
        <Socials />
     </div>
    
  );
}