import React, { useState, useEffect } from 'react'
import './Input.scss'

interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string
    error?: string
    variant?: 'default' | 'floating'
    validateEmail?: boolean
    onValueChange?: (value: string, isValid: boolean) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
    label,
    error: externalError,
    variant = 'floating',
    className = '',
    validateEmail = false,
    onValueChange,
    onChange,
    type,
    placeholder,
    ...props
}) => {
    const [value, setValue] = useState('')
    const [internalError, setInternalError] = useState('')
    const [touched, setTouched] = useState(false)

    // Use external error if provided, otherwise use internal error
    const displayError = externalError || (touched ? internalError : '')

    // Email validation function
    const validateEmailFormat = (email: string): string => {
        if (!email) {
            return 'Please fill out the email field.'
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address.'
        }

        return ''
    }

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValue(newValue)

        // Clear errors when user starts typing
        if (touched && internalError) {
            setInternalError('')
        }

        // Custom onChange handler
        if (onChange) {
            onChange(e)
        }

        // Validate and call onValueChange if provided
        if (onValueChange) {
            let isValid = true
            let errorMessage = ''

            if (validateEmail || type === 'email') {
                errorMessage = validateEmailFormat(newValue)
                isValid = !errorMessage
            }

            onValueChange(newValue, isValid)
        }
    }

    // Handle blur for validation
    const handleBlur = () => {
        setTouched(true)

        if (validateEmail || type === 'email') {
            const errorMessage = validateEmailFormat(value)
            setInternalError(errorMessage)
        }
    }

    const inputClasses = `input ${
        variant === 'floating' ? 'input--floating' : ''
    } ${className}`

    if (variant === 'floating' && label) {
        return (
            <div className="input__container">
                <input
                    className={inputClasses}
                    {...props}
                    type={type === 'email' ? 'text' : type}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // No placeholder for floating labels (like PasswordPage)
                    // Use required for :valid pseudo-class to work
                    required
                    autoComplete={
                        type === 'email' ? 'email' : props.autoComplete
                    }
                />
                <label className="input__label">{label}</label>
                {displayError && (
                    <span className="input__error">{displayError}</span>
                )}
            </div>
        )
    }

    return (
        <div className="input__container">
            {label && <label className="input__label--static">{label}</label>}
            <input
                className={inputClasses}
                {...props}
                type={type === 'email' ? 'text' : type}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
                // Use required for consistency
                required
                autoComplete={type === 'email' ? 'email' : props.autoComplete}
            />
            {displayError && (
                <span className="input__error">{displayError}</span>
            )}
        </div>
    )
}
