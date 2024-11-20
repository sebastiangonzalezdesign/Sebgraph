import React from 'react'
import './Chip.scss'
import '../styles/ConfigStyles/utilities/_index.scss'

interface ChipProps {
    label: string
    proficiency?: string
}

const Chip: React.FC<ChipProps> = ({ label, proficiency }) => {
    return (
        <div className="chip">
            <span className=" button__300--bold label">{label}</span>
            {proficiency && (
                <span className="proficiency paragraph__400--regular">
                    {' → ' + proficiency}
                </span>
            )}
        </div>
    )
}

export default Chip
