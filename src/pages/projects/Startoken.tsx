import React, { Fragment, useState, useEffect } from 'react'
import './ProjectStyles.scss'
import { Startoken as StartokenDS } from '../../dataPortfolio'
import { trackPageView } from '../../services/analytics'
import BackButton from '../../components/BackButton'
import ImageModalZoom from '../../components/ImageModalZoom'
import SEO from '../../components/SEO'
import { seoConfig } from '../../seoConfig'
import { Button } from '../../components/Button'
import Video from '../../components/Video'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const Startoken = () => {
    const [dataPortfolio] = useState(StartokenDS)

    useEffect(() => {
        trackPageView('/projects/startoken')
    }, [])

    return (
        <Fragment>
            <SEO {...seoConfig.startoken} />
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    <BackButton />
                    {/* Section porfolio header */}
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

                    {/* <!-- Section project info --> */}
                    <section className="modal__project-info">
                        <article className="project-info__container">
                            <img
                                className="project-info__img"
                                src="https://sebastiangonzalez.design/images/projects/startoken/project-startoken.webp"
                                loading="lazy"
                                alt="Design System"
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

                    {/* <!-- Section challenge --> */}
                    <section className="modal__define__box">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.titleIntroduction}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.contentIntroduction}
                            </p>
                        </article>
                        <article className="modal__define__boxes">
                            <div
                                className="modal__define__box-goals"
                                style={{ width: '100%' }}
                            >
                                <h3 className="heading__300--bold ">
                                    {dataPortfolio.goalsTitle}
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

                    {/* Section Research and concept */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.researchTitle}
                            </h1>
                            <div className="modal__define__box-goals">
                                <p className="paragraph__100--regular modal__paragraph">
                                    {dataPortfolio.researchDescription}
                                </p>
                                <ol className="modal__define__goal-list">
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.feature1}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.feature2}
                                    </li>
                                </ol>
                                <p>{dataPortfolio.conceptDescription}</p>
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
                                    alt="What I did?"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* Section Feedback Insights */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.feedbackTitle}
                            </h1>
                            <div className="modal__define__box-goals">
                                <p className="paragraph__100--regular modal__paragraph">
                                    {dataPortfolio.feedbackDescription}
                                </p>
                                <ol className="modal__define__goal-list">
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.feedback1}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.feedback2}
                                    </li>
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.feedback3}
                                    </li>
                                </ol>
                            </div>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/startoken/insights.webp">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/startoken/insights.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/startoken/insights.webp"
                                    loading="lazy"
                                    alt="What I did?"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* Key Features */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.keyFeaturesTitle}
                            </h1>
                        </article>

                        {/* Feature 1 */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.feature1Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.feature1Description}
                            </p>
                        </article>
                        <Video
                            src="https://sebastiangonzalez.design/images/projects/startoken/token-generator.mp4"
                            className="modal__video"
                            poster="" // Optional: Add poster image URL
                            muted={true}
                            loop={true}
                            autoPlay={true}
                            preload="metadata"
                            loading="lazy"
                        />

                        {/* Feature 2 */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.feature2Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.feature2Description}
                            </p>
                        </article>
                        <Video
                            src="https://sebastiangonzalez.design/images/projects/startoken/naming-playground.mp4"
                            className="modal__video"
                            poster="" // Optional: Add poster image URL
                            muted={true}
                            loop={true}
                            autoPlay={true}
                            controls={false}
                            preload="metadata"
                            loading="lazy"
                        />

                        {/* Feature 3 */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.feature3Title}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.feature3Description}
                            </p>
                        </article>
                        <Video
                            src="https://sebastiangonzalez.design/images/projects/startoken/my-library.mp4"
                            className="modal__video"
                            poster="" // Optional: Add poster image URL
                            muted={true}
                            loop={true}
                            autoPlay={true}
                            preload="metadata"
                            loading="lazy"
                        />
                    </section>

                    {/* Tech Stack section */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.techStackTitle}
                            </h1>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.techStackDescription}
                            </p>
                        </article>

                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/startoken/tech-stack.webp">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/startoken/tech-stack.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/startoken/tech-stack.webp"
                                    loading="lazy"
                                    alt="Foundations"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* <!-- Section Early Impact --> */}
                    <section className="modal__other-projects modal__end">
                        <article className="modal__secondary-text-box">
                            <h3 className="display__100--bold modal__subtitle">
                                {dataPortfolio.earlyImpactTitle}
                            </h3>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.earlyImpactDescription}
                            </p>
                            <ul className="p-20">
                                <li className="mt-20">
                                    {dataPortfolio.earlyImpactBullet1}
                                </li>

                                <li>{dataPortfolio.earlyImpactBullet2}</li>

                                <li>{dataPortfolio.earlyImpactBullet3}</li>
                            </ul>
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
                                        alt="Foundations"
                                    />
                                </picture>
                            </ImageModalZoom>
                            <Button
                                className="modal__button-project"
                                href="https://www.startoken.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit the live Startoken project (opens in new tab)"
                                iconRight={<ArrowTopRightOnSquareIcon />}
                            >
                                Visit the live project
                            </Button>
                        </article>
                    </section>

                    {/* Section  Reflections & What’s Next*/}
                    <section className="modal__other-projects modal__end">
                        <article className="modal__secondary-text-box">
                            <h3 className="display__100--bold modal__subtitle">
                                {dataPortfolio.reflectionsTitle}
                            </h3>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.reflectionsDescription}
                            </p>
                            <ul className="p-20">
                                <li className="mt-20">
                                    {dataPortfolio.reflectionsBullet1}
                                </li>

                                <li>{dataPortfolio.reflectionsBullet2}</li>

                                <li>{dataPortfolio.reflectionsBullet3}</li>
                            </ul>
                        </article>

                        <div className="modal__final-reflection">
                            <h4 className="paragraph__100--bold">
                                {dataPortfolio.finalReflection}
                            </h4>
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

export default Startoken
