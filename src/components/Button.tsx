import './Button.scss'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

// Framer Motion Variables
const fadeUpVariants = {
    initial: { opacity: 0, y: 200 }, // Initial state
    animate: { opacity: 1, y: 0 }, // Animation state
    exit: { opacity: 0, y: 0 }, // Exit state
}

const STYLES = ['btn--primary', 'btn--secondary']

const SIZE = ['btn--lg', 'btn--md']

interface ButtonProps {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    onMouseOver?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onMouseOut?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>
    buttonStyle?: 'btn--primary' | 'btn--secondary'
    buttonSize?: 'btn--lg' | 'btn--md'
    iconLeft?: React.ReactElement
    iconRight?: React.ReactElement
    fixedPosition?: boolean
    className?: string
    disabled?: boolean
    href?: string // Add href prop for links
    target?: string // Add target prop for link behavior
    rel?: string // Add rel prop for security
}

export const Button: React.FC<ButtonProps> = ({
    children,
    type = 'button', // Default to 'button'
    onClick = () => {}, // Default no-op function
    onMouseOver = () => {}, // Default no-op function
    onMouseOut = () => {}, // Default no-op function
    buttonStyle = 'btn--primary', // Default style
    buttonSize = 'btn--lg', // Default size
    iconLeft,
    iconRight,
    fixedPosition = false, // Default to false
    className = '',
    disabled = false, // Add default value for disabled prop
    href,
    target = '_blank', // Default to open in new tab
    rel = 'noopener noreferrer', // Default security attributes
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0]

    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]

    const buttonContent = (
        <div className="btn-icon-container">
            {iconLeft && (
                <span className="btn__icon btn__icon--left">
                    {React.cloneElement(iconLeft, { className: 'h-5 w-5' })}
                </span>
            )}

            {children}

            {iconRight && (
                <span className="btn__icon btn__icon--right">
                    {React.cloneElement(iconRight, {
                        className: 'h-5 w-5',
                    })}
                </span>
            )}
        </div>
    )

    // If href is provided, render as a link
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={`btn ${checkButtonStyle} ${checkButtonSize} ${className} ${
                    fixedPosition ? 'btn--fixed' : ''
                } ${disabled ? 'btn--disabled' : ''}`}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                style={{ textDecoration: 'none' }}
            >
                {buttonContent}
            </a>
        )
    }

    // Otherwise, render as a button
    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${className} ${
                fixedPosition ? 'btn--fixed' : ''
            } ${disabled ? 'btn--disabled' : ''}`}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            type={type}
            disabled={disabled} // Add the disabled attribute
        >
            {buttonContent}
        </button>
    )
}

// Export the ButtonProps type
export type { ButtonProps }
