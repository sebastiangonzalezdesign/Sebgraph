import React, { useContext, useState } from 'react'
import './MotionUIKit.scss'
import { motion } from 'framer-motion'
import ThemeContext from '../../context/ThemeContext'
import SEO from '../../components/SEO'
import { BaseHero } from '../../components/BaseHero'
import { MUIKLogo } from '../../components/MUIKLogo'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import {
    ArrowTopRightOnSquareIcon,
    ArrowDownTrayIcon,
    PaintBrushIcon,
    BoltIcon,
    PuzzlePieceIcon,
    BookOpenIcon,
} from '@heroicons/react/24/outline'
import {
    StarIcon,
    CheckCircleIcon,
    XCircleIcon,
} from '@heroicons/react/24/solid'
import { seoConfig } from '../../seoConfig'
import { trackEvent } from '../../services/analytics'
import {
    staggerContainer,
    fadeUpVariants,
} from '../../animations/motionVariants'
// import './MotionUIKit.scss'

// Feature cards data
const features = [
    {
        icon: PaintBrushIcon,
        title: 'Dark mode first',
        description:
            'Designed with dark themes in mind, beautiful in any interface.',
    },
    {
        icon: BoltIcon,
        title: 'Smooth animations',
        description:
            'Built with Framer Motion for buttery-smooth 60fps animations.',
    },
    {
        icon: PuzzlePieceIcon,
        title: 'Copy-paste components',
        description: 'Ready-to-use React components with TypeScript support.',
    },
    {
        icon: BookOpenIcon,
        title: 'Systems Thinking',
        description:
            'built on tokens and design system principles for scalable UI motion.',
    },
]

// Comparison data
const comparisonFeatures = [
    { name: 'Basic UI Components', free: true, pro: true },
    { name: 'Design System Tokens', free: 'Basic', pro: 'Advanced' },
    { name: 'Animation Variants', free: '3 variants', pro: '8+ variants' },
    { name: 'Dark Mode Support', free: true, pro: true },
    { name: 'TypeScript Support', free: true, pro: true },
    { name: 'Documentation', free: 'Basic', pro: 'Complete + Figma' },
    { name: 'Advanced Components', free: false, pro: true },
    { name: 'Custom Themes', free: false, pro: true },
    { name: 'Priority Support', free: false, pro: true },
]

