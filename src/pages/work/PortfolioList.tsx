import React from 'react'
import './PortfolioList.scss'

// Props definition
interface PortfolioListProps {
    id: string // Adjust the type based on your use case
    title: string
    active: boolean
    handleTabChange: (id: string) => void
}

export default function PortfolioList({
    id,
    title,
    active,
    handleTabChange,
}: PortfolioListProps) {
    return (
        <React.Fragment>
            <input
                type="radio"
                id={`radio-${id}`}
                name="tabs"
                checked={active}
                onChange={() => handleTabChange(id)} // Call the function to change the tab
                style={{ display: 'none' }} // Hide the radio input
            />
            <label
                className={`section-portfolio__tab ${active ? 'active' : ''}`}
                htmlFor={`radio-${id}`} // Connect the label to the radio input
            >
                {title}
            </label>
        </React.Fragment>
    )
}
