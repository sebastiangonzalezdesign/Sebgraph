import React, { useState, useEffect } from 'react'
import { Aleph } from '../../dataPortfolio'
import { trackPageView } from '../../services/analytics'
import SEO from '../../components/SEO'
import { seoConfig } from '../../seoConfig'
import BackButton from '../../components/BackButton'
import ImageModalZoom from '../../components/ImageModalZoom'
import {
    CheckIcon,
    ChartBarIcon,
    ClockIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const AlephDS = () => {
    const [dataPortfolio] = useState(Aleph)

    useEffect(() => {
        trackPageView('/projects/aleph')
    }, [])

    // Dynamically load project styles to reduce critical CSS in prerender
    useEffect(() => {
        import('./ProjectStyles.scss')
    }, [])

    return (
        <>
            <SEO
                {...seoConfig.aleph}
                structuredData={seoConfig.aleph.structuredData}
            />
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    <BackButton />
                    {/* Section porfolio header */}
                    <div className="modal__header modal__header-aleph">
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
                        <article className="project-info__container">
                            <img
                                className="project-info__img"
                                src="https://sebastiangonzalez.design/images/projects/aleph/project.png"
                                loading="lazy"
                                width={1000}
                                height={360}
                                alt="Geospatial"
                            />
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
                        <div className="modal__role-tags">
                            <span className="modal__role-tag">
                                Design Systems
                            </span>
                            <span className="modal__role-tag">Tokens</span>
                            <span className="modal__role-tag">
                                Cross-platform
                            </span>
                            <span className="modal__role-tag">
                                Accessibility
                            </span>
                        </div>
                        <p
                            className="paragraph__100--bold"
                            style={{ marginBottom: '1rem' }}
                        >
                            Focus: Built a cross-platform design system from
                            scratch to unify map-based tools, improving design
                            consistency and developer efficiency by 30%.
                        </p>
                        <div className="modal__collaboration-callout">
                            <p className="paragraph__200--medium">
                                <strong>Collaboration:</strong> Partnered with 4
                                engineers and 2 designers to align component
                                specs between Figma and React, establishing
                                versioning and documentation workflow for system
                                updates.
                            </p>
                        </div>
                    </section>

                    {/* <!-- Section define --> */}
                    <section className="modal__define__box">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.titleChallenge}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.challengeDescription}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/Results.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/Results.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/Results.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1117}
                                    alt="Structure"
                                />
                            </picture>
                        </ImageModalZoom>
                        <article className="modal__define__boxes">
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold ">
                                    {dataPortfolio.goalTitle}
                                </h3>

                                <ol className="modal__define__goal-list">
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.goal1}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.goal2}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.goal3}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.goal4}
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </section>

                    {/* Section Journey */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.journeyTitle}
                            </h1>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.journeyDescription}
                            </p>
                        </article>
                    </section>

                    {/* Section Insights */}
                    <section className="modal__template">
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.insightsTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.insightsDescription}
                            </p>

                            <div className="modal__bullets-section">
                                <h3 className="heading__300--bold ">
                                    {dataPortfolio.findingsTitle}
                                </h3>

                                <ol className="modal__define__goal-list">
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.finding1}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.finding2}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.finding3}
                                    </li>
                                </ol>
                            </div>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/inventory.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/inventory.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/inventory.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1117}
                                    alt="inventory"
                                />
                            </picture>
                        </ImageModalZoom>
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.ideationTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.ideationDescription}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/Structure.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/Structure.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/Structure.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1117}
                                    alt="Structure"
                                />
                            </picture>
                        </ImageModalZoom>
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.conceptToRealityTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.conceptToRealityDescription}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/Colors.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/Colors.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/Colors.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1117}
                                    alt="Structure"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/Colors2.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/Colors2.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/Colors2.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1117}
                                    alt="Structure"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/Typography.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/Typography.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/Typography.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1800}
                                    alt="Structure"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/Spacings.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/Spacings.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/Spacings.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1117}
                                    alt="Structure"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/Imagery.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/Imagery.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/Imagery.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1117}
                                    alt="Structure"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* Section Components */}
                    <section className="modal__template">
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.componentsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.componentsDescription}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/Component-List.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/Component-List.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/Component-List.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1117}
                                    alt="Structure"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/Basic-Components.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/Basic-Components.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/Basic-Components.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1117}
                                    alt="Structure"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/aleph/Complex-Components.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/aleph/Complex-Components.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/aleph/Complex-Components.png"
                                    loading="lazy"
                                    width={2000}
                                    height={1117}
                                    alt="Structure"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* <!-- Ending --> */}
                    <section className="modal__other-projects modal__end">
                        <article className="modal__secondary-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.resultsTitle}
                            </h1>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.resultsDescription}
                            </p>
                            <ul className="p-20">
                                <li className="mt-20">
                                    <strong>
                                        {dataPortfolio.strongBullet1}
                                    </strong>
                                    &nbsp;
                                    {dataPortfolio.contentBullet1}
                                </li>
                                <br />
                                <li>
                                    <strong>
                                        {dataPortfolio.strongBullet2}
                                    </strong>
                                    &nbsp;
                                    {dataPortfolio.contentBullet2}
                                </li>
                                <br />
                                <li>{dataPortfolio.contentBullet3}</li>
                            </ul>
                        </article>

                        {/* Measurable Impact */}
                        <div className="modal__impact-highlight">
                            <h4
                                className="heading__200--bold"
                                style={{ marginBottom: '1rem' }}
                            >
                                Key Impact & Results
                            </h4>
                            <ul className="paragraph__200--medium modal__impact-list">
                                <li>
                                    <ChartBarIcon className="impact-icon" />
                                    <span>
                                        Reduced UI inconsistency across 3
                                        geospatial applications by 65%
                                    </span>
                                </li>
                                <li>
                                    <CheckIcon className="impact-icon" />
                                    <span>
                                        Accelerated component adoption by
                                        engineering teams by 40%
                                    </span>
                                </li>
                                <li>
                                    <ClockIcon className="impact-icon" />
                                    <span>
                                        Cut design review cycles in half through
                                        standardized patterns
                                    </span>
                                </li>
                                <li>
                                    <ShieldCheckIcon className="impact-icon" />
                                    <span>
                                        Improved WCAG 2.1 compliance across all
                                        map interfaces
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.reflectionsTile}
                            </h3>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.reflectionsDescription}
                            </p>
                        </article>
                        <article className="modal__text-box">
                            <h2 className="display__200--regular modal__title modal__end__text">
                                Thank you for exploring this project
                            </h2>
                        </article>
                    </section>
                </section>
            ))}
        </>
    )
}

export default AlephDS
