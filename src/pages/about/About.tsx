import './About.scss'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import SEO from '../../components/SEO'
import { seoConfig } from '../../seoConfig'

const About = () => {
    // Framer Motion Variables
    const fadeUpVariants = {
        initial: { opacity: 0, y: 200 }, // Start slightly below and invisible
        animate: { opacity: 1, y: 0 }, // Fade in and move to original position
        exit: { opacity: 0, y: -20 }, // Fade out and move slightly above
    }

    // Framer Motion Variables for Carousel Animation
    const carouselVariants = {
        initial: {
            opacity: 0,
            y: -50, // Start 50px down
        },
        animate: {
            opacity: 1,
            y: 0, // Move to original position
        },
        exit: {
            y: 50, // Move up 50px when exiting
        },
        transition: {
            type: 'spring',
            duration: 0.8,
            bounce: 0.6,
            stiffness: 100,
        },
    }

    // Avatar image URL
    const avatarUrl = 'https://sebastiangonzalez.design/images/about/avatar.png'

    // Array of texts to cycle through
    const texts = [
        'I try to code my ideas.',
        'I like to illustrate.',
        'I love biking.',
        'I like to apply system thinking.',
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    // Change the text index at a set interval
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }, 3000) // Change text every 3 seconds

        return () => clearInterval(interval) // Cleanup on component unmount
    }, [texts.length])

    return (
        <>
            <SEO
                title={seoConfig.about.title}
                description={seoConfig.about.description}
                url={seoConfig.about.url}
                robots={seoConfig.about.robots}
                structuredData={seoConfig.about.structuredData}
            />
            <main className="container-about">
                <section className="hero-about">
                    <article className="hero-about__hero-container">
                        <motion.div
                            className="hero-about__text"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={fadeUpVariants}
                            transition={{
                                type: 'spring',
                                stiffness: 45,
                            }}
                        >
                            {/* Static Text */}
                            <motion.h1 className="display__200--bold section-hero__heading">
                                Hi! I'm Sebastian
                            </motion.h1>

                            {/* Carousel Text Animation */}
                            <motion.div className="hero-about__text-carousel">
                                <motion.h1
                                    className="display__100--bold"
                                    key={currentIndex} // Ensure re-render on text change
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={carouselVariants}
                                    transition={carouselVariants.transition}
                                >
                                    {texts[currentIndex]}
                                </motion.h1>
                            </motion.div>
                        </motion.div>
                    </article>
                    <article className="hero-about__description">
                        <motion.figure
                            className="hero-about__img-container"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={fadeUpVariants}
                            transition={{
                                delay: 0.1,
                                type: 'spring',
                                stiffness: 45,
                            }}
                        >
                            <img
                                className="hero-about__img-container__img"
                                src={avatarUrl}
                                alt="Sebastian González's avatar"
                            />
                        </motion.figure>
                        <motion.p
                            className="paragraph__100--medium profile__paragraph"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={fadeUpVariants}
                            transition={{
                                delay: 0.2,
                                type: 'spring',
                                stiffness: 45,
                            }}
                        >
                            I’m Sebastian González, a UI/Visual Designer
                            passionate about crafting meaningful digital
                            experiences. With over 5 years of experience, I’ve
                            worked with brands like Samsung, continually
                            refining my design and coding skills. My current
                            focus is on scalable design systems and how emerging
                            technologies like AI can enhance the way we build
                            interfaces. Let’s work together to create something
                            thoughtful, beautiful, and impactful.
                        </motion.p>
                    </article>
                </section>
            </main>
        </>
    )
}

export default About
