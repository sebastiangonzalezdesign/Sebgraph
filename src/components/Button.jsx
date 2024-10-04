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

export const Button = ({
    children,
    type,
    onClick,
    onMouseOver,
    onMouseOut,
    buttonStyle,
    buttonSize,
    iconLeft,
    iconRight,
    fixedPosition,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0]

    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]

    return (
        <button
            className={`btn  ${checkButtonStyle} ${checkButtonSize} ${
                fixedPosition ? 'btn--fixed' : ''
            }`}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            type={type}
        >
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
        </button>
    )
}
