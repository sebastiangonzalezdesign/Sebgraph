import React, { useState, useEffect, useRef } from 'react'
import { Solve } from '../../dataPortfolio'
import './ProjectStyles.scss'
import lottie from 'lottie-web'
import { default as desarrolloSostenible } from '../../img/desarrollo_sostenible.json'
import { default as versionesAnteriores } from '../../img/versiones-anteriores.json'
import { default as recursos } from '../../img/recursos.json'
import BackButton from '../../components/BackButton'
import ImageModalZoom from '../../components/ImageModalZoom'

const SolveForTomorrow = () => {
    const [dataPortfolio] = useState(Solve)
    const container1 = useRef(null)
    const container2 = useRef(null)
    const container3 = useRef(null)

    /* Lottie */
    useEffect(() => {
        if (container1.current) {
            lottie.loadAnimation({
                container: container1.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: desarrolloSostenible,
            })
        }

        if (container2.current) {
            lottie.loadAnimation({
                container: container2.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: versionesAnteriores,
            })
        }

        if (container3.current) {
            lottie.loadAnimation({
                container: container3.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: recursos,
            })
        }
    }, [])

    return (
        <>
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    <BackButton />
                    {/* Section porfolio header */}
                    <div className="modal__header modal__header-solve-for-tomorrow">
                        <div className="modal-header__text-box">
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
                                src="https://sebastiangonzalez.design/images/projects/solve/project.png"
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

                    {/* <!-- Section define --> */}
                    <section className="modal__define__box">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.titleIntroduction}
                            </h1>
                            <p className="paragraph__100--medium  modal__paragraph">
                                {dataPortfolio.contentIntroduction}
                            </p>
                        </article>
                        <article className="modal__define__boxes">
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold">
                                    {dataPortfolio.goalsTitle}
                                </h3>
                                <ol>
                                    <ul className="modal__define__goal-list">
                                        <li className="paragraph__200--medium modal__define__goal-item">
                                            {dataPortfolio.goal1}
                                        </li>
                                        <li className="paragraph__200--medium modal__define__goal-item">
                                            {dataPortfolio.goal2}
                                        </li>
                                        <li className="paragraph__200--medium modal__define__goal-item">
                                            {dataPortfolio.goal3}
                                        </li>
                                        <li className="paragraph__200--medium modal__define__goal-item">
                                            {dataPortfolio.goal4}
                                        </li>
                                    </ul>
                                </ol>
                            </div>
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold ">
                                    {dataPortfolio.customerTitle}
                                </h3>
                                <ol>
                                    <ul className="modal__define__goal-list">
                                        <li className="paragraph__200--regular modal__define__goal-item">
                                            {dataPortfolio.user1Title}
                                        </li>
                                        <li className="paragraph__200--regular modal__define__goal-item">
                                            {dataPortfolio.user1Content}
                                        </li>
                                        <li className="paragraph__200--regular modal__define__goal-item">
                                            {dataPortfolio.user2Title}
                                        </li>
                                        <li className="paragraph__200--regular modal__define__goal-item">
                                            {dataPortfolio.user2Content}
                                        </li>
                                    </ul>
                                </ol>
                            </div>
                        </article>
                    </section>

                    {/* <!-- Section ideate --> */}
                    <section className="modal__template">
                        <article className="modal__text-box modal__main-text-box">
                            <h2 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.ideateTitle}
                            </h2>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.ideateContent}
                            </p>
                        </article>
                    </section>

                    <section className="modal__template">
                        <h1 className="heading__100--bold modal__title modal__secondary-text-box">
                            {dataPortfolio.title2}
                        </h1>

                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/user-persona-responsive.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/user-persona-responsive.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/user-persona.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    <section className="modal__template">
                        <h1 className="heading__100--bold modal__title modal__main-text-box">
                            {dataPortfolio.title3}
                        </h1>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/empathy-map.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/empathy-map.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/empathy-map.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    <section className="modal__template">
                        <h1 className="heading__100--bold modal__title modal__main-text-box">
                            {dataPortfolio.title4}
                        </h1>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/user-flow.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/user-flow.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/user-flow.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    <section className="modal__template">
                        <article className="modal__secondary-text-box ">
                            <h1 className="heading__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.title5}
                            </h1>
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.midFidelityTitle}
                            </h3>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/mid-fidelity-wireframes.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/mid-fidelity-wireframes.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/mid-fidelity-wireframes.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.highFidelityTitle}
                            </h3>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/high-fidelity-wireframes.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/high-fidelity-wireframes.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/high-fidelity-wireframes.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    <section className="modal__template">
                        <article className="mb-20 modal__secondary-text-box">
                            <h1 className="heading__100--bold modal__title modal__subtitle">
                                {dataPortfolio.title6}
                            </h1>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.moodboardContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/moodboard.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/moodboard.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/moodboard.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    <section className="modal__template">
                        <article className="modal__text-box modal__secondary-text-box">
                            <h1 className="heading__100--bold modal__title modal__subtittle">
                                {dataPortfolio.title7}
                            </h1>
                            <p className="paragraph__100--medium">
                                {dataPortfolio.styleContent}
                            </p>
                        </article>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold">
                                {dataPortfolio.brandTitle}
                            </h3>
                            <p className="paragraph__100--medium">
                                {dataPortfolio.brandContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/brand.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/brand.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/brand.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold">
                                {dataPortfolio.colorsTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.colorsContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/colors.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/colors.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/colors.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold">
                                {dataPortfolio.tipographyTitle}
                            </h3>
                            <p className="paragraph__100--medium">
                                {dataPortfolio.tipographyContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/tipography.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/tipography.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/tipography.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold ">
                                {dataPortfolio.imageryTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.imageryContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/imagery.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/imagery.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/imagery.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold">
                                {dataPortfolio.componentsTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.componentsContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/buttons.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/buttons.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/buttons.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/forms.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/forms.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/forms.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/icons.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/icons.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/icons.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/cards.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/cards.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/cards.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/organisms.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/organisms.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/organisms.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    <section className="modal__template">
                        <article className="mb-20 modal__secondary-text-box">
                            <h1 className="heading__100--bold">
                                {dataPortfolio.title8}
                            </h1>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.animationsContent}
                            </p>
                        </article>

                        <article className="animation-container">
                            <figure className="animation-box">
                                <div
                                    ref={container1}
                                    className="animation"
                                ></div>
                            </figure>

                            <figure className="animation-box">
                                <div
                                    ref={container2}
                                    className="animation"
                                ></div>
                            </figure>

                            <figure className="animation-box">
                                <div
                                    ref={container3}
                                    className="animation"
                                ></div>
                            </figure>
                        </article>
                    </section>

                    <section className="modal__template">
                        <article className="mb-20 modal__secondary-text-box">
                            <h1 className="heading__100--bold modal__title ">
                                {dataPortfolio.title9}
                            </h1>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.finalContent}
                            </p>
                        </article>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold ">
                                {dataPortfolio.formTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.formContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/form.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/form.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/form.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold ">
                                {dataPortfolio.previousTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.previousContent}
                            </p>
                        </article>

                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/previous-versions.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/previous-versions.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/previous-versions.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold ">
                                {dataPortfolio.resourcesTitle}
                            </h3>
                            <p className="paragraph__100--medium ">
                                {dataPortfolio.resourcesContent}
                            </p>
                        </article>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/solve/resources.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/solve/resources.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/solve/resources.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                    </section>

                    <picture>
                        <source
                            srcSet="https://sebastiangonzalez.design/images/projects/solve/final-img.png"
                            media="(max-width:900px)"
                        />
                        <img
                            className="modal__img-complete"
                            src="https://sebastiangonzalez.design/images/projects/solve/final-img.png"
                            loading="lazy"
                            alt="prototyping"
                        />
                    </picture>

                    {/* <!-- Ending --> */}
                    <section className="modal__other-projects modal__end">
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

export default SolveForTomorrow
