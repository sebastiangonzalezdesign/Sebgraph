import React, { useState, useEffect } from 'react'
import { trackPageView } from '../../services/analytics'
import './ProjectStyles.scss'
import { AV } from '../../dataPortfolio'
import { useLottie } from '../../hooks/useLottie'
import { default as busqueda } from '../../img/busqueda.json'
import { default as calificacionInicio } from '../../img/calificacion-inicio.json'
import { default as calificacionFin } from '../../img/calificacion-fin.json'
import BackButton from '../../components/BackButton'
import ImageModalZoom from '../../components/ImageModalZoom'
import SEO from '../../components/SEO'
import { seoConfig } from '../../seoConfig'

const AvExpert = () => {
    const [dataPortfolio] = useState(AV)
    const container1 = useLottie(busqueda)
    const container2 = useLottie(calificacionInicio)
    const container3 = useLottie(calificacionFin)

    // Analytics pageview
    useEffect(() => {
        trackPageView('/projects/avexpert')
    }, [])

    return (
        <>
            <SEO {...seoConfig.avexpert} />
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    <BackButton />
                    {/* Section porfolio header */}
                    <div className="modal__header modal__header-av">
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
                                src="https://sebastiangonzalez.design/images/projects/av/project.png"
                                loading="lazy"
                                alt="AV Expert project"
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

                    {/* <!-- Section Project Overview --> */}
                    <section className="modal__define__box">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.titleOverview}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.contentOverview}
                            </p>
                        </article>
                        <article className="modal__define__boxes">
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold ">
                                    {dataPortfolio.goalsTitle}
                                </h3>
                                <ol className="modal__define__goal-list">
                                    <li className="paragraph__200--medium modal__define__goal-item">
                                        {dataPortfolio.goal1}
                                    </li>
                                    <li className="paragraph__200--medium modal__define__goal-item">
                                        {dataPortfolio.goal2}
                                    </li>
                                    <li className="paragraph__200--medium modal__define__goal-item">
                                        {dataPortfolio.goal3}
                                    </li>
                                </ol>
                            </div>
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold ">
                                    {dataPortfolio.customerTitle}
                                </h3>

                                <div className="define__mindset-box">
                                    <span className="heading__200--regular">
                                        {dataPortfolio.user1Title}
                                    </span>
                                    <p className="paragraph__200--medium">
                                        {dataPortfolio.user1Content}
                                    </p>
                                </div>
                                <div className="define__mindset-box">
                                    <span className="heading__200--regular">
                                        {dataPortfolio.user2Title}
                                    </span>
                                    <p className="paragraph__200--medium">
                                        {dataPortfolio.user2Content}
                                    </p>
                                </div>
                            </div>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/final-design.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/final-design.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/final-design.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* <!-- Section ideation and Key Insights --> */}
                    <section className="modal__template">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.ideateTitle}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.ideateContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/user-persona.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/user-persona-responsive.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/user-persona.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/user-flow.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/user-flow.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/user-flow.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    {/* <!-- Section Visual and Design System --> */}
                    <section className="modal__template">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.visualTitle}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.visualDescription}
                            </p>
                        </article>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.wireframesTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.wireframesDescription}
                            </p>
                        </article>

                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/mid-fidelity.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/mid-fidelity.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/mid-fidelity.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                        <article className="modal__text-box">
                            <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/high-fidelity.png">
                                <picture className="modal__img-container">
                                    <source
                                        srcSet="https://sebastiangonzalez.design/images/projects/av/high-fidelity.png"
                                        media="(max-width:900px)"
                                    />
                                    <img
                                        className="modal__img-complete"
                                        src="https://sebastiangonzalez.design/images/projects/av/high-fidelity.png"
                                        loading="lazy"
                                        alt="ideate"
                                    />
                                </picture>
                            </ImageModalZoom>
                        </article>
                    </section>

                    <section className="modal__template">
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.styleTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragrapht">
                                {dataPortfolio.styleContent}
                            </p>
                        </article>

                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/brand.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/brand.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/brand.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.colorsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.colorsContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/colors.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/colors.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/colors.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.typographyTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.typographyContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/tipography.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/tipography.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/tipography.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.imageryTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragrapht">
                                {dataPortfolio.imageryContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/imagery.png">
                            <picture className="modal__img-container-dark mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/imagery.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/imagery.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.componentsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.componentsContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/components.png">
                            <picture className="modal__img-container-dark mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/components.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/components.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/cards.png">
                            <picture className="modal__img-container-dark mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/cards.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/cards.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/icons.png">
                            <picture className="modal__img-container-dark mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/icons.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/icons.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    <section className="modal__template">
                        <article className="mb-20 modal__secondary-text-box">
                            <h3 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.title8}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.animationsContent}
                            </p>
                        </article>

                        <article className="animation-container animation">
                            <figure className="animation-box">
                                <div
                                    ref={container1}
                                    className="animation-dark"
                                ></div>
                            </figure>

                            <figure className="animation-box">
                                <div
                                    ref={container2}
                                    className="animation-dark"
                                ></div>
                            </figure>

                            <figure className="animation-box">
                                <div
                                    ref={container3}
                                    className="animation-dark"
                                ></div>
                            </figure>
                        </article>
                    </section>

                    {/* <!-- Section Core Features --> */}

                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.featuresTitle}
                            </h1>
                        </article>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.keywordsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.keywordsContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/keywords.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/keywords.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/keywords.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.advancedTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.advancedContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/advanced-search.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/advanced-search.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/advanced-search.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.productTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.productContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/av/product-library.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/product-library.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/product-library.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    <picture>
                        <source
                            srcSet="https://sebastiangonzalez.design/images/projects/av/final-img.png"
                            media="(max-width:900px)"
                        />
                        <img
                            className="modal__img-complete"
                            src="https://sebastiangonzalez.design/images/projects/av/final-img.png"
                            loading="lazy"
                            alt="prototyping"
                        />
                    </picture>

                    {/* <!-- Section Final Design --> */}
                    <section className="modal__template">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.finalDesignTitle}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.finalDesignDescription}
                            </p>
                        </article>
                    </section>

                    {/* <!-- Ending --> */}
                    <section className="modal__other-projects modal__end">
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

export default AvExpert
