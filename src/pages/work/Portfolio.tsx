import React, { useEffect, useState, useRef, forwardRef } from 'react'
import { trackEvent } from '../../services/analytics'
import { Link } from 'react-router-dom'
// Portfolio styles will be loaded dynamically to reduce critical CSS in prerender snapshots
import PortfolioList from './PortfolioList'
import {
    allPortfolio,
    uiVisualPortfolio,
    codePortfolio,
    dsPortfolio,
} from '../../data'
import { LockClosedIcon } from '@heroicons/react/24/outline'

//Interface types
interface PortfolioItem {
    id: string
    key: string
    title: string
    overview: string
    img: string
    bgClass: string
    order: number
    showProject: 'yes' | 'no'
    protected: 'yes' | 'no'
}

const Portfolio = forwardRef<HTMLDivElement, {}>((props, ref) => {
    const [selected, setSelected] = useState<string>('all')
    const [data, setData] = useState<PortfolioItem[]>([])
    const [delayedSelected, setDelayedSelected] = useState<string>('all')

    const refProject = useRef<HTMLAnchorElement | null>(null)

    // Project list
    const list = [
        { id: 'all', title: 'All' },
        { id: 'ui/visual', title: 'UI/Visual' },
        { id: 'ds', title: 'DS' },
        { id: 'code', title: 'Code' },
    ]

    // Update portfolio data based on the selected tab
    useEffect(() => {
        let selectedPortfolio: PortfolioItem[]

        switch (selected) {
            case 'all':
                selectedPortfolio = allPortfolio
                break
            case 'ui/visual':
                selectedPortfolio = uiVisualPortfolio
                break
            case 'ds':
                selectedPortfolio = dsPortfolio
                break
            case 'code':
                selectedPortfolio = codePortfolio
                break
            default:
                selectedPortfolio = allPortfolio
        }

        // Filter projects based on the showProject property
        const visibleProjects = selectedPortfolio.filter(
            (project) => project.showProject === 'yes'
        )

        setData(visibleProjects)
    }, [selected])

    // Delay click Tab
    const handleTabChange = (id: string) => {
        setSelected(id)
        setTimeout(() => {
            setDelayedSelected(id)
        }, 160) // Adjust delay to match the glider movement duration
    }

    // Dynamically load page styles on the client to keep critical CSS smaller during prerender
    useEffect(() => {
        import('./Portfolio.scss')
    }, [])

    return (
        <section ref={ref} id="work" className="section-portfolio">
            <div className="section-portfolio__heading-container">
                <h2 className="heading__100--bold section-portfolio__heading">
                    Work
                    <span className="section-portfolio__heading-decoration"></span>
                </h2>
            </div>

            <div className="section-portfolio__projects-container">
                {/* Rendering the tabs using PortfolioList */}
                <div className="section-portfolio__tabs">
                    {list.map((item) => (
                        <PortfolioList
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            active={selected === item.id} // Check if the tab is active
                            handleTabChange={handleTabChange} // Pass the function to handle tab changes
                        />
                    ))}
                    <span
                        className="section-portfolio__glider"
                        style={{
                            transform: `translateX(${
                                list.findIndex((item) => item.id === selected) *
                                100
                            }%)`,
                        }}
                    ></span>
                </div>

                <article className="section-portfolio__container-grid">
                    {data
                        .filter((d) => d.showProject === 'yes')
                        .sort((a, b) => a.order - b.order)
                        .map((d, i) => (
                            <Link
                                to={
                                    d.protected === 'yes'
                                        ? '/projects/password-page'
                                        : `/projects/${d.key}`
                                }
                                ref={refProject}
                                id={d.id}
                                key={d.key}
                                className={`section-portfolio__card-project link ${d.bgClass}`}
                                onClick={() =>
                                    trackEvent({
                                        action: 'Open Project',
                                        category: 'Portfolio',
                                        label: d.title,
                                    })
                                }
                            >
                                <div className="section-portfolio__text-card">
                                    <div className="head-text">
                                        <h2
                                            id={d.id}
                                            className="heading__200--bold section-portfolio__title-and-icon"
                                        >
                                            {d.title}
                                            {d.protected === 'yes' && (
                                                <LockClosedIcon className="section-portfolio__title-and-icon__lock-icon" />
                                            )}
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
                                        width={600}
                                        height={360}
                                        {...(i === 0
                                            ? { fetchpriority: 'high' as any }
                                            : { loading: 'lazy' })}
                                    />
                                </div>
                            </Link>
                        ))}
                </article>
            </div>
        </section>
    )
})

export default Portfolio
