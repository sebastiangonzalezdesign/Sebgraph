import React from 'react'
import './PortfolioList.scss'

/* export default function PortfolioList({ id, title, active, setSelected }) {
    return (
        <li
            key={id}
            className={
                active
                    ? 'portfolioList label__100--bold  active'
                    : 'portfolioList label__100--regular'
            }
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
 */

export default function PortfolioList({ id, title, active, setSelected }) {
    return (
        <div>
            <input
                type="radio"
                id={`radio-${id}`}
                name="tabs"
                checked={active}
                onChange={() => setSelected(id)}
                style={{ display: 'none' }} // Hide the radio button
            />
            <label
                className={`tab ${active ? 'active' : ''}`}
                htmlFor={`radio-${id}`}
            >
                {title}
                {active && <span className="notification">2</span>}
            </label>
        </div>
    )
}
