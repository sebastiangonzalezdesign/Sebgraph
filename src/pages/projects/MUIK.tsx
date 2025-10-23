import React, { Fragment, useState, useEffect } from 'react'
import './ProjectStyles.scss'
import { MUIK as MUIKDS } from '../../dataPortfolio'
import { trackPageView } from '../../services/analytics'
import BackButton from '../../components/BackButton'
import SEO from '../../components/SEO'
import { seoConfig } from '../../seoConfig'
import { Button } from '../../components/Button'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { MUIKLogo } from '../../components/MUIKLogo'

const MUIK = () => {
    const [dataPortfolio] = useState(MUIKDS)

    useEffect(() => {
        trackPageView('/projects/MUIK')
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
                            </div>
                        </article>
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
