import { useEffect, useState } from 'react'
import { delay, motion } from 'framer-motion'
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

const LogoLoading = () => {
    // State to control the current animation
    const [animationState, setAnimationState] = useState({
        pathOne: 'pathOne',
        pathTwo: 'pathTwo',
    })

    useEffect(() => {
        // Create a loop for both animations with controlled timings
        const loopAnimations = () => {
            setAnimationState((prev) => ({
                pathOne: prev.pathOne,
                pathTwo: 'pathTwo',
            }))
        }

        // Timer for pathTwo to start after pathOne completes
        const timer = setInterval(loopAnimations, 6000) // Adjust for total duration

        return () => clearInterval(timer)
    }, [])

    return (
        <motion.div className="logo-loading">
            <motion.div
                className="box"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ['100%'],
                }}
                transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            />
            <motion.svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="paths"
            >
                {/* First Path */}
                <motion.path
                    d="M23.0917 11.2273H1.7699C1.67993 11.2273 1.5 11.3182 1.5 11.5V27.2273C1.5 27.3182 1.58997 27.5 1.7699 27.5H19.8114"
                    fill="transparent"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    variants={tickVariants}
                    animate={animationState.pathTwo} // Control animation with state
                />
                {/* Second Path */}
                <motion.path
                    d="M27.41 1.5H1.7699C1.58997 1.5 1.5 1.59091 1.5 1.77273V5.77273C1.5 5.86364 1.58997 6.04545 1.7699 6.04545H27.2301C27.3201 6.04545 27.5 6.13636 27.5 6.31818V27.2273C27.5 27.4091 27.2301 27.5909 27.0502 27.4091L15.7249 16.8636C15.545 16.6818 15.3651 16.5909 15.0952 16.5909H6.9083"
                    fill="transparent"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    variants={tickVariants}
                    animate={animationState.pathOne} // Control animation with state
                />
            </motion.svg>
        </motion.div>
    )
}
export default LogoLoading
