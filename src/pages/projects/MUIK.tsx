import React, { Fragment, useState, useEffect } from 'react'
import { MUIK as MUIKDS } from '../../dataPortfolio'
import { trackPageView } from '../../services/analytics'
import BackButton from '../../components/BackButton'
import SEO from '../../components/SEO'
import { seoConfig } from '../../seoConfig'
import { Button } from '../../components/Button'
import {
    ArrowTopRightOnSquareIcon,
    BoltIcon,
    EyeIcon,
    CursorArrowRaysIcon,
} from '@heroicons/react/24/outline'
import { MUIKLogo } from '../../components/MUIKLogo'

const MUIK = () => {
    const [dataPortfolio] = useState(MUIKDS)

    useEffect(() => {
        trackPageView('/projects/MUIK')
    }, [])

    // Dynamically import project styles to avoid inflating critical CSS
    useEffect(() => {
        import('./ProjectStyles.scss')
    }, [])

    return (
        <Fragment>
            <SEO
                {...seoConfig.muikProject}
                structuredData={seoConfig.muikProject.structuredData}
            />
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    <BackButton />
                    {/* Section porfolio header */}
                    <div className="modal__header modal__header-MUIK">
                        <div className="modal__header__text-box">
                            <h1 className="display__200--bold modal__header__title">
                                {dataPortfolio.headTitle}
                            </h1>
                            <article className="modal__header__info-content">
                                <p className="paragraph__100--medium">
                                    <strong> {dataPortfolio.roleTitle} </strong>
                                    {dataPortfolio.role}
                                </p>
                                <p className="paragraph__100--medium">
                                    <strong> {dataPortfolio.dateTitle} </strong>
                                    {dataPortfolio.date}
                                </p>
                                <p className="paragraph__100--medium">
                                    <strong>
                                        {' '}
                                        {dataPortfolio.companyTitle}{' '}
                                    </strong>
                                    {dataPortfolio.company}
                                </p>
                            </article>
                        </div>
                    </div>

                    {/* <!-- Section project info --> */}
                    <section className="modal__project-info">
                        <article className="project-info__container MUIK-container">
                            <MUIKLogo className="MUIKLogo" />
                            <div className="project-info__text-box">
                                <span className="paragraph__300--medium">
                                    {dataPortfolio.subtitleResume}
                                </span>
                                <h3 className="heading__300--bold project-info__name">
                                    {dataPortfolio.titleResume}
                                </h3>
                                <p className="paragraph__100--medium">
                                    {dataPortfolio.contentResume}
                                </p>
                                <ul className="p-20 list-MUIK">
                                    <li className="mt-20">
                                        {dataPortfolio.bullet1}
                                    </li>

                                    <li>{dataPortfolio.bullet2}</li>

                                    <li>{dataPortfolio.bullet3}</li>
                                    <li>{dataPortfolio.bullet4}</li>
                                </ul>
                            </div>
                        </article>
                    </section>

                    {/* Focus Summary */}
                    <section className="modal__tldr-section">
                        <div className="modal__role-tags">
                            <span className="modal__role-tag">
                                Motion Design Systems
                            </span>
                            <span className="modal__role-tag">
                                Animation Tokens
                            </span>
                            <span className="modal__role-tag">
                                React + Framer Motion
                            </span>
                            <span className="modal__role-tag">
                                Accessibility
                            </span>
                        </div>
                        <p
                            className="paragraph__100--bold"
                            style={{ marginBottom: '1rem' }}
                        >
                            Focus: Focused on making motion reusable, tokenized,
                            and accessible — defining animation tokens for
                            easing, duration, and scale to standardize motion
                            behaviors across apps.
                        </p>
                        <div className="modal__collaboration-callout">
                            <p className="paragraph__200--medium">
                                <strong>Live Implementation:</strong>{' '}
                                Interactive demo built with React and showcases
                                motion consistency principles. Helps reduce
                                custom animation work and improves consistency
                                across design teams.
                            </p>
                        </div>
                    </section>

                    {/* Updated Project Section */}
                    <section
                        className="modal__project-info"
                        style={{ marginTop: '2rem' }}
                    >
                        <article className="project-info__container">
                            <div className="project-info__text-box">
                                <div className="modal__button-group">
                                    <Button
                                        className="modal__button-project"
                                        href="https://motion.sebastiangonzalez.design/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Visit the live MUIK project (opens in new tab)"
                                        iconRight={
                                            <ArrowTopRightOnSquareIcon />
                                        }
                                    >
                                        Visit the live project
                                    </Button>
                                    <Button
                                        className="modal__button-project"
                                        href="/motion-ui-kit"
                                        aria-label="Learn more about Motion UI Kit"
                                        buttonStyle="btn--secondary"
                                    >
                                        Learn more about Motion UI Kit
                                    </Button>
                                </div>
                                <p
                                    className="paragraph__100--medium"
                                    style={{ marginTop: '0.75rem' }}
                                >
                                    Note: the interactive demo is hosted on a
                                    separate subdomain (
                                    <a
                                        href="https://motion.sebastiangonzalez.design"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        motion.sebastiangonzalez.design
                                    </a>
                                    ). This demo is maintained independently but
                                    is part of the Motion UI Kit project.
                                </p>
                            </div>
                        </article>
                    </section>

                    {/* Motion System Impact */}
                    <section className="modal__other-projects modal__end">
                        <div className="modal__impact-highlight">
                            <h4
                                className="heading__200--bold"
                                style={{ marginBottom: '1rem' }}
                            >
                                Motion System Benefits
                            </h4>
                            <p
                                className="paragraph__200--medium"
                                style={{ marginBottom: '1rem' }}
                            >
                                Helps standardize motion behaviors across apps —
                                improving consistency and reducing custom
                                animation work.
                            </p>
                            <ul className="paragraph__200--medium modal__impact-list">
                                <li>
                                    <BoltIcon className="impact-icon" />
                                    <span>
                                        Tokenized animation properties for
                                        consistent timing and easing
                                    </span>
                                </li>
                                <li>
                                    <EyeIcon className="impact-icon" />
                                    <span>
                                        Built-in accessibility considerations
                                        with reduced motion support
                                    </span>
                                </li>
                                <li>
                                    <CursorArrowRaysIcon className="impact-icon" />
                                    <span>
                                        Reusable motion patterns that scale
                                        across design teams
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* <!-- Section End --> */}

                    <article className="modal__text-box">
                        <h2 className="display__200--regular modal__title modal__end__text">
                            Thank you
                        </h2>
                    </article>
                </section>
            ))}
        </Fragment>
    )
}

export default MUIK
