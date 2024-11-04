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
            <motion.section
                className="profile-cv"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeUpVariants}
                transition={{
                    type: 'spring',
                    stiffness: 45,
                }}
            >
                <img className="icon" src={Profile} alt="profile" />
                <article className="profile-cv__text-box">
                    <h2 className="heading__100--bold subtitle">Profile</h2>
                    <p className="paragraph__100--medium">
                        UI and Design System Specialist with 5+ years of
                        experience creating scalable, user-centric digital
                        products for app and web platforms. Known for bridging
                        design and development, with expertise in design
                        systems, interaction design, and cross-functional
                        collaboration. Currently expanding coding skills (React,
                        JavaScript) to enhance product development and user
                        experience. Looking for UX engineering and product
                        design roles focused on innovation and design systems.
                        Passionate about delivering high-quality, scalable
                        design solutions with a keen focus on development
                        collaboration
                    </p>
                </article>
            </motion.section>

            <motion.section
                className="experience-cv"
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
                <img className="icon" src={Experience} alt="experience" />
                <article className="experience-cv__text-box">
                    <h2 className="heading__100--bold subtitle">Experience</h2>
                    <div className="experience-cv__experience-container">
                        <div className="experience-cv__head-container">
                            <h3 className="heading__300--bold">
                                Sr Visual | UI Designer | Design System Designer
                            </h3>
                            <span className="paragraph__300--medium">
                                Globant | Bogotá | September 2021 - currently
                            </span>
                        </div>

                        <ul className="experience-cv__items paragraph">
                            <li className="paragraph__100--regular experience-cv__item">
                                Developed and standardized design systems for
                                mobile and web, enhancing cross-platform
                                consistency by 30%.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Streamlined communication with stakeholders to
                                establish cohesive visual guidelines, aligning
                                brand principles with product vision.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Translated concepts into visually compelling
                                designs for products spanning Geo imagery,
                                well-being, and travel.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Partnered with development teams to document and
                                implement features, enabling a 20% faster
                                deployment rate supporting prototyping and
                                documentation, facilitating seamless
                                implementation.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Led the integration of accessibility standards
                                across product stages, improving the
                                accessibility impact.
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
                                Designed and prototyped interfaces for Samsung’s
                                digital products, increasing feature usability
                                by 25%.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Produced high-fidelity wireframes and
                                interactive prototypes for landing products.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Develop, manage, and maintain design systems.{' '}
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Developed, managed, and maintained design kits
                                and small systems for products.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Coordinated design with UX teams, turning
                                research insights into impactful interfaces,
                                which led to 20% user engagement increase.
                            </li>
                            <li className="paragraph__100--regular experience-cv__item">
                                Established an efficient communication process
                                with the development team to ensure consistent
                                component and interface implementation.
                            </li>
                        </ul>
                    </div>
                </article>
            </motion.section>

            <motion.section
                className="education-cv"
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
                <img className="icon" src={Education} alt="education" />
                <article className="education-cv__text-box">
                    <h2 className="heading__100--bold subtitle">Education</h2>
                    <div className="education-cv__course">
                        <h3 className="heading__300--bold education-cv__course-name">
                            Meta Front-End Developer
                        </h3>
                        <p className="paragraph__200--medium education-cv__university course-description">
                            Intermediated skills in React, JavaScript, and
                            responsive design.
                        </p>
                        <p className="heading__400--regular education-cv__university">
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
                            Graphic Design degree.
                        </h3>
                        <p className="paragraph__200--medium education-cv__university course-description">
                            Focus on visual communication and digital products.
                        </p>
                        <p className="heading__400--regular education-cv__university">
                            Universidad Los Libertadores.
                        </p>
                        <p className="paragraph__100--medium">2010/2014.</p>
                        <hr />
                    </div>
                </article>
            </motion.section>

            <section className="skills-cv">
                <img className="icon" src={Skills} alt="" />
                <article className="skills-cv__skills-section-container">
                    <h2 className="heading__100--bold subtitle">Skills</h2>

                    <div className="skills-cv__skills-container">
                        <div className="skills-cv__skill">
                            <h3 className="heading__300--bold skills-cv__field">
                                Design & Technical Skills
                            </h3>

                            <div className="skills-cv__container-items">
                                <div className="skills-cv__item">
                                    <Chip label="Design Systems" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="Accessibility" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="Responsive design" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="Prototyping" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="HTML/CSS/SASS" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="JavaScript" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="React" />
                                </div>
                                <div className="skills-cv__item">
                                    <Chip label="Typescript" />
                                </div>
                            </div>
                        </div>

                        <div className="skills-cv__skill">
                            <h3 className="heading__300--bold skills-cv__field">
                                Tools
                            </h3>

                            <div className="skills-cv__container-items">
                                <div className="skills-cv__item">
                                    <Chip label="Figma" />
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip label="Framer" />
                                    </div>
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip label="Lottie" />
                                    </div>
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip label="VS Code" />
                                    </div>
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip label="GIT/Github" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="skills-cv__skill">
                            <h3 className="heading__300--bold skills-cv__field">
                                Soft Skills
                            </h3>

                            <div className="skills-cv__container-items">
                                <div className="skills-cv__item">
                                    <Chip label="Collaboration" />
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip label=" Problem-Solving" />
                                    </div>
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip label="Communication" />
                                    </div>
                                </div>
                                <div className="skills-cv__item">
                                    <div className="skills-cv__item">
                                        <Chip label="Adaptability" />
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
                            <Chip
                                label="English"
                                proficiency="Professional Working Proficiency (B2)"
                            />
                        </div>
                        <div className="languages-cv__item">
                            <Chip
                                label="Portuguese"
                                proficiency="Limited Working Proficiency(B1)"
                            />
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
