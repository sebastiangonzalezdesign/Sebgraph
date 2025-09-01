import { Variants } from 'framer-motion'

// Common animation variants for consistent motion across the app

export const fadeUpVariants: Variants = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 20,
    },
}

export const fadeInVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

export const slideInFromLeftVariants: Variants = {
    initial: {
        opacity: 0,
        x: -60,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: -20,
    },
}

export const slideInFromRightVariants: Variants = {
    initial: {
        opacity: 0,
        x: 60,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: 20,
    },
}

export const scaleInVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
    exit: {
        opacity: 0,
        scale: 0.9,
    },
}

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
}

export const pathDrawVariants: Variants = {
    initial: {
        pathLength: 0,
        opacity: 0,
    },
    animate: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: {
                duration: 2,
                ease: 'easeInOut',
            },
            opacity: {
                duration: 0.3,
            },
        },
    },
}

// Common transition configurations
export const springTransition = {
    type: 'spring',
    stiffness: 45,
    damping: 10,
}

export const smoothTransition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
}

export const quickTransition = {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1],
}

// Hover animations for interactive elements
export const hoverScale = {
    scale: 1.05,
    transition: quickTransition,
}

export const hoverLift = {
    y: -4,
    scale: 1.02,
    transition: quickTransition,
}

// Animation presets combining variants with transitions
export const fadeUpSpring = {
    variants: fadeUpVariants,
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    transition: springTransition,
}

export const fadeInSmooth = {
    variants: fadeInVariants,
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    transition: smoothTransition,
}
