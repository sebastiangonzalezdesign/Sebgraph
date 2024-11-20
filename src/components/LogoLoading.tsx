import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './LogoLoading.scss'

// Framer Motion Variables
const tickVariants = {
    pathOne: {
        pathLength: [0, 1, 1, 0], // Animate to halfway, pause, and then back to 0
        transition: {
            duration: 3, // Total duration for pathOne
            ease: 'easeInOut',
            times: [0, 0.25, 0.75, 1], // Control the timing: pause in the middle
            repeat: Infinity, // Repeat the animation
        },
    },
    pathTwo: {
        pathLength: [0, 1, 1, 0], // Animate for pathTwo
        transition: {
            duration: 3, // Duration for pathTwo
            ease: 'easeInOut',
            delay: 0.2, // Delay before pathTwo starts after pathOne
            repeat: Infinity, // Repeat the animation
        },
    },
}

//Gradient
const gradientVariants = {
    animate: {
        stopColor: [
            'hsl(220, 96%, 87%)',
            'hsl(160, 76%, 80%)',
            'hsl(260, 92%, 95%)',
        ], // Gradient colors
        transition: {
            duration: 3, // Length of time for the animation
            ease: 'easeInOut',
            repeat: Infinity, // Repeat forever
            repeatType: 'reverse' as 'reverse', // Reverse the animation to go back and forth
        },
    },
}

const LogoLoading = () => {
    const [animationState, setAnimationState] = useState({
        pathOne: 'pathOne',
        pathTwo: 'pathTwo',
    })

    useEffect(() => {
        const loopAnimations = () => {
            setAnimationState((prev) => ({
                pathOne: prev.pathOne,
                pathTwo: 'pathTwo',
            }))
        }

        const timer = setInterval(loopAnimations, 6000) // Adjust for total duration

        return () => clearInterval(timer)
    }, [])

    return (
        <motion.div className="logo-loading">
            <motion.div className="logo-loading__container" />
            <motion.svg
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="logo-loading__paths"
            >
                <defs>
                    <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <motion.stop
                            offset="0%"
                            variants={gradientVariants}
                            animate="animate"
                        />
                        <motion.stop
                            offset="100%"
                            variants={gradientVariants}
                            animate="animate"
                        />
                    </linearGradient>
                </defs>
                {/* First Path */}
                <motion.path
                    className="logo-loading__paths"
                    d="M23.0917 11.2273H1.7699C1.67993 11.2273 1.5 11.3182 1.5 11.5V27.2273C1.5 27.3182 1.58997 27.5 1.7699 27.5H19.8114"
                    fill="transparent"
                    stroke="url(#gradient)" // Apply CSS gradient
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    variants={tickVariants}
                    animate={animationState.pathTwo}
                />
                {/* Second Path */}
                <motion.path
                    className="logo-loading__paths"
                    d="M27.41 1.5H1.7699C1.58997 1.5 1.5 1.59091 1.5 1.77273V5.77273C1.5 5.86364 1.58997 6.04545 1.7699 6.04545H27.2301C27.3201 6.04545 27.5 6.13636 27.5 6.31818V27.2273C27.5 27.4091 27.2301 27.5909 27.0502 27.4091L15.7249 16.8636C15.545 16.6818 15.3651 16.5909 15.0952 16.5909H6.9083"
                    fill="transparent"
                    stroke="url(#gradient)" // Apply CSS gradient
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    variants={tickVariants}
                    animate={animationState.pathOne}
                />
            </motion.svg>
        </motion.div>
    )
}

export default LogoLoading
