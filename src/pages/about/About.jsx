import './About.scss'
import signProfile from '../../img/sign-profile.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { useRive } from '@rive-app/react-canvas'

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    /* Rive animation */
    const { RiveComponent } = useRive({
        src: 'character-about.riv',
        stateMachines: 'State Machine 1',
        autoplay: true,
    })

    return (
        <main className="container-about">
            <section className="hero-about">
                <article className="hero-about__hero-container">
                    <div className="hero-about__text">
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className="heading__100--bold "
                        >
                            Sebastian González
                        </h1>
                        <span
                            data-aos="fade-up"
                            data-aos-delay="900"
                            className="heading__300--bold"
                        >
                            Profile
                        </span>
                    </div>
                    <RiveComponent
                        data-aos="flip-right"
                        data-aos-delay="1000"
                        className="hero-about__character"
                    ></RiveComponent>
                </article>
            </section>

            <section className="profile">
                <article className="profile__container">
                    <figure
                        data-aos="fade-up"
                        className="name-cv__img"
                    ></figure>
                    <div className="profile__text-box">
                        <h3
                            data-aos="fade-up"
                            className="heading__200--bold profile__text"
                        >
                            Who i am
                        </h3>
                        <p
                            data-aos="fade-up"
                            className="paragraph__100--medium profile__paragraph"
                        >
                            Hi, I'm Sebastian González, a UI/Visual designer
                            driven to refine my design and coding skills.
                            Passionate about creating unforgettable digital
                            experiences that connect users to products. I've
                            collaborated on projects with brands like Samsung,
                            enhancing my expertise. Let's work together to craft
                            something extraordinary.
                        </p>
                        <img
                            data-aos="fade-up"
                            src={signProfile}
                            alt="sebgraph"
                        />
                    </div>
                </article>
            </section>
        </main>
    )
}

export default About
