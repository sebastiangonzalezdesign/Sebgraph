import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.scss'
import PortfolioList from './PortfolioList'
import {
    allPortfolio,
    uiVisualPortfolio,
    codePortfolio,
    dsPortfolio,
} from '../../data'
import { Button } from '../../components/Button'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Portfolio() {
    const [selected, setSelected] = useState('all')
    const [data, setData] = useState([])
    const [delayedSelected, setDelayedSelected] = useState('all')

    const labelRefs = useRef([]) // Store references to each label

    // Scroll animation
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    let refProject = useRef()

    //Project list
    const list = [
        { id: 'all', title: 'All' },
        { id: 'ui/visual', title: 'UI/Visual' },
        { id: 'ds', title: 'DS' },
        { id: 'code', title: 'Code' },
    ]

    // Update portfolio data based on the selected tab
    useEffect(() => {
        switch (selected) {
            case 'all':
                setData(allPortfolio)
                break
            case 'ui/visual':
                setData(uiVisualPortfolio)
                break
            case 'ds':
                setData(dsPortfolio)
                break
            case 'code':
                setData(codePortfolio)
                break
            default:
                setData(allPortfolio)
        }
    }, [selected])

    //Delay click Tab
    const handleTabChange = (id) => {
        // Set the selected tab immediately
        setSelected(id)

        // Delay the application of the active class
        setTimeout(() => {
            setDelayedSelected(id)
        }, 160) // Adjust delay as needed to match the glider movement duration
    }

    return (
        <>
            <section id="work" className="section-portfolio">
                <div className="section-portfolio__heading-container">
                    {/* <div className="section-portfolio__divider" /> */}
                    <h2 className="heading__100--bold section-portfolio__heading">
                        Work
                        <span className="section-portfolio__heading-decoration"></span>
                    </h2>
                </div>

                <div className="section-portfolio__projects-container">
                    {/* Rendering the tabs using radio inputs */}
                    <div className="section-portfolio__tabs">
                        {list.map((item) => (
                            <React.Fragment key={item.id}>
                                {/* Radio input for tab selection */}
                                <input
                                    type="radio"
                                    id={`radio-${item.id}`}
                                    name="tabs"
                                    checked={selected === item.id}
                                    onChange={() => handleTabChange(item.id)}
                                    style={{ display: 'none' }}
                                />
                                <label
                                    className={`section-portfolio__tab ${
                                        delayedSelected === item.id
                                            ? 'active'
                                            : ''
                                    }`}
                                    htmlFor={`radio-${item.id}`}
                                >
                                    {item.title}
                                </label>
                            </React.Fragment>
                        ))}
                        <span
                            className="section-portfolio__glider"
                            style={{
                                transform: `translateX(${
                                    list.findIndex(
                                        (item) => item.id === selected
                                    ) * 100
                                }%)`,
                            }}
                        ></span>
                    </div>

                    <article
                        className="section-portfolio__container-grid"
                        data-aos="fade-up"
                    >
                        {data
                            .sort((a, b) => a.order - b.order)
                            .map((d) => (
                                <Link
                                    to={`/projects/${d.key}`}
                                    ref={refProject}
                                    id={d.id}
                                    path={d.key}
                                    key={d.id}
                                    className={`section-portfolio__card-project link ${d.bgClass}`}
                                >
                                    <div className="section-portfolio__text-card">
                                        <div className="head-text">
                                            <h2
                                                id={d.id}
                                                className="heading__200--bold"
                                            >
                                                {d.title}
                                            </h2>
                                            <span className="paragraph__200--medium overview">
                                                {d.overview}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="section-portfolio__img-container">
                                        <img
                                            className="section-portfolio__img"
                                            src={d.img}
                                            alt="Tech"
                                            loading="lazy"
                                        />
                                    </div>
                                </Link>
                            ))}
                    </article>
                </div>
            </section>
        </>
    )
}
