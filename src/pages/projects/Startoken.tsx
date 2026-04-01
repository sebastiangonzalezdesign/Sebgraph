import React, { Fragment, useState, useEffect } from 'react'
import { Startoken as StartokenDS } from '../../dataPortfolio'
import { trackPageView } from '../../services/analytics'
import BackButton from '../../components/BackButton'
import ImageModalZoom from '../../components/ImageModalZoom'
import SEO from '../../components/SEO'
import { seoConfig } from '../../seoConfig'
import { Button } from '../../components/Button'
import Video from '../../components/Video'
import {
    ArrowTopRightOnSquareIcon,
    RocketLaunchIcon,
    BoltIcon,
    WrenchScrewdriverIcon,
    CubeTransparentIcon,
} from '@heroicons/react/24/outline'

const Startoken = () => {
    const [dataPortfolio] = useState(StartokenDS)

    useEffect(() => {
        trackPageView('/projects/startoken')
    }, [])

    // Dynamically load project styles so large CSS isn't inlined during prerender
    useEffect(() => {
        import('./ProjectStyles.scss')
    }, [])

    return (
        <Fragment>
            <SEO
                {...seoConfig.startoken}
                structuredData={seoConfig.startoken.structuredData}
            />
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    <BackButton />
                    {/* Section portfolio header */}
                    <div className="modal__header modal__header-startoken">
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

                    {/* Section project info */}
                    <section className="modal__project-info">
                        <article className="project-info__container">
                            <img
                                className="project-info__img"
                                src="https://sebastiangonzalez.design/images/projects/startoken/project-startoken.webp"
                                loading="lazy"
                                width={1000}
                                height={360}
                                alt="Startoken Design Token Pipeline"
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
                                Design Technologist
                            </span>
                            <span className="modal__role-tag">
                                W3C DTCG Tokens
                            </span>
                            <span className="modal__role-tag">
                                Zero-Dep TypeScript Engine
                            </span>
                            <span className="modal__role-tag">
                                Figma Plugin
                            </span>
                            <span className="modal__role-tag">
                                Monorepo Architecture
                            </span>
                        </div>
                        <p
                            className="paragraph__100--bold"
                            style={{ marginBottom: '1rem' }}
                        >
                            Focus: Designed and built an end-to-end token
                            pipeline that normalizes Figma variables into
                            W3C-compliant tokens, resolves aliases, extracts
                            themes, and outputs production-ready CSS/JSON/SCSS.
                        </p>
                        <div className="modal__collaboration-callout">
                            <p className="paragraph__200--medium">
                                <strong>System Architecture:</strong> Built as a
                                zero-dependency TypeScript engine
                                (@startoken/engine) shared across web app, Figma
                                plugin, and future CLI via monorepo strategy.
                            </p>
                        </div>
                    </section>

                    {/* Section 1: Context */}
                    <section className="modal__define__box">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.contextTitle}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.contextDescription}
                            </p>
                        </article>
                    </section>

                    {/* Section 2: Problem */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.problemTitle}
                            </h1>
                            <div className="modal__define__box-goals">
                                <p className="paragraph__100--regular modal__paragraph">
                                    {dataPortfolio.problemDescription}
                                </p>
                                <ol className="modal__define__goal-list">
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.problem1}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.problem2}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.problem3}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.problem4}
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </section>

                    {/* Section 3: Strategy */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.strategyTitle}
                            </h1>
                            <div className="modal__define__box-goals">
                                <p className="paragraph__100--regular modal__paragraph">
                                    {dataPortfolio.strategyDescription}
                                </p>
                                <ol className="modal__define__goal-list">
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.strategy1}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.strategy2}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.strategy3}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.strategy4}
                                    </li>
                                </ol>
                            </div>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/startoken/research.webp">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/startoken/research.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/startoken/research.webp"
                                    loading="lazy"
                                    width={1920}
                                    height={1080}
                                    alt="Startoken strategy and research"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* Section 4: Architecture */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.architectureTitle}
                            </h1>
                            <div className="modal__define__box-goals">
                                <p className="paragraph__100--regular modal__paragraph">
                                    {dataPortfolio.architectureDescription}
                                </p>
                                <p className="paragraph__100--bold">
                                    {dataPortfolio.architecturePipeline}
                                </p>
                            </div>
                        </article>

                        {/* Architecture detail: Alias Resolution */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.architectureDetail1Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.architectureDetail1}
                            </p>
                        </article>

                        {/* Architecture detail: Theme Extraction */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.architectureDetail2Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.architectureDetail2}
                            </p>
                        </article>

                        {/* Architecture detail: Deterministic Transformation */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.architectureDetail3Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.architectureDetail3}
                            </p>
                        </article>

                        {/* Architecture detail: Zero-Dependency Engine */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.architectureDetail4Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.architectureDetail4}
                            </p>
                        </article>

                        {/* Architecture detail: Theme Extraction */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.architectureDetail5Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.architectureDetail5}
                            </p>
                        </article>

                        {/* Monorepo callout */}
                        <div className="modal__collaboration-callout">
                            <p className="paragraph__200--medium">
                                <strong>Monorepo Strategy:</strong>{' '}
                                {dataPortfolio.architectureMonorepo}
                            </p>
                        </div>

                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/startoken/tech-stack.webp">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/startoken/tech-stack.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/startoken/tech-stack.webp"
                                    loading="lazy"
                                    width={1920}
                                    height={1080}
                                    alt="Startoken architecture and tech stack"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* Section 5: System Design Decisions */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.systemDecisionsTitle}
                            </h1>
                            <div className="modal__define__box-goals">
                                <p className="paragraph__100--regular modal__paragraph">
                                    {dataPortfolio.systemDecisionsDescription}
                                </p>
                            </div>
                        </article>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.systemDecision1Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.systemDecision1}
                            </p>
                        </article>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.systemDecision2Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.systemDecision2}
                            </p>
                        </article>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.systemDecision3Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.systemDecision3}
                            </p>
                        </article>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.systemDecision4Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.systemDecision4}
                            </p>
                        </article>
                    </section>

                    {/* Section 6: Execution */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.executionTitle}
                            </h1>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.executionDescription}
                            </p>
                        </article>

                        {/* Execution 1: Interactive Pipeline Demo */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.execution1Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.execution1Description}
                            </p>
                        </article>
                        <Video
                            src="https://sebastiangonzalez.design/images/projects/startoken/token-generator.mp4"
                            className="modal__video"
                            poster="https://sebastiangonzalez.design/images/projects/startoken/project-startoken.webp"
                            muted={true}
                            loop={true}
                            autoPlay={true}
                            preload="metadata"
                            loading="lazy"
                        />

                        {/* Execution 2: Figma Plugin Export */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.execution2Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.execution2Description}
                            </p>
                        </article>

                        {/* Execution 3: Token Preview */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.execution3Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.execution3Description}
                            </p>
                        </article>
                        <Video
                            src="https://sebastiangonzalez.design/images/projects/startoken/naming-playground.mp4"
                            className="modal__video"
                            poster="https://sebastiangonzalez.design/images/projects/startoken/research.webp"
                            muted={true}
                            loop={true}
                            autoPlay={true}
                            controls={false}
                            preload="metadata"
                            loading="lazy"
                        />

                        {/* Execution 4: Naming Playground */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.execution4Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.execution4Description}
                            </p>
                        </article>
                    </section>

                    {/* Section 7: Impact */}
                    <section className="modal__other-projects modal__end">
                        <article className="modal__secondary-text-box">
                            <h3 className="display__100--bold modal__subtitle">
                                {dataPortfolio.impactTitle}
                            </h3>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.impactDescription}
                            </p>
                        </article>

                        <div className="modal__impact-highlight">
                            <ul className="paragraph__200--medium modal__impact-list">
                                <li>
                                    <RocketLaunchIcon className="impact-icon" />
                                    <span>{dataPortfolio.impact1}</span>
                                </li>
                                <li>
                                    <BoltIcon className="impact-icon" />
                                    <span>{dataPortfolio.impact2}</span>
                                </li>
                                <li>
                                    <CubeTransparentIcon className="impact-icon" />
                                    <span>{dataPortfolio.impact3}</span>
                                </li>
                                <li>
                                    <WrenchScrewdriverIcon className="impact-icon" />
                                    <span>{dataPortfolio.impact4}</span>
                                </li>
                            </ul>
                        </div>

                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/startoken/early-impact.webp">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/startoken/early-impact.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/startoken/early-impact.webp"
                                    loading="lazy"
                                    width={1920}
                                    height={1080}
                                    alt="Startoken impact"
                                />
                            </picture>
                        </ImageModalZoom>

                        <Button
                            className="modal__button-project"
                            href="https://www.startoken.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit the Interactive Token Pipeline Demo (opens in new tab)"
                            iconRight={<ArrowTopRightOnSquareIcon />}
                        >
                            Interactive Token Pipeline Demo
                        </Button>
                    </section>

                    {/* Section 8: Why This Matters */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.whyThisMattersTitle}
                            </h1>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.whyThisMattersDescription}
                            </p>
                        </article>

                        <div className="modal__collaboration-callout">
                            <p className="paragraph__200--medium">
                                {dataPortfolio.whyThisMattersDetail}
                            </p>
                        </div>
                    </section>

                    {/* Section 7: What I'd Improve Next */}
                    <section className="modal__other-projects modal__end">
                        <article className="modal__secondary-text-box">
                            <h3 className="display__100--bold modal__subtitle">
                                {dataPortfolio.improvementsTitle}
                            </h3>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.improvementsDescription}
                            </p>
                            <ol className="modal__define__goal-list">
                                <li className="paragraph__200--regular modal__define__goal-item">
                                    {dataPortfolio.improvement1}
                                </li>
                                <li className="paragraph__200--regular modal__define__goal-item">
                                    {dataPortfolio.improvement2}
                                </li>
                                <li className="paragraph__200--regular modal__define__goal-item">
                                    {dataPortfolio.improvement3}
                                </li>
                                <li className="paragraph__200--regular modal__define__goal-item">
                                    {dataPortfolio.improvement4}
                                </li>
                                <li className="paragraph__200--regular modal__define__goal-item">
                                    {dataPortfolio.improvement5}
                                </li>
                            </ol>
                        </article>

                        <div className="modal__final-reflection">
                            <h4 className="paragraph__100--bold">
                                {dataPortfolio.finalReflection}
                            </h4>
                        </div>
                    </section>

                    {/* Section End */}
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

export default Startoken
