import React, { useState, useEffect } from 'react'
import { Hub as HubDS } from '../../dataPortfolio'
import BackButton from '../../components/BackButton'
import ImageModalZoom from '../../components/ImageModalZoom'
import SEO from '../../components/SEO'
import { seoConfig } from '../../seoConfig'

const Hub = () => {
    const [dataPortfolio] = useState(HubDS)
    // Example condition: Check if the page is password-protected or private
    const isPrivatePage = true

    useEffect(() => {
        // Clear the localStorage after the user accesses the page
        localStorage.removeItem('projectAccess')
    }, [])

    // Dynamically import shared project styles to reduce critical CSS in prerender
    useEffect(() => {
        import('./ProjectStyles.scss')
    }, [])

    return (
        <>
            <SEO {...seoConfig.hub} />
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    <BackButton />
                    {/* Section porfolio header */}
                    <div className="modal__header modal__header-hub">
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
                                src="https://sebastiangonzalez.design/images/projects/hub/project-hub.webp"
                                loading="lazy"
                                width={1000}
                                height={360}
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

                    {/* <!-- Section define --> */}
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
                                    <li className="paragraph__200--regular modal__define__goal-item">
                                        {dataPortfolio.finding4}
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </section>

                    {/* Section What I did */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.whatIDidTitle}
                            </h1>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.whatIDidDescription}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/hub/process.webp">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/hub/process.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/hub/process.webp"
                                    loading="lazy"
                                    width={1920}
                                    height={1080}
                                    alt="What I did?"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* Interface Inventory */}
                    <section className="modal__template">
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.inventoryTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.inventoryDescription}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/hub/inventory.webp">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/hub/inventory.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/hub/inventory.webp"
                                    loading="lazy"
                                    width={1920}
                                    height={1080}
                                    alt="Interface inventory"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* Theme Implementation */}
                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.themeImplementationyTitle}
                            </h1>
                            <p className="paragraph__100--regular modal__paragraph">
                                {dataPortfolio.themeImplementationyDescription}
                            </p>
                        </article>

                        {/* Foundations */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.foundationsTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.foundationsDescription}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/hub/foundations.webp">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/hub/foundations.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/hub/foundations.webp"
                                    loading="lazy"
                                    width={1920}
                                    height={1080}
                                    alt="Foundations"
                                />
                            </picture>
                        </ImageModalZoom>

                        {/* Tokens */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.tokensTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.tokensDescription}
                            </p>
                        </article>

                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/hub/tokens.webp">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/hub/tokens.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/hub/tokens.webp"
                                    loading="lazy"
                                    width={1920}
                                    height={1080}
                                    alt="Design Tokens"
                                />
                            </picture>
                        </ImageModalZoom>

                        {/* Components */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.componentsTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.componentsDescription}
                            </p>
                        </article>

                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/hub/components.webp">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/hub/components.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/hub/components.webp"
                                    loading="lazy"
                                    width={1920}
                                    height={1080}
                                    alt="Components Migration"
                                />
                            </picture>
                        </ImageModalZoom>

                        {/* Pages */}
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.pagesTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.pagesDescription}
                            </p>
                        </article>

                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/hub/pages.webp">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/hub/pages.webp"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/hub/pages.webp"
                                    loading="lazy"
                                    width={1920}
                                    height={1080}
                                    alt="Pages Migration"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* <!-- Results --> */}
                    <section className="modal__other-projects modal__end">
                        <article className="modal__secondary-text-box">
                            <h3 className="display__100--bold modal__subtitle">
                                {dataPortfolio.resultsTitle}
                            </h3>
                            <ul className="p-20">
                                <li className="mt-20">
                                    {dataPortfolio.resultsBullet1}
                                </li>
                                <br />
                                <li>{dataPortfolio.resultsBullet2}</li>
                                <br />
                                <li>{dataPortfolio.resultsBullet3}</li>
                                <br />
                                <li>{dataPortfolio.resultsBullet4}</li>
                            </ul>
                        </article>

                        <article className="modal__text-box">
                            <h2 className="display__200--regular modal__title modal__end__text">
                                Thank you
                            </h2>
                        </article>
                    </section>
                </section>
            ))}
        </>
    )
}

export default Hub
