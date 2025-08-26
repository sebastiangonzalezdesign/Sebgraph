import './HeroWork.scss'
import '../../styles/ConfigStyles/utilities/_index.scss'
import { Suspense, lazy, useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import React from 'react'
import { Button } from '../../components/Button'
import Cv from '../../documents/cv-sebastian-gonzalez.pdf'
const Hero = lazy(() => import('../../components/Hero'))
import { motion } from 'framer-motion'
import { trackEvent } from '../../services/analytics'

// Framer Motion Variables
const fadeUpVariants = {
    initial: { opacity: 0, y: 200 }, // Initial state
    animate: { opacity: 1, y: 0 }, // Animation state
    exit: { opacity: 0, y: 0 }, // Exit state
}

const HeroWork = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        return <div>Loading...</div>
    }

    const { theme } = context

    return (
        <section className={`section-hero ${theme}`}>
            <article className="section-hero__text-container">
                <div className="section-hero__text-container__text">
                    <motion.h1
                        id="work"
                        className="display__100--bold section-hero__heading"
                        variants={fadeUpVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            type: 'spring',
                            stiffness: 45,
                        }}
                    >
                        UI Designer for Design Systems & Products
                    </motion.h1>
                    <motion.p
                        className="paragraph__100--regular section-hero__paragraph"
                        variants={fadeUpVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            delay: 0.1,
                            type: 'spring',
                            stiffness: 45,
                        }}
                    >
                        UI Designer with 5+ years of experience, combining a
                        strong visual and UX foundation with expertise in
                        scalable design systems and front-end collaboration. I
                        bridge design and development through thoughtful
                        interfaces, systems thinking, and code. Currently
                        exploring how AI can streamline workflows and enhance
                        digital experiences across web and mobile.
                        <br />
                        <br />
                        <span className="paragraph__100--bold">
                            Based in Bogotá, Colombia • collaborating globally.
                        </span>
                    </motion.p>
                </div>

                <motion.div
                    variants={fadeUpVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        delay: 0.15,
                        type: 'spring',
                        stiffness: 45,
                    }}
                    className="section-hero__btn-container"
                >
                    <a
                        href="mailto:info@sebastiangonzalez.design"
                        className="email"
                    >
                        <Button
                            type="button"
                            buttonStyle="btn--secondary"
                            buttonSize="btn--lg"
                            onClick={() =>
                                trackEvent({
                                    action: "Click Let's Talk",
                                    category: 'Hero',
                                    label: 'LetsTalkButton',
                                })
                            }
                        >
                            Lets talk
                        </Button>
                    </a>
                    <a href={Cv} rel="noreferrer" download="">
                        <Button
                            type="button"
                            buttonStyle="btn--primary"
                            buttonSize="btn--lg"
                            onClick={() =>
                                trackEvent({
                                    action: 'Download CV',
                                    category: 'Hero',
                                    label: 'DownloadCVButton',
                                })
                            }
                        >
                            Download CV
                        </Button>
                    </a>
                </motion.div>
            </article>

            {/* Apply animation conditionally */}
            <motion.div
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.2,
                    type: 'spring',
                    stiffness: 45,
                }}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <Hero className="section-hero__3d" />
                </Suspense>
            </motion.div>
        </section>
    )
}

export default HeroWork
