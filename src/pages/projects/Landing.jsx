import React, { useState } from 'react'
import './ProjectStyles.scss'
import { Landing } from '../../dataPortfolio'

const LandingPage = () => {
    const [dataPortfolio] = useState(Landing)

    return (
        <>
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    {/* Section porfolio header */}
                    <div className="modal__header modal__header-landing-s21">
                        <div className="modal-header__text-box">
                            <h1 className="heading__100--bold modal-header__title">
                                {dataPortfolio.headTitle}
                            </h1>
                            <article className="modal-header__info-content">
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
                                src="https://sebgraph.com/images/projects/landing-s21/project.png"
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
                    <section className="modal__define define">
                        <article className="modal__text-box">
                            <h1 className="heading__100--bold modal__title">
                                {dataPortfolio.titleIntroduction}
                            </h1>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.contentIntroduction}
                            </p>
                        </article>
                        <article className="define__boxes">
                            <div className="define__box define__box--dark">
                                <h3 className="heading__300--bold modal__title">
                                    {dataPortfolio.goalsTitle}
                                </h3>
                                <ol>
                                    <ul className="define__goal-list">
                                        <li className="paragraph__100--medium define__goal-item">
                                            {dataPortfolio.goal1}
                                        </li>
                                        <li className="paragraph__100--medium define__goal-item">
                                            {dataPortfolio.goal2}
                                        </li>
                                        <li className="paragraph__100--medium define__goal-item">
                                            {dataPortfolio.goal3}
                                        </li>
                                    </ul>
                                </ol>
                            </div>
                            <div className="define__box">
                                <h3 className="heading__300--bold modal__title">
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

                    <section className="modal__template">
                        <h1 className="heading__100--bold modal__title modal__text-box">
                            {dataPortfolio.title5}
                        </h1>

                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.midFidelityTitle}
                            </h3>
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebgraph.com/images/projects/landing-s21/mid-fidelity.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebgraph.com/images/projects/landing-s21/mid-fidelity.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </article>
                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.highFidelityTitle}
                            </h3>
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebgraph.com/images/projects/landing-s21/high-fidelity.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebgraph.com/images/projects/landing-s21/high-fidelity.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </article>
                    </section>

                    <section className="modal__template">
                        <article className="modal__text-box">
                            <h1 className="heading__100--bold modal__title modal__text-box">
                                {dataPortfolio.title7}
                            </h1>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.styleContent}
                            </p>
                        </article>

                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.brandTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.brandContent}
                            </p>
                        </article>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebgraph.com/images/projects/landing-s21/brand.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebgraph.com/images/projects/landing-s21/brand.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.colorsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.colorsContent}
                            </p>
                        </article>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebgraph.com/images/projects/landing-s21/colors.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebgraph.com/images/projects/landing-s21/colors.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.tipographyTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.tipographyContent}
                            </p>
                        </article>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebgraph.com/images/projects/landing-s21/tipography.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebgraph.com/images/projects/landing-s21/tipography.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.imageryTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.imageryContent}
                            </p>
                        </article>
                        <picture className="modal__img-container-dark mb-20">
                            <source
                                srcSet="https://sebgraph.com/images/projects/landing-s21/imagery.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebgraph.com/images/projects/landing-s21/imagery.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.componentsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.componentsContent}
                            </p>
                        </article>
                        <picture className="modal__img-container-dark mb-20">
                            <source
                                srcSet="https://sebgraph.com/images/projects/landing-s21/components.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebgraph.com/images/projects/landing-s21/components.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                        <picture className="modal__img-container-dark mb-20">
                            <source
                                srcSet="https://sebgraph.com/images/projects/landing-s21/icons.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebgraph.com/images/projects/landing-s21/icons.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                    </section>

                    <section className="modal__template">
                        <article className="mb-20">
                            <h1 className="heading__100--bold modal__title modal__text-box">
                                {dataPortfolio.title9}
                            </h1>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.finalContent}
                            </p>
                        </article>

                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebgraph.com/images/projects/landing-s21/final-design.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebgraph.com/images/projects/landing-s21/final-design.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.specificationsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.specificationsContent}
                            </p>
                        </article>

                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebgraph.com/images/projects/landing-s21/specifications.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebgraph.com/images/projects/landing-s21/specifications.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.viewTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.viewContent}
                            </p>
                        </article>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebgraph.com/images/projects/landing-s21/360.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebgraph.com/images/projects/landing-s21/360.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.compareTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__text">
                                {dataPortfolio.compareContent}
                            </p>
                        </article>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebgraph.com/images/projects/landing-s21/compare.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebgraph.com/images/projects/landing-s21/compare.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                    </section>

                    <picture>
                        <source
                            srcSet="https://sebgraph.com/images/projects/landing-s21/final-img.png"
                            media="(max-width:900px)"
                        />
                        <img
                            className="modal__img-complete"
                            src="https://sebgraph.com/images/projects/landing-s21/final-img.png"
                            loading="lazy"
                            alt="prototyping"
                        />
                    </picture>

                    {/* <!-- Ending --> */}
                    <section className="modal__other-projects end">
                        <article className="modal__text-box">
                            <hr className="end__line" />
                            <h2 className="heading__200--bold modal__title end__text">
                                Thank you
                            </h2>
                        </article>
                    </section>
                </section>
            ))}
        </>
    )
}

export default LandingPage
