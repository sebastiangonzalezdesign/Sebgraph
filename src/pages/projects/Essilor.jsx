import React, { useState } from 'react'
import './ProjectStyles.scss'
import { Essilor } from '../../dataPortfolio'
import BackButton from '../../components/BackButton'
import ImageModalZoom from '../../components/ImageModalZoom'

const EssilorAPP = () => {
    const [dataPortfolio] = useState(Essilor)

    return (
        <>
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    <BackButton />
                    {/* Section porfolio header */}
                    <div className="modal__header modal__header-essilor">
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
                                src="https://sebastiangonzalez.design/images/projects/essilor/project.png"
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
                            <h1 className="heading__100--bold modal__title">
                                {dataPortfolio.titleIntroduction}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.contentIntroduction}
                            </p>
                        </article>
                        <article className="modal__define__boxes">
                            <div className="modal__define__box-goals ">
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
                                <h3 className="heading__300--bold">
                                    {dataPortfolio.customerTitle}
                                </h3>
                                <div className="define__mindset-box">
                                    <span className="paragraph__300--medium">
                                        {dataPortfolio.user1Title}
                                    </span>
                                    <p className="paragraph__100--medium">
                                        {dataPortfolio.user1Content}
                                    </p>
                                </div>
                                <div className="define__mindset-box">
                                    <span className="paragraph__300--medium">
                                        {dataPortfolio.user2Title}
                                    </span>
                                    <p className="paragraph__100--medium">
                                        {dataPortfolio.user2Content}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </section>

                    {/* <!-- Section ideate --> */}
                    <section className="modal__template">
                        <article className="modal__main-text-box">
                            <h2 className="display__100--bold modal__title modal__main-text-box">
                                {dataPortfolio.ideateTitle}
                            </h2>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.ideateContent}
                            </p>
                        </article>
                    </section>

                    <section className="modal__template">
                        <article className="modal__secondary-text-box">
                            <h1 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.title2}
                            </h1>
                        </article>
<<<<<<< HEAD

                        <picture className="modal__img-container">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/empathy-map-responsive.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/empathy-map.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/empathy-map.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/empathy-map-responsive.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/empathy-map.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project
                    </section>

                    <section className="modal__template">
                        <article className="modal__secondary-text-box">
                            <h1 className="heading__100--bold modal__subtitle">
                                {dataPortfolio.title5}
                            </h1>
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.midFidelityTitle}
                            </h3>
                        </article>
<<<<<<< HEAD
                        <picture className="modal__img-container">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/mid-fidelity.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/mid-fidelity.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/mid-fidelity.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/mid-fidelity.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/mid-fidelity.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project
                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.highFidelityTitle}
                            </h3>
                        </article>
<<<<<<< HEAD
                        <picture className="modal__img-container">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/high-fidelity.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/high-fidelity.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/high-fidelity.png">
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/high-fidelity.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/high-fidelity.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project
                    </section>

                    <section className="modal__template">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.title7}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.styleContent}
                            </p>
                        </article>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.brandTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.brandContent}
                            </p>
                        </article>
<<<<<<< HEAD
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/brand.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/brand.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/brand.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/brand.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/brand.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.colorsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.colorsContent}
                            </p>
                        </article>
<<<<<<< HEAD
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/colors.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/colors.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/colors.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/colors.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/colors.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.tipographyTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.tipographyContent}
                            </p>
                        </article>
<<<<<<< HEAD
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/tipography.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/tipography.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/tipography.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/tipography.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/tipography.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.imageryTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.imageryContent}
                            </p>
                        </article>
<<<<<<< HEAD
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/imagery.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/imagery.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/imagery.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/imagery.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/imagery.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.componentsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.componentsContent}
                            </p>
                        </article>
<<<<<<< HEAD
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/components.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/components.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/icons.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/icons.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/components.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/components.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/components.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/icons.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/icons.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/icons.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project
                    </section>

                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title ">
                                {dataPortfolio.title9}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.finalContent}
                            </p>
                        </article>

<<<<<<< HEAD
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/final-design.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/final-design.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/final-design.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/final-design.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/final-design.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.scanTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.scanContent}
                            </p>
                        </article>

<<<<<<< HEAD
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/scan-code.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/scan-code.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/scan-code.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/scan-code.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/scan-code.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.redeemTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.redeemContent}
                            </p>
                        </article>
<<<<<<< HEAD
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/essilor/redeem.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/essilor/redeem.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
=======
                        <ImageModalZoom src="https://sebastiangonzalez.design/images/projects/essilor/redeem.png">
                            <picture className="modal__img-container mb-20">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/essilor/redeem.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/essilor/redeem.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </ImageModalZoom>
>>>>>>> restricted-project
                    </section>

                    <picture>
                        <source
                            srcSet="https://sebastiangonzalez.design/images/projects/essilor/final-img.png"
                            media="(max-width:900px)"
                        />
                        <img
                            className="modal__img-complete"
                            src="https://sebastiangonzalez.design/images/projects/essilor/final-img.png"
                            loading="lazy"
                            alt="prototyping"
                        />
                    </picture>

                    {/* <!-- Ending --> */}
                    <section className="modal__other-projects modal__end">
                        <article className="modal_secondary-text-box">
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

export default EssilorAPP
