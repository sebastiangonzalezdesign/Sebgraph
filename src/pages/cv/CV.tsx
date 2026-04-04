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
import SEO from '../../components/SEO'
import { seoConfig } from '../../seoConfig'
import { trackEvent } from '../../services/analytics'
import { useEffect } from 'react'

const CV = () => {
    // Scroll-to-end tracking
    useEffect(() => {
        let hasTracked = false
        const handleScroll = () => {
            if (hasTracked) return
            const scrollPosition = window.innerHeight + window.scrollY
            const threshold = 100 // px from bottom
            if (scrollPosition >= document.body.offsetHeight - threshold) {
                trackEvent({
                    action: 'Reached End of CV',
                    category: 'Scroll',
                    label: 'CVPage',
                })
                hasTracked = true
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    // Framer Motion Variables
    const fadeUpVariants = {
        initial: { opacity: 0, y: 100 }, // Start slightly below and invisible
        animate: { opacity: 1, y: 0 }, // Fade in and move to original position
        exit: { opacity: 0, y: -20 }, // Fade out and move slightly above
    }

    return (
        <>
            <SEO {...seoConfig.cv} />
            <main className="container-cv">
                {/* Page-level H1 for accessibility (visually hidden) */}
                <h1 className="sr-only">
                    Curriculum Vitae — Sebastian González
                </h1>
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
                    <img
                        className="icon"
                        src={Profile}
                        alt="Profile icon"
                        loading="eager"
                    />
                    <article className="profile-cv__text-box">
                        <h2 className="heading__100--bold subtitle">Profile</h2>
                        {/* Short summary before profile for quick readability */}
                        <p className="paragraph__100--medium cv-summary">
                            UI Designer specialized in design systems, focused
                            on building scalable interfaces and bridging design
                            with frontend implementation.
                        </p>

                        <p className="paragraph__100--medium">
                            I bring a strong foundation in visual design and
                            system thinking, combined with hands-on experience
                            working with design tokens, component systems, and
                            frontend technologies (React, JavaScript).
                        </p>

                        <p className="paragraph__100--medium">
                            Recently, I’ve been designing and building systems
                            that connect design to code - including token
                            pipelines, design system tooling, and
                            frontend-integrated workflows.
                        </p>

                        <p className="paragraph__100--medium">
                            Based in Bogotá, collaborating globally.
                        </p>

                        {/* Crosslink to portfolio */}
                        <div
                            className="profile-cv__actions"
                            style={{ marginTop: '1rem' }}
                        >
                            <a
                                href="/projects"
                                onClick={() =>
                                    trackEvent({
                                        action: 'Open Projects from CV',
                                        category: 'Navigation',
                                        label: 'CVPage',
                                    })
                                }
                            >
                                <Button
                                    type="button"
                                    buttonStyle="btn--secondary"
                                    buttonSize="btn--md"
                                >
                                    View projects
                                </Button>
                            </a>
                        </div>
                    </article>
                </motion.section>

                <motion.section
                    className="featured-project-cv"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={fadeUpVariants}
                    transition={{
                        delay: 0.02,
                        type: 'spring',
                        stiffness: 45,
                    }}
                >
                    <article className="featured-project-cv__text-box">
                        <span className="heading__200--bold featured-project-cv__label">
                            Selected Project
                        </span>
                        <h3 className="heading__300--bold featured-project-cv__title">
                            Startoken — Design Token Pipeline System
                        </h3>
                        <p className="paragraph__100--medium featured-project-cv__description">
                            Designed and built an end-to-end system that
                            transforms Figma variables into production-ready CSS
                            variables. Includes a custom TypeScript engine for
                            normalization, alias resolution, and multi-theme
                            output, along with a Figma plugin for real-time
                            synchronization.
                        </p>
                        <a
                            href="/projects/startoken"
                            onClick={() =>
                                trackEvent({
                                    action: 'View Featured Project from CV',
                                    category: 'Navigation',
                                    label: 'CVPage',
                                })
                            }
                        >
                            <Button
                                type="button"
                                buttonStyle="btn--secondary"
                                buttonSize="btn--md"
                            >
                                View full project
                            </Button>
                        </a>
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
                    <img
                        className="icon"
                        src={Experience}
                        alt="Experience icon"
                        loading="lazy"
                    />
                    <article className="experience-cv__text-box">
                        <h2 className="heading__100--bold subtitle">
                            Experience
                        </h2>
                        <div className="experience-cv__experience-container">
                            <div className="experience-cv__head-container">
                                <h3 className="heading__300--bold">
                                    Design System Designer
                                </h3>
                                <span className="paragraph__300--medium">
                                    BlueCloud (Affirm) | Remote | December 2025
                                    - Present
                                </span>
                            </div>

                            <ul className="experience-cv__items paragraph">
                                <li className="paragraph__100--regular experience-cv__item">
                                    Contributing to the evolution of a scalable
                                    design system used across product teams,
                                    focusing on consistency, performance, and
                                    implementation quality.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Bridging design and engineering by aligning
                                    design tokens, components, and frontend
                                    implementation workflows.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Supporting the integration of design tokens
                                    into production codebases, aligning token
                                    structures with real frontend implementation
                                    constraints.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Collaborating closely with frontend
                                    engineers to ensure accurate component
                                    behavior, states, and accessibility
                                    standards.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Driving improvements in system documentation
                                    and usage patterns to reduce inconsistencies
                                    across teams.
                                </li>
                            </ul>
                        </div>

                        <div className="experience-cv__experience-container">
                            <div className="experience-cv__head-container">
                                <h3 className="heading__300--bold">
                                    Sr Visual | UI Designer | Design System
                                    Designer
                                </h3>
                                <span className="paragraph__300--medium">
                                    Globant | Bogotá | September 2021 - December
                                    2025
                                </span>
                            </div>

                            <ul className="experience-cv__items paragraph">
                                <li className="paragraph__100--regular experience-cv__item">
                                    Designed and scaled UI components within
                                    design systems for mobile and web platforms,
                                    enhancing cross-product consistency and
                                    reducing component deprecation by 30%.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Aligned design token strategies with
                                    engineering workflows, bridging Figma design
                                    specifications to production component
                                    implementation across multiple product
                                    teams.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Established design-to-code protocols and
                                    documentation standards, enabling a 20%
                                    faster deployment rate and reducing
                                    implementation mismatches.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Partnered with frontend engineers on
                                    responsive design patterns and component
                                    behavior specifications for Geo, well-being,
                                    and travel products.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Led accessibility integration across design
                                    system components, ensuring WCAG compliance
                                    and testing standards across product stages.
                                </li>
                            </ul>
                        </div>

                        <div className="experience-cv__experience-container">
                            <div className="experience-cv__head-container">
                                <h3 className="heading__300--bold">
                                    UI Designer
                                </h3>
                                <span className="paragraph__300--medium">
                                    Cheil World Wide / Bogotá / July 2019 -
                                    September 2021
                                </span>
                            </div>

                            <ul className="experience-cv__items paragraph">
                                <li className="paragraph__100--regular experience-cv__item">
                                    Designed and prototyped scalable component
                                    systems for Samsung's digital products,
                                    increasing feature usability and
                                    cross-platform consistency by 25%.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Produced high-fidelity wireframes and
                                    interactive prototypes aligned with system
                                    specifications for landing and product
                                    pages.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Developed, managed, and maintained design
                                    systems and component libraries,
                                    establishing naming conventions and token
                                    structures for multiple products.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Coordinated design system evolution with UX
                                    and engineering teams, translating research
                                    insights into scalable component patterns,
                                    driving 20% user engagement increase.
                                </li>
                                <li className="paragraph__100--regular experience-cv__item">
                                    Established design-to-development handoff
                                    processes with the engineering team to
                                    ensure consistent component behavior and
                                    visual fidelity across implementations.
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
                    <img
                        className="icon"
                        src={Education}
                        alt="Education icon"
                        loading="lazy"
                    />
                    <article className="education-cv__text-box">
                        <h2 className="heading__100--bold subtitle">
                            Education
                        </h2>
                        <div className="education-cv__course">
                            <h3 className="heading__300--bold education-cv__course-name">
                                Meta Front-End Developer
                            </h3>
                            <p className="paragraph__200--medium education-cv__university course-description">
                                Intermediate proficiency in React, JavaScript,
                                and responsive design.
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
                                Focus on visual communication and digital
                                products.
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
                    <img
                        className="icon"
                        src={Skills}
                        alt="Skills icon"
                        loading="lazy"
                    />
                    <article className="skills-cv__skills-section-container">
                        <h2 className="heading__100--bold subtitle">Skills</h2>

                        <div className="skills-cv__skills-container">
                            <div className="skills-cv__skill">
                                <h3 className="heading__300--bold skills-cv__field">
                                    Design Systems
                                </h3>

                                <div className="skills-cv__container-items">
                                    <div className="skills-cv__item">
                                        <Chip label="Design Tokens Architecture" />
                                    </div>
                                    <div className="skills-cv__item">
                                        <Chip label="Component Systems" />
                                    </div>
                                    <div className="skills-cv__item">
                                        <Chip label="Theming (Light/Dark)" />
                                    </div>
                                    <div className="skills-cv__item">
                                        <Chip label="Accessibility" />
                                    </div>
                                </div>
                            </div>

                            <div className="skills-cv__skill">
                                <h3 className="heading__300--bold skills-cv__field">
                                    Frontend & Technical
                                </h3>

                                <div className="skills-cv__container-items">
                                    <div className="skills-cv__item">
                                        <Chip label="HTML / CSS / SCSS" />
                                    </div>
                                    <div className="skills-cv__item">
                                        <Chip label="JavaScript / TypeScript" />
                                    </div>
                                    <div className="skills-cv__item">
                                        <Chip label="React" />
                                    </div>
                                    <div className="skills-cv__item">
                                        <Chip label="Design-to-code workflows" />
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
                                        <Chip label="Git / GitHub" />
                                    </div>
                                    <div className="skills-cv__item">
                                        <Chip label="VS Code" />
                                    </div>
                                    <div className="skills-cv__item">
                                        <Chip label="Framer / Lottie" />
                                    </div>
                                    <div className="skills-cv__item">
                                        <Chip label="Storybook" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                <section className="languages-cv">
                    <img
                        className="icon"
                        src={Languages}
                        alt="Languages icon"
                        loading="lazy"
                    />
                    <article className="languages-cv__text-box">
                        <h2 className="heading__200--bold subtitle">
                            Languages
                        </h2>
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
                    <img
                        className="icon"
                        src={Hobbies}
                        alt="Hobbies icon"
                        loading="lazy"
                    />
                    <div className="hobbies-cv__text-box">
                        <h2 className="heading__200--bold subtitle">Hobbies</h2>
                        <div className="hobbies-cv__icons">
                            <img
                                className="hobbies-cv__icon"
                                src={Soccer}
                                alt="Soccer icon"
                                loading="lazy"
                            />
                            <img
                                className="hobbies-cv__icon"
                                src={Ride}
                                alt="Biking icon"
                                loading="lazy"
                            />
                            <img
                                className="hobbies-cv__icon"
                                src={Paint}
                                alt="Painting icon"
                                loading="lazy"
                            />
                            <img
                                className="hobbies-cv__icon"
                                src={Cook}
                                alt="Cooking icon"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                <section className="download-cv">
                    <h2 className="display__200--regular subtitle">
                        Let’s talk
                    </h2>
                    <div className="download-cv__btns">
                        <a href={Cv} rel="noreferrer" target="_blank">
                            <Button
                                type="button"
                                buttonStyle="btn--secondary"
                                buttonSize="btn--lg"
                                onClick={() =>
                                    trackEvent({
                                        action: 'View CV PDF',
                                        category: 'CV',
                                        label: 'ViewPDFButton',
                                    })
                                }
                            >
                                View PDF online
                            </Button>
                        </a>

                        <a href={Cv} rel="noreferrer" download="">
                            <Button
                                type="button"
                                buttonStyle="btn--primary"
                                buttonSize="btn--lg"
                                onClick={() =>
                                    trackEvent({
                                        action: 'Download CV PDF',
                                        category: 'CV',
                                        label: 'DownloadPDFButton',
                                    })
                                }
                            >
                                Download PDF
                            </Button>
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CV
