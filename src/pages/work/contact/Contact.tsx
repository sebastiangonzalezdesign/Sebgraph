import './Contact.scss'

import { Button } from '../../../components/Button'
import CopyToClipboard from 'react-copy-to-clipboard'
import React, { useEffect, useState } from 'react'
import { useRive } from '@rive-app/react-canvas'

const Contact = () => {
    const [copySuccess, setCopySuccess] = useState(false)
    const email = 'sebgraph7@gmail.com'

    /* Rive animation */
    const { RiveComponent } = useRive({
        src: 'character-about.riv',
        stateMachines: 'State Machine 1',
        autoplay: true,
    })

    const handleCopyClick = () => {
        setCopySuccess(true)
        setTimeout(() => {
            setCopySuccess(false)
        }, 1500) // Display the success message for 3 seconds
    }

    return (
        <section className="section-contact">
            <div className="contact-container">
                <div className="contact-container__heading">
                    <div className="section-portfolio__heading-container">
                        <h2 className="heading__100--bold section-portfolio__heading">
                            Let’s Connect
                            <span className="section-portfolio__heading-decoration"></span>
                        </h2>
                    </div>
                    <p className="paragraph__100--regular contact-container__paragraph">
                        Got a project in mind or just curious to learn more
                        about what I do? I’d love to chat! Whether you need help
                        designing a product or building out a design system,
                        feel free to drop me an email by clicking below. I’ll
                        get back to you as soon as I can. Let’s create something
                        amazing together!
                    </p>
                </div>
                <div className="section-portfolio__divider"></div>
                <div className="contact-container__actions">
                    <article className="contact-container__text-box">
                        <RiveComponent className="contact-container__character"></RiveComponent>
                    </article>
                    <div className="contact-container__btns">
                        <a href={`mailto:${email}`} className="email">
                            <Button
                                className="contact-container__email-btn"
                                type="button"
                                buttonStyle="btn--secondary"
                                buttonSize="btn--lg"
                            >
                                Email me
                            </Button>
                        </a>
                        <CopyToClipboard text={email} onCopy={handleCopyClick}>
                            <Button
                                className="contact-container__copy-btn"
                                onMouseLeave={() => setCopySuccess(false)}
                            >
                                {copySuccess ? `Mail copied!` : 'Copy mail'}
                            </Button>
                        </CopyToClipboard>
                        {copySuccess && (
                            <div className="messageContainer2 messageActive">
                                <span className="message">{`${email} copied to clipboard`}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
