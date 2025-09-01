import React from 'react'
import { motion } from 'framer-motion'
import { HeroProps } from '../types'
import {
    fadeUpVariants,
    springTransition,
    staggerContainer,
} from '../animations/motionVariants'
import './BaseHero.scss'

export const BaseHero: React.FC<HeroProps> = ({
    className = '',
    title,
    subtitle,
    description,
    ctaButtons,
    animationComponent,
}) => {
    return (
        <section className={`section-hero ${className}`}>
            <motion.article
                className="section-hero__text-container"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className="section-hero__text-container__text">
                    {subtitle && (
                        <motion.span
                            className="paragraph__100--regular section-hero__subtitle"
                            variants={fadeUpVariants}
                            transition={springTransition}
                        >
                            {subtitle}
                        </motion.span>
                    )}

                    <motion.h1
                        className="display__100--bold section-hero__heading"
                        variants={fadeUpVariants}
                        transition={springTransition}
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        className="paragraph__100--regular section-hero__paragraph"
                        variants={fadeUpVariants}
                        transition={{ ...springTransition, delay: 0.1 }}
                    >
                        {description}
                    </motion.p>
                </div>

                {ctaButtons && (
                    <motion.div
                        variants={fadeUpVariants}
                        transition={{ ...springTransition, delay: 0.15 }}
                        className="section-hero__btn-container"
                    >
                        {ctaButtons}
                    </motion.div>
                )}
            </motion.article>

            {animationComponent && (
                <motion.div
                    variants={fadeUpVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ ...springTransition, delay: 0.2 }}
                    className="section-hero__animation"
                >
                    {animationComponent}
                </motion.div>
            )}
        </section>
    )
}
