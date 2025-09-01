import './Button.scss'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { ButtonProps } from '../types'

// Import shared animation variants
import { fadeUpVariants } from '../animations/motionVariants'

const STYLES = ['btn--primary', 'btn--secondary']

const SIZE = ['btn--lg', 'btn--md']

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
            {iconLeft && React.isValidElement(iconLeft) && (
                <span className="btn__icon btn__icon--left">
                    {React.cloneElement(iconLeft as React.ReactElement<any>, {
                        className: 'h-5 w-5',
                    })}
                </span>
            )}

            {children}

            {iconRight && React.isValidElement(iconRight) && (
                <span className="btn__icon btn__icon--right">
                    {React.cloneElement(iconRight as React.ReactElement<any>, {
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
