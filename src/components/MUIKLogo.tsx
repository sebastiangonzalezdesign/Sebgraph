import React from 'react'
import { motion } from 'framer-motion'
import './MUIKLogo.scss'

interface MUIKLogoProps {
    className?: string
    size?: 'sm' | 'md' | 'lg'
    animated?: boolean
}

export const MUIKLogo: React.FC<MUIKLogoProps> = ({
    className = '',
    size = 'md',
    animated = true,
}) => {
    const sizeClass = `muik-logo--${size}`

    // Path drawing animation variants for each shape (stroke to fill)
    const createPathVariants = (delay: number) => ({
        initial: {
            pathLength: 0,
            fill: 'transparent',
            stroke: 'currentColor',
            strokeWidth: 1,
        },
        animate: {
            pathLength: 1,
            fill: 'currentColor',
            stroke: 'transparent',
            strokeWidth: 0,
            transition: {
                pathLength: {
                    duration: 0.6,
                    ease: 'easeInOut',
                    delay,
                },
                fill: {
                    duration: 0.3, // Slightly longer for smoother fill
                    ease: 'easeOut', // Smoother easing for fill only
                    delay: delay + 0.5, // Keep original timing
                },
                stroke: {
                    duration: 0.2,
                    delay: delay + 0.5,
                },
                strokeWidth: {
                    duration: 0.2,
                    delay: delay + 0.5,
                },
            },
        },
    })

    // Special variant for vertical lines (bottom to top)
    const createVerticalPathVariants = (delay: number) => ({
        initial: {
            pathLength: 0,
            fill: 'transparent',
            stroke: 'currentColor',
            strokeWidth: 1,
        },
        animate: {
            pathLength: 1,
            fill: 'currentColor',
            stroke: 'transparent',
            strokeWidth: 0,
            transition: {
                pathLength: {
                    duration: 0.6,
                    ease: 'easeInOut',
                    delay,
                },
                fill: {
                    duration: 0.3, // Slightly longer for smoother fill
                    ease: 'easeOut', // Smoother easing for fill only
                    delay: delay + 0.5, // Keep original timing
                },
                stroke: {
                    duration: 0.2,
                    delay: delay + 0.5,
                },
                strokeWidth: {
                    duration: 0.2,
                    delay: delay + 0.5,
                },
            },
        },
    })

    const logoVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
    }

    return (
        <motion.div
            className={`muik-logo ${sizeClass} ${className}`}
            variants={animated ? logoVariants : undefined}
            initial={animated ? 'initial' : undefined}
            animate={animated ? 'animate' : undefined}
        >
            <svg
                width="58"
                height="31"
                viewBox="0 0 58 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="muik-logo__svg"
            >
                {/* M left vertical line - Black (First: 0s delay) */}
                <motion.path
                    d="M0.214539 5.33332C0.214539 3.86056 1.40845 2.66666 2.88121 2.66666V2.66666C4.35396 2.66666 5.54787 3.86056 5.54787 5.33332V26.6667C5.54787 28.1394 4.35396 29.3333 2.88121 29.3333V29.3333C1.40845 29.3333 0.214539 28.1394 0.214539 26.6667V5.33332Z"
                    fill="black"
                    variants={
                        animated ? createVerticalPathVariants(0) : undefined
                    }
                    initial={animated ? 'initial' : undefined}
                    animate={animated ? 'animate' : undefined}
                    style={{ color: 'black' }}
                />

                {/* U curved bottom - Blue (Second: 0.6s delay) */}
                <motion.path
                    d="M5.54787 5.33332C5.54787 8.88242 9.37172 13.3333 16.2145 13.3333C23.0574 13.3333 26.8812 8.88242 26.8812 5.33332V5.33332C26.8812 3.86056 28.0751 2.66666 29.5479 2.66666V2.66666C31.0206 2.66666 32.2145 3.86056 32.2145 5.33332V5.33332C32.2145 12.6971 25.0511 18.6667 16.2145 18.6667C7.37798 18.6667 0.214539 12.6971 0.214539 5.33332V5.33332C0.214539 3.86056 1.40845 2.66666 2.88121 2.66666V2.66666C4.35396 2.66666 5.54787 3.86056 5.54787 5.33332V5.33332Z"
                    fill="#3B82F6"
                    variants={animated ? createPathVariants(0.6) : undefined}
                    initial={animated ? 'initial' : undefined}
                    animate={animated ? 'animate' : undefined}
                    style={{ color: '#3B82F6' }}
                />

                {/* I vertical line bottom - Black (Third: 1.2s delay) */}
                <motion.path
                    d="M32.2145 26.6667C32.2145 28.1394 31.0206 29.3333 29.5479 29.3333V29.3333C28.0751 29.3333 26.8812 28.1394 26.8812 26.6667V23.2786C27.6664 23.7336 28.575 24 29.5479 24C30.5207 24 31.4293 23.7336 32.2145 23.2786V26.6667Z"
                    fill="black"
                    variants={
                        animated ? createVerticalPathVariants(1.2) : undefined
                    }
                    initial={animated ? 'initial' : undefined}
                    animate={animated ? 'animate' : undefined}
                    style={{ color: 'black' }}
                />

                {/* K main vertical line - Blue (Fourth: 1.8s delay) */}
                <motion.path
                    d="M34.8812 5.33332C34.8812 3.86056 36.0751 2.66666 37.5479 2.66666V2.66666C39.0206 2.66666 40.2145 3.86056 40.2145 5.33332V26.6667C40.2145 28.1394 39.0206 29.3333 37.5479 29.3333V29.3333C36.0751 29.3333 34.8812 28.1394 34.8812 26.6667V5.33332Z"
                    fill="#3B82F6"
                    variants={
                        animated ? createVerticalPathVariants(1.8) : undefined
                    }
                    initial={animated ? 'initial' : undefined}
                    animate={animated ? 'animate' : undefined}
                    style={{ color: '#3B82F6' }}
                />

                {/* K diagonal stroke 1 - Black (Fifth: 2.4s delay) */}
                <motion.path
                    d="M37.1906 19.2855C35.9152 18.5491 35.4782 16.9182 36.2145 15.6427C36.9509 14.3673 38.5818 13.9303 39.8573 14.6667L54.8812 24.7145C56.1566 25.4509 56.5936 27.0818 55.8573 28.3573C55.1209 29.6327 53.49 30.0697 52.2145 29.3333L37.1906 19.2855Z"
                    fill="black"
                    variants={animated ? createPathVariants(2.4) : undefined}
                    initial={animated ? 'initial' : undefined}
                    animate={animated ? 'animate' : undefined}
                    style={{ color: 'black' }}
                />

                {/* K diagonal stroke 2 - Black (Sixth: 3.0s delay) */}
                <motion.path
                    d="M40.5381 18.4096C39.4967 19.451 37.8082 19.451 36.7668 18.4096C35.7254 17.3682 35.7254 15.6797 36.7668 14.6383L50.3608 2.7269C51.4022 1.6855 53.0906 1.6855 54.132 2.7269C55.1734 3.7683 55.1734 5.45674 54.132 6.49813L40.5381 18.4096Z"
                    fill="black"
                    variants={animated ? createPathVariants(3.0) : undefined}
                    initial={animated ? 'initial' : undefined}
                    animate={animated ? 'animate' : undefined}
                    style={{ color: 'black' }}
                />

                {/* I dot - Blue (Last: 3.8s delay) */}
                <motion.circle
                    cx="29.5479"
                    cy="18.6667"
                    r="2.66667"
                    fill="#3B82F6"
                    variants={
                        animated
                            ? {
                                  initial: { scale: 0, opacity: 0 },
                                  animate: {
                                      scale: 1,
                                      opacity: 1,
                                      transition: {
                                          delay: 3.8,
                                          duration: 0.4,
                                          ease: 'backOut',
                                      },
                                  },
                              }
                            : undefined
                    }
                    initial={animated ? 'initial' : undefined}
                    animate={animated ? 'animate' : undefined}
                />
            </svg>
        </motion.div>
    )
}