const MotionUIKit: React.FC = () => {
    const context = useContext(ThemeContext)
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(false)
    const [submitError, setSubmitError] = useState('')

    if (!context) {
        return <div>Loading...</div>
    }

    const { theme } = context

    // Handle email form submission
    const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitError('')

        if (!email) {
            setSubmitError('Please enter your email address.')
            return
        }

        if (!emailValid) {
            setSubmitError('Please enter a valid email address.')
            return
        }

        try {
            // Call Vercel API endpoint
            console.log(
                '🚀 Attempting to call API:',
                'https://motion.sebastiangonzalez.design/api/signup'
            )
            console.log('📧 Email being sent:', email)

            const response = await fetch(
                'https://motion.sebastiangonzalez.design/api/signup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                }
            )

            console.log('📡 Response status:', response.status)

            const data = await response.json()
            console.log('📋 Response data:', data)

            if (!response.ok) {
                throw new Error(data.error || 'Signup failed')
            }

            // Track successful signup
            trackEvent({
                action: 'Pro Signup Success',
                category: 'MUIK',
                label: 'EmailSignup',
            })

            // Show success message
            alert(
                "Thanks! We'll notify you when Pro launches. Check your email for confirmation!"
            )
            setEmail('')
            setEmailValid(false)
        } catch (error) {
            console.error('❌ Signup error:', error)
            setSubmitError('Something went wrong. Please try again.')

            // Track failed signup
            trackEvent({
                action: 'Pro Signup Error',
                category: 'MUIK',
                label: 'EmailSignup',
            })
        }
    }

    // CTA Buttons for hero
    const ctaButtons = (
        <div className="motion-ui-kit__cta-buttons">
            <Button
                href="https://motion.sebastiangonzalez.design"
                target="_blank"
                rel="noopener noreferrer"
                buttonStyle="btn--primary"
                buttonSize="btn--lg"
                iconRight={<ArrowTopRightOnSquareIcon />}
                onClick={() =>
                    trackEvent({
                        action: 'Click Live Demo',
                        category: 'MUIK',
                        label: 'HeroLiveDemoButton',
                    })
                }
            >
                Try Live Demo
            </Button>

            <Button
                href="#download"
                buttonStyle="btn--secondary"
                buttonSize="btn--lg"
                iconRight={<ArrowDownTrayIcon />}
                onClick={() =>
                    trackEvent({
                        action: 'Click Download Free',
                        category: 'MUIK',
                        label: 'HeroDownloadButton',
                    })
                }
            >
                Download Free
            </Button>
        </div>
    )

    return (
        <main className={`motion-ui-kit ${theme}`}>
            <SEO {...seoConfig.motionUIKit} />

            {/* Hero Section */}
            <BaseHero
                className="motion-ui-kit__hero"
                title="Motion UI Kit"
                description="A free + pro-ready design system for motion, polished UI micro-interactions built with React, Framer Motion, and system tokens."
                ctaButtons={ctaButtons}
                animationComponent={<MUIKLogo size="lg" animated={true} />}
            />

            {/* Overview Section */}
            <motion.section
                className="motion-ui-kit__overview"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="container" data-type="wide">
                    <motion.p
                        className="motion-ui-kit__overview-text paragraph__100--regular"
                        variants={fadeUpVariants}
                    >
                        Motion UI Kit helps designers and developers add
                        polished animations without reinventing the wheel. It's
                        built with scalability, accessibility, and developer
                        handoff in mind.
                    </motion.p>
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                className="motion-ui-kit__features"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="container" data-type="wide">
                    <motion.h2
                        className="motion-ui-kit__section-title heading__100--bold"
                        variants={fadeUpVariants}
                    >
                        Free Version Features
                    </motion.h2>

                    <div className="muik-features__grid">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeUpVariants}
                                >
                                    <Card hover className="muik-feature-card">
                                        <div className="muik-feature-card__icon">
                                            <IconComponent />
                                        </div>
                                        <h3 className="muik-feature-card__title heading__300--bold">
                                            {feature.title}
                                        </h3>
                                        <p className="muik-feature-card__description paragraph__200--regular">
                                            {feature.description}
                                        </p>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Comparison Section */}
            <motion.section
                className="motion-ui-kit__comparison"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="container">
                    <motion.h2
                        className="motion-ui-kit__section-title heading__100--bold"
                        variants={fadeUpVariants}
                    >
                        Free vs Pro
                    </motion.h2>

                    <motion.div variants={fadeUpVariants}>
                        <Card className="motion-ui-kit__comparison-table">
                            <div className="motion-ui-kit__comparison-header">
                                <div className="motion-ui-kit__comparison-header-cell heading__300--bold">
                                    Feature
                                </div>
                                <div className="motion-ui-kit__comparison-header-cell heading__300--bold">
                                    Free
                                </div>
                                <div className="motion-ui-kit__comparison-header-cell motion-ui-kit__comparison-header-cell--pro heading__300--bold">
                                    Pro{' '}
                                    <StarIcon
                                        style={{ color: 'var(--accent-500)' }}
                                    />
                                </div>
                            </div>

                            {comparisonFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="motion-ui-kit__comparison-row"
                                >
                                    <div className="motion-ui-kit__comparison-cell paragraph__200--medium">
                                        {feature.name}
                                    </div>
                                    <div className="motion-ui-kit__comparison-cell paragraph__200--regular">
                                        {typeof feature.free === 'boolean' ? (
                                            feature.free ? (
                                                <CheckCircleIcon
                                                    style={{
                                                        color: 'var(--success-600)',
                                                    }}
                                                />
                                            ) : (
                                                <XCircleIcon
                                                    style={{
                                                        color: 'var(--error-600)',
                                                    }}
                                                />
                                            )
                                        ) : (
                                            feature.free
                                        )}
                                    </div>
                                    <div className="motion-ui-kit__comparison-cell motion-ui-kit__comparison-cell--pro paragraph__200--regular">
                                        {typeof feature.pro === 'boolean' ? (
                                            feature.pro ? (
                                                <CheckCircleIcon
                                                    style={{
                                                        color: 'var(--success-600)',
                                                    }}
                                                />
                                            ) : (
                                                <XCircleIcon
                                                    style={{
                                                        color: 'var(--error-600)',
                                                    }}
                                                />
                                            )
                                        ) : (
                                            feature.pro
                                        )}
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="motion-ui-kit__cta"
                id="download"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="container">
                    <motion.h2
                        className="motion-ui-kit__section-title heading__100--bold"
                        variants={fadeUpVariants}
                    >
                        Ready to elevate your UI?
                    </motion.h2>

                    <motion.div
                        className="motion-ui-kit__cta-buttons"
                        variants={fadeUpVariants}
                    >
                        <Button
                            href="#" // TODO: Add Gumroad link
                            buttonStyle="btn--primary"
                            buttonSize="btn--lg"
                            iconRight={<ArrowDownTrayIcon />}
                            onClick={() =>
                                trackEvent({
                                    action: 'Download Free Version',
                                    category: 'MUIK',
                                    label: 'CTADownloadButton',
                                })
                            }
                        >
                            Download Free Version
                        </Button>

                        <Button
                            href="https://motion.sebastiangonzalez.design"
                            target="_blank"
                            rel="noopener noreferrer"
                            buttonStyle="btn--secondary"
                            buttonSize="btn--lg"
                            iconRight={<ArrowTopRightOnSquareIcon />}
                            onClick={() =>
                                trackEvent({
                                    action: 'Try Live Demo',
                                    category: 'MUIK',
                                    label: 'CTALiveDemoButton',
                                })
                            }
                        >
                            Try Live Demo
                        </Button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Pro Signup Section */}
            <motion.section
                className="motion-ui-kit__pro-signup"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="container " data-type="narrow">
                    <motion.h2
                        className="motion-ui-kit__section-title heading__100--bold"
                        variants={fadeUpVariants}
                    >
                        Be first to get access to 8+ advanced motion components
                    </motion.h2>

                    <motion.p
                        className="motion-ui-kit__pro-description paragraph__100--regular"
                        variants={fadeUpVariants}
                    >
                        Join the early access list for custom themes, advanced
                        animations, and priority support.
                    </motion.p>

                    <motion.div variants={fadeUpVariants}>
                        <Card className="motion-ui-kit__signup-form">
                            <h3 className="heading__300--bold">
                                Get early access to Pro features
                            </h3>
                            <form onSubmit={handleEmailSubmit} noValidate>
                                <div className="motion-ui-kit__input-group">
                                    <Input
                                        type="email"
                                        label="Enter your email"
                                        value={email}
                                        onValueChange={(value, isValid) => {
                                            setEmail(value)
                                            setEmailValid(isValid)
                                            setSubmitError('')
                                        }}
                                    />
                                    <Button
                                        type="submit"
                                        buttonStyle="btn--primary"
                                        buttonSize="btn--lg"
                                    >
                                        Join Early Access
                                    </Button>
                                </div>
                                {submitError && (
                                    <div className="motion-ui-kit__error">
                                        {submitError}
                                    </div>
                                )}
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </motion.section>

            {/* Footer Section */}
            <motion.section
                className="motion-ui-kit__footer"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="container">
                    <motion.p
                        className="motion-ui-kit__footer-tagline paragraph__100--regular"
                        variants={fadeUpVariants}
                    >
                        Motion UI Kit — Free & Pro-ready motion components for
                        React
                    </motion.p>
                </div>
            </motion.section>
        </main>
    )
}

export default MotionUIKit
