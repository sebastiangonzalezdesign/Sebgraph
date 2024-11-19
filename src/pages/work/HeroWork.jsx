import './HeroWork.scss'
import '../../styles/ConfigStyles/utilities/_index.scss'
import { Suspense, lazy, useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import React from 'react'
import { Button } from '../../components/Button'
import Cv from '../../documents/cv-sebastian-gonzalez.pdf'
const Hero = lazy(() => import('../../components/Hero'))
import { motion } from 'framer-motion'

// Framer Motion Variables
const fadeUpVariants = {
    initial: { opacity: 0, y: 200 }, // Initial state
    animate: { opacity: 1, y: 0 }, // Animation state
    exit: { opacity: 0, y: 0 }, // Exit state
}

const HeroWork = () => {
    const { theme } = useContext(ThemeContext)

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
                        Creating digital experiences
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
                        Hey, I'm <strong>Sebastian González, </strong>a
                        UI/Visual Designer with 5 years of experience creating
                        meaningful digital products. I’m all about design
                        systems and love bringing ideas to life with a bit of
                        code. My goal is to design interfaces that not only look
                        great but also feel seamless for users. With a passion
                        for innovation and a keen understanding of user needs, I
                        help bridge the gap between design and development.
                        Let’s collaborate to build something that truly stands
                        out and connects with your audience.
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
                    <a href="mailto:sebgraph7@gmail.com" className="email">
                        <Button
                            type="button"
                            buttonStyle="btn--secondary"
                            buttonSize="btn--large"
                        >
                            Contact me
                        </Button>
                    </a>
                    <a href={Cv} rel="noreferrer" download="">
                        <Button
                            type="button"
                            buttonStyle="btn--primary"
                            buttonSize="btn--large"
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
