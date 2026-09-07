import React from 'react'
import './Tag.scss'

interface TagProps {
    label: string
    variant?: 'default' | 'accent'
}

const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
    return <span className={`tag tag--${variant}`}>{label}</span>
}

export default Tag
