import React, { Fragment, useState, useEffect } from 'react'
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
                    {/* Section portfolio header */}
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

                    {/* Introduction Section */}
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
                            </div>
                        </article>
                    </section>

                    {/* Focus Summary */}
                    <section className="modal__tldr-section">
                        <p
                            className="paragraph__100--bold"
                            style={{ marginBottom: '1rem' }}
                        >
                            Focus: {dataPortfolio.focusContent}
                        </p>
                        <div className="modal__collaboration-callout">
                            <p className="paragraph__200--medium">
                                <strong>From system to implementation:</strong>{' '}
                                {dataPortfolio.implementationContent}
                            </p>
                        </div>
                    </section>

                    {/* Technical Approach Section */}
                    <section className="modal__define__box">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.technicalTitle}
                            </h1>
                        </article>
                        <article className="modal__define__boxes modal__define__boxes--grid2x2">
                            {/* Tech Block 1 */}
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold">
                                    {dataPortfolio.techBlock1Title}
                                </h3>
                                <p className="paragraph__100--regular modal__paragraph">
                                    {dataPortfolio.techBlock1Content}
                                </p>
                            </div>

                            {/* Tech Block 2 */}
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold">
                                    {dataPortfolio.techBlock2Title}
                                </h3>
                                <p className="paragraph__100--regular modal__paragraph">
                                    {dataPortfolio.techBlock2Content}
                                </p>
                            </div>

                            {/* Tech Block 3 */}
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold">
                                    {dataPortfolio.techBlock3Title}
                                </h3>
                                <p className="paragraph__100--regular modal__paragraph">
                                    {dataPortfolio.techBlock3Content}
                                </p>
                            </div>

                            {/* Tech Block 4 */}
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold">
                                    {dataPortfolio.techBlock4Title}
                                </h3>
                                <p className="paragraph__100--regular modal__paragraph">
                                    {dataPortfolio.techBlock4Content}
                                </p>
                            </div>
                        </article>
                    </section>

                    {/* Accessibility Section */}
                    <section className="modal__define__box modal__define__box--horizontal">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.accessibilityTitle}
                            </h1>
                        </article>
                        <article className="modal__define__boxes">
                            <div className="modal__define__box-goals">
                                <p className="paragraph__100--medium modal__paragraph">
                                    {dataPortfolio.accessibilityContent}
                                </p>
                            </div>
                        </article>
                    </section>

                    {/* Try the System Section */}
                    <section className="modal__define__box modal__define__box--horizontal">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.trySystemTitle}
                            </h1>
                        </article>
                        <article className="modal__define__boxes">
                            <div className="modal__define__box-goals">
                                <p className="paragraph__100--medium modal__paragraph">
                                    {dataPortfolio.trySystemContent}
                                </p>
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
                                </div>
                                <p
                                    className="paragraph__200--medium"
                                    style={{ marginTop: '0.75rem' }}
                                >
                                    {dataPortfolio.trySystemNote}
                                </p>
                            </div>
                        </article>
                    </section>

                    {/* Why Make Motion a System Section */}
                    <section className="modal__define__box modal__define__box--horizontal">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.whyMotionTitle}
                            </h1>
                        </article>
                        <article className="modal__define__boxes">
                            <div className="modal__define__box-goals">
                                <p className="paragraph__100--medium modal__paragraph">
                                    {dataPortfolio.whyMotionContent}
                                </p>
                                <ol className="modal__define__goal-list">
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.whyMotionBenefit1}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.whyMotionBenefit2}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.whyMotionBenefit3}
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </section>

                    {/* What I Learned Section */}
                    <section className="modal__define__box modal__define__box--horizontal">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.learnedTitle}
                            </h1>
                        </article>
                        <article className="modal__define__boxes">
                            <div className="modal__define__box-goals">
                                <p className="paragraph__100--medium modal__paragraph">
                                    {dataPortfolio.learnedContent1}
                                </p>
                                <p className="paragraph__100--medium modal__paragraph">
                                    {dataPortfolio.learnedContent2}
                                </p>
                            </div>
                        </article>
                    </section>

                    {/* Thank You Section */}
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
