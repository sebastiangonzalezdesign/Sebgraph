import "./CV.scss";
import Profile from "../../img/profile-icon.svg";
import Experience from "../../img/experience-icon.svg";
import Education from "../../img/education-icon.svg";
import Languages from "../../img/languages-icon.svg";
import Hobbies from "../../img/hobbies-icon.svg";
import Soccer from "../../img/soccer.svg";
import Ride from "../../img/ride-bike.svg";
import Paint from "../../img/paint.svg";
import Cook from "../../img/cook.svg";
import Cv from "../../documents/cv-sebastian-gonzalez.pdf";
import Skills from "../../img/skills-icon.svg";
import "aos/dist/aos.css";
import { Button } from "../../components/Button";

const CV = () => {
  return (
    <main className="container-cv">
      <section className="name-cv">
        <article className="name-cv__text-box">
          <h1 className="heading__100--bold">Sebastian González</h1>
          <span className="heading__300--bold">UI Designer.</span>
        </article>
      </section>

      <section className="profile-cv">
        <img className="icon" src={Profile} alt="profile" />
        <article className="profile-cv__text-box">
          <h2 className="heading__100--bold subtitle">Profile</h2>
          <p className="paragraph__100--medium">
            Hi!!, I am an UI designer who believe in digital products that
            connect the design focused in people experiences. I will help you to
            connect the users with your digital products through great
            interfaces and experiences.
          </p>
        </article>
      </section>

      <section className="experience-cv">
        <img className="icon" src={Experience} alt="experience" />
        <article className="experience-cv__text-box">
          <h2 className="heading__200--bold subtitle">Experience</h2>
          <div className="experience-cv__experience-container">
            <div className="experience-cv__head-container">
              <h3 className="heading__300--bold">UI Designer</h3>
              <span className="paragraph__300--medium">
                Cheil World Wide / Bogotá / 2019 - currently
              </span>
            </div>
            <ol>
              <ul className="experience-cv__items paragraph">
                <li className="paragraph__100--medium experience-cv__item">
                  Develop of interface design for websites and apps on new
                  functionalities within iterative processes for huge brands
                  like Samsung.
                </li>
                <li className="paragraph__100--medium experience-cv__item">
                  Wireframes and prototype development for different products.
                </li>
                <li className="paragraph__100--medium experience-cv__item">
                  Develop, managing and maintaining of design systems.{" "}
                </li>
                <li className="paragraph__100--medium experience-cv__item">
                  Communication and understanding of UX process and teams
                  transforming different research results in visual interfaces.
                </li>
                <li className="paragraph__100--medium experience-cv__item">
                  Communication with development team to create consistent
                  components.
                </li>
              </ul>
            </ol>
          </div>

          <div className="experience-cv__experience-container">
            <div className="experience-cv__head-container">
              <h3 className="heading__300--bold">Graphic and web designer</h3>
              <span className="paragraph__300--medium">
                Solutions Group / Bogotá / 2015 - 2019
              </span>
            </div>
            <ol>
              <ul className="experience-cv__items paragraph">
                <li className="paragraph__100--medium experience-cv__item">
                  Conceptualization, design, and coding for a new e-commerce
                  platform for the innovation lab of the company called
                  ProtoLab, using UX research methodologies and interface
                  design.
                </li>
                <li className="paragraph__100--medium experience-cv__item">
                  Communication and understanding of UX process with different
                  research methods like emphaty maps, user journeys and
                  interviews.
                </li>
                <li className="paragraph__100--medium experience-cv__item">
                  Develop of digital products focused in websites design and
                  social media content.{" "}
                </li>
                <li className="paragraph__100--medium experience-cv__item">
                  Participation in digital campaigns and global brand
                  activations of projects with global brands like Coca-Cola and
                  Av-inbev.
                </li>
              </ul>
            </ol>
          </div>
        </article>
      </section>

      <section className="education-cv">
        <img className="icon" src={Education} alt="education" />
        <article className="education-cv__text-box">
          <h2 className="heading__200--bold subtitle">Education</h2>
          <div className="education-cv__course">
            <h3 className="heading__300--bold education-cv__course-name">
              Course of design and marketing of websites.
            </h3>
            <p className="paragraph__100--medium education-cv__university">
              Universidad Jorge Tadeo Lozano.
            </p>
            <p className="paragraph__100--medium">2019.</p>
            <hr />
          </div>
          <div className="education-cv__course">
            <h3 className="heading__300--bold education-cv__course-name">
              Course of branding.
            </h3>
            <p className="paragraph__100--medium education-cv__university">
              Universidad Jorge Tadeo Lozano.
            </p>
            <p className="paragraph__100--medium">2018.</p>
            <hr />
          </div>
          <div className="education-cv__course">
            <h3 className="heading__300--bold education-cv__course-name">
              Graphic design degree.
            </h3>
            <p className="paragraph__100--medium education-cv__university">
              Universidad Los Libertadores.
            </p>
            <p className="paragraph__100--medium">2010/2014.</p>
            <hr />
          </div>
        </article>
      </section>

      <section className="skills-cv">
        <img className="icon" src={Skills} alt="" />
        <article className="skills-cv__skills-container">
          <h2 className="heading__200--bold subtitle">Skills</h2>
          <div className="skills-cv__skill">
            <h3 className="heading__300--bold skills-cv__field">
              Professional
            </h3>
            <div className="skills-cv__item">
              <p className="paragraph__100--medium">Time management</p>
              <div className="skills-cv__bar-container">
                <progress
                  className="skills-cv__bar"
                  value="90"
                  max="100"
                ></progress>
                <p className="skills-cv__percent paragraph__100--medium">90%</p>
              </div>
            </div>
            <div className="skills-cv__item">
              <p className="paragraph__100--medium">Teamwork</p>
              <div className="skills-cv__bar-container">
                <progress
                  className="skills-cv__bar"
                  value="85"
                  max="100"
                ></progress>
                <p className="skills-cv__percent paragraph__100--medium">85%</p>
              </div>
            </div>
            <div className="skills-cv__item">
              <p className="paragraph__100--medium">Flexibility</p>
              <div className="skills-cv__bar-container">
                <progress
                  className="skills-cv__bar"
                  value="75"
                  max="100"
                ></progress>
                <p className="skills-cv__percent paragraph__100--medium">75%</p>
              </div>
            </div>
            <div className="skills-cv__item">
              <p className="paragraph__100--medium">Communication</p>
              <div className="skills-cv__bar-container">
                <progress
                  className="skills-cv__bar"
                  value="70"
                  max="100"
                ></progress>
                <p className="skills-cv__percent paragraph__100--medium">70%</p>
              </div>
            </div>
          </div>

          <div className="skills-cv__skill">
            <h3 className="heading__300--bold skills-cv__field">Technical</h3>
            <div className="skills-cv__item">
              <p className="paragraph__100--medium">Prototyping figma XD</p>
              <div className="skills-cv__bar-container">
                <progress
                  className="skills-cv__bar"
                  value="90"
                  max="100"
                ></progress>
                <p className="skills-cv__percent paragraph__100--medium">90%</p>
              </div>
            </div>
            <div className="skills-cv__item">
              <p className="paragraph__100--medium">HTML / CSS - SASS</p>
              <div className="skills-cv__bar-container">
                <progress
                  className="skills-cv__bar"
                  value="85"
                  max="100"
                ></progress>
                <p className="skills-cv__percent paragraph__100--medium">85%</p>
              </div>
            </div>
            <div className="skills-cv__item">
              <p className="paragraph__100--medium">JavaScript</p>
              <div className="skills-cv__bar-container">
                <progress
                  className="skills-cv__bar"
                  value="30"
                  max="100"
                ></progress>
                <p className="skills-cv__percent paragraph__100--medium">30%</p>
              </div>
            </div>
            <div className="skills-cv__item">
              <p className="paragraph__100--medium">Visual Design</p>
              <div className="skills-cv__bar-container">
                <progress
                  className="skills-cv__bar"
                  value="85"
                  max="100"
                ></progress>
                <p className="skills-cv__percent paragraph__100--medium">85%</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="languages-cv">
        <img className="icon" src={Languages} alt="language" />
        <article className="languages-cv__text-box">
          <h2 className="heading__200--bold subtitle">Languages</h2>
          <div className="languages-cv__item">
            <p className="paragraph__100--medium languages-cv__language">
              English
            </p>
            <div className="languages-cv__bar-container">
              <progress
                className="languages-cv__bar"
                value="75"
                max="100"
              ></progress>
              <p className="languages-cv__percent paragraph__100--medium">B2</p>
            </div>
          </div>
          <div className="languages-cv__item">
            <p className="paragraph__100--medium languages-cv__language">
              Portuguese
            </p>
            <div className="languages-cv__bar-container">
              <progress
                className="languages-cv__bar"
                value="75"
                max="100"
              ></progress>
              <p className="languages-cv__percent paragraph__100--medium">B2</p>
            </div>
          </div>
          <div className="languages-cv__item">
            <p className="paragraph__100--medium languages-cv__language">
              Spanish
            </p>
            <div className="languages-cv__bar-container">
              <progress
                className="languages-cv__bar"
                value="100"
                max="100"
              ></progress>
              <p className="languages-cv__percent paragraph__100--medium">
                Native
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="hobbies-cv">
        <img className="icon" src={Hobbies} alt="hobbies" />
        <div className="hobbies-cv__text-box">
          <h2 className="heading__200--bold subtitle">Hobbies</h2>
          <div className="hobbies-cv__icons">
            <img className="hobbies-cv__icon" src={Soccer} alt="" />
            <img className="hobbies-cv__icon" src={Ride} alt="" />
            <img className="hobbies-cv__icon" src={Paint} alt="" />
            <img className="hobbies-cv__icon" src={Cook} alt="" />
          </div>
        </div>
      </section>

      <section className="download-cv">
        <h2 className="heading__200--bold subtitle">Let’s talk</h2>
        <div className="download-cv__btns">
          <a href={Cv} rel="noreferrer" target="_blank">
            <Button
              type="button"
              buttonStyle="btn--secondary"
              buttonSize="btn--large"
            >
              View PDF online
            </Button>
          </a>

          <a href={Cv} rel="noreferrer" download="">
            <Button
              type="button"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              Download PDF
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default CV;
