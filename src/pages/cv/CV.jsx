import './CV.scss'
import Profile from '../../img/profile-icon.svg'
import Experience from '../../img/experience-icon.svg'
import Education from '../../img/education-icon.svg'
import Languages from '../../img/languages-icon.svg'
import Hobbies from '../../img/hobbies-icon.svg'
import Soccer from '../../img/soccer.svg'
import Ride from '../../img/ride-bike.svg'
import Paint from '../../img/paint.svg'
import Cook from '../../img/cook.svg'
import Cv from '../../documents/cv-sebastian-gonzalez.pdf'
import Skills from '../../img/skills-icon.svg'
import { motion } from 'framer-motion'
import '../../styles/ConfigStyles/utilities/_index.scss'

import { Button } from '../../components/Button'
import Chip from '../../components/Chip'

const CV = () => {
    // Framer Motion Variables
    const fadeUpVariants = {
        initial: { opacity: 0, y: 100 }, // Start slightly below and invisible
        animate: { opacity: 1, y: 0 }, // Fade in and move to original position
        exit: { opacity: 0, y: -20 }, // Fade out and move slightly above
    }

    return (
        <main className="container-cv">
            <section className="name-cv">
                <article className="name-cv__text-box">
                    <motion.h1
                        className="display__200--bold"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={fadeUpVariants}
                        transition={{
                            type: 'spring',
                            stiffness: 45,
                        }}
                    >
                        Sebastian González
                    </motion.h1>
                    <motion.p
                        className="heading__100--bold"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={fadeUpVariants}
                        transition={{
                            delay: 0.03,
                            type: 'spring',
                            stiffness: 45,
                        }}
                    >
                        Curriculum
                    </motion.p>
                </article>
            </section>

            <motion.section
                className="profile-cv"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeUpVariants}
                transition={{
                    delay: 0.05,
                    type: 'spring',
                    stiffness: 45,
                }}
            >
                <img className="icon" src={Profile} alt="profile" />
                <article className="profile-cv__text-box">
                    <h2 className="heading__100--bold subtitle">Profile</h2>
                    <p className="paragraph__100--medium">
                        Experienced UI Designer with expertise in visual design,
                        design systems, and interaction design for both web and
                        mobile applications. Dedicated to crafting user-centric
                        digital products that simplify complex tasks and deliver
                        meaningful experiences.
                    </p>
                </article>
            </motion.section>

            <section className="experience-cv">
                <img className="icon" src={Experience} alt="experience" />
                <article className="experience-cv__text-box">
                    <h2 className="heading__100--bold subtitle">Experience</h2>
                    <div className="experience-cv__experience-container">
                        <div className="experience-cv__head-container">
                            <h3 className="heading__300--bold">
                                Sr Visual | UI Designer
                            </h3>
                            <span className="paragraph__300--medium">
                                Globant | Bogotá | September 2021 - currently
                            </span>
                        </div>

                        <ul className="experience-cv__items paragraph">
                            <li className="paragraph__100--regular experience-cv__item">
                                Develop and maintain design systems for mobile
                                and web digital products, ensuring effective
                                communication with stakeholders.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Translate concepts into visually compelling
                                designs for products spanning Geo imagery,
                                well-being, and travel.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Define visual language and guidelines based on
                                brand principles.{' '}
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Apply accessibility criteria throughout design
                                stages.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Prototype products and document features,
                                facilitating seamless implementation with the
                                development team.
                            </li>
                        </ul>
                    </div>

                    <div className="experience-cv__experience-container">
                        <div className="experience-cv__head-container">
                            <h3 className="heading__300--bold">UI Designer</h3>
                            <span className="paragraph__300--medium">
                                Cheil World Wide / Bogotá / July 2019 -
                                September 2021
                            </span>
                        </div>

                        <ul className="experience-cv__items paragraph">
                            <li className="paragraph__100--regular experience-cv__item">
                                Design interfaces for websites and apps,
                                implementing new functionalities within
                                iterative processes for major brands such as
                                Samsung.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Create wireframes and prototypes for diverse
                                products.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Develop, manage, and maintain design systems.{' '}
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Communicate and collaborate with UX teams,
                                translating research results into visually
                                impactful interfaces.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Coordinate with the development team to ensure
                                consistent components.
                            </li>
                        </ul>
                    </div>
                </article>
            </section>

            <section className="education-cv">
                <img className="icon" src={Education} alt="education" />
                <article className="education-cv__text-box">
                    <h2 className="heading__100--bold subtitle">Education</h2>
                    <div className="education-cv__course">
                        <h3 className="heading__300--bold education-cv__course-name">
                            Meta Front-End Developer
                        </h3>
                        <p className="paragraph__100--medium education-cv__university">
                            Coursera
                        </p>
                        <p className="paragraph__100--medium">2023.</p>
                        <hr />
                    </div>
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
                <article className="skills-cv__skills-section-container">
                    <h2 className="heading__100--bold subtitle">Skills</h2>

                    <div className="skills-cv__skills-container">
                        <div className="skills-cv__skill">
                            <h3 className="heading__300--bold skills-cv__field">
                                Professional
                            </h3>

                            <div className="skills-cv__container-items">
                                <div className="skills-cv__item">
                                    <Chip label="Time Management" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="Teamwork" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="Flexibility" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="Communication" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="System Thinking" />
                                </div>
                            </div>
                        </div>

                        <div className="skills-cv__skill">
                            <h3 className="heading__300--bold skills-cv__field">
                                Technical
                            </h3>

                            <div className="skills-cv__container-items">
                                <div className="skills-cv__item">
                                    <Chip
                                        label="Figma"
                                        proficiency="Advanced"
                                    />
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip
                                            label="HTML | CSS-SASS"
                                            proficiency="Intermediate"
                                        />
                                    </div>
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip
                                            label="JavaScript"
                                            proficiency="Basic"
                                        />
                                    </div>
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip
                                            label="React"
                                            proficiency="Basic"
                                        />
                                    </div>
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip
                                            label="Visual Design"
                                            proficiency="Advanced"
                                        />
                                    </div>
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip
                                            label="Design Systems"
                                            proficiency="Intermediate"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <section className="languages-cv">
                <img className="icon" src={Languages} alt="language" />
                <article className="languages-cv__text-box">
                    <h2 className="heading__200--bold subtitle">Languages</h2>
                    <div className="languages-cv__container-items">
                        <div className="languages-cv__item">
                            <Chip label="English" proficiency="B2" />
                        </div>
                        <div className="languages-cv__item">
                            <Chip label="Portuguese" proficiency="B2" />
                        </div>
                        <div className="languages-cv__item">
                            <Chip label="Spanish" proficiency="Native" />
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
                <h2 className="display__200--regular subtitle">Let’s talk</h2>
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
    )
}

export default CV
