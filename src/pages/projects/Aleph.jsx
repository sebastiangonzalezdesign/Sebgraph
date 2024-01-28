import React, { useState } from 'react'
import './ProjectStyles.scss'
import { Aleph } from '../../dataPortfolio'
import BackButton from '../../components/BackButton'

const AlephDS = () => {
    const [dataPortfolio] = useState(Aleph)

    return (
        <>
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    <BackButton />
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
                                        <li className="paragraph__200--regular define__goal-item">
                                            {dataPortfolio.goal1}
                                        </li>
                                        <li className="paragraph__200--regular define__goal-item">
                                            {dataPortfolio.goal2}
                                        </li>
                                        <li className="paragraph__200--regular define__goal-item">
                                            {dataPortfolio.goal3}
                                        </li>
                                    </ul>
                                </ol>
                            </div>
                            <div className="define__box">
                                <h3 className="heading__300--bold modal__title">
                                    {dataPortfolio.findingsTitle}
                                </h3>
                                <div className="define__mindset-box">
                                    <p className="paragraph__200--regular">
                                        {dataPortfolio.finding1}
                                    </p>
                                </div>
                                <div className="define__mindset-box">
                                    <p className="paragraph__200--regular">
                                        {dataPortfolio.finding2}
                                    </p>
                                </div>
                                <div className="define__mindset-box">
                                    <p className="paragraph__200--regular">
                                        {dataPortfolio.finding3}
                                    </p>
                                </div>
                                <div className="define__mindset-box">
                                    <p className="paragraph__200--regular">
                                        {dataPortfolio.finding4}
                                    </p>
                                </div>
                            </div>
                        </article>
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

export default AlephDS
