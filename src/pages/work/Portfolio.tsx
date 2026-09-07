import React, { useEffect, useState, useRef, forwardRef } from 'react'
import { trackEvent } from '../../services/analytics'
import { Link } from 'react-router-dom'
// Portfolio styles will be loaded dynamically to reduce critical CSS in prerender snapshots
import PortfolioList from './PortfolioList'
import Tag from '../../components/Tag'
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
    category: string
    type: string
    tags: string[]
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
    const [gliderWidth, setGliderWidth] = useState<number>(0)
    const [gliderLeft, setGliderLeft] = useState<number>(0)

    const refProject = useRef<HTMLAnchorElement | null>(null)
    const refTabsContainer = useRef<HTMLDivElement | null>(null)

    // Project list
    const list = [
        { id: 'all', title: 'All' },
        { id: 'ui/visual', title: 'UI/Visual' },
        { id: 'ds', title: 'Design Systems' },
        { id: 'code', title: 'Design + Code' },
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

    // Measure active tab width and position for glider
    useEffect(() => {
        const measureGliderDimensions = () => {
            if (refTabsContainer.current) {
                const activeTab = refTabsContainer.current.querySelector(
                    '.section-portfolio__tab.active'
                ) as HTMLElement
                if (activeTab) {
                    setGliderWidth(activeTab.offsetWidth)
                    setGliderLeft(activeTab.offsetLeft)
                }
            }
        }

        // Initial measurement
        measureGliderDimensions()

        // Re-measure on window resize
        window.addEventListener('resize', measureGliderDimensions)
        return () =>
            window.removeEventListener('resize', measureGliderDimensions)
    }, [selected])

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
                <div className="section-portfolio__tabs" ref={refTabsContainer}>
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
                            transform: `translateX(${gliderLeft}px)`,
                            width:
                                gliderWidth > 0
                                    ? `${gliderWidth}px`
                                    : undefined,
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
                                        <h3 className="heading__300--regular section-portfolio__category-type">
                                            {d.category} · {d.type}
                                        </h3>
                                        <div className="section-portfolio__tags-container">
                                            {d.tags.map((tag, tagIndex) => (
                                                <React.Fragment key={tag}>
                                                    <Tag
                                                        label={tag}
                                                        variant="default"
                                                    />
                                                    {tagIndex <
                                                        d.tags.length - 1 && (
                                                        <span className="section-portfolio__tags-separator">
                                                            ·
                                                        </span>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
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
                                            ? { fetchPriority: 'high' as any }
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
