import React from 'react'
import { motion } from 'framer-motion'
import './Card.scss'

interface CardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
    onClick?: () => void
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = false,
    onClick,
}) => {
    const cardClasses = `card ${className} ${hover ? 'card--hover' : ''}`

    if (onClick) {
        return (
            <motion.button
                className={`${cardClasses} card--clickable`}
                onClick={onClick}
                whileHover={hover ? { y: -4 } : undefined}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                {children}
            </motion.button>
        )
    }

    return (
        <motion.div
            className={cardClasses}
            whileHover={hover ? { y: -4 } : undefined}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            {children}
        </motion.div>
    )
}
