// Common TypeScript interfaces for the portfolio

export interface SEOConfig {
    title: string
    description: string
    keywords?: string
    ogImage?: string
    canonical?: string
}

export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset'
    buttonStyle?: 'btn--primary' | 'btn--secondary' | 'btn--outline'
    buttonSize?: 'btn--sm' | 'btn--md' | 'btn--lg'
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => void
    onMouseOver?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onMouseOut?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    children: React.ReactNode
    className?: string
    href?: string
    target?: '_blank' | '_self' | '_parent' | '_top'
    rel?: string
    iconLeft?: React.ReactElement
    iconRight?: React.ReactElement
    fixedPosition?: boolean
}

export interface HeroProps {
    className?: string
    title: string
    subtitle?: string
    description: string
    ctaButtons?: React.ReactNode
    animationComponent?: React.ReactNode
}

export interface FeatureCard {
    icon: React.ReactNode
    title: string
    description: string
    highlight?: boolean
}

export interface ComparisonFeature {
    name: string
    free: boolean
    pro: boolean | string
    description?: string
}

export interface ProjectData {
    id: string
    title: string
    category: string
    thumbnail: string
    description: string
    technologies: string[]
    featured?: boolean
    url?: string
    demoUrl?: string
    githubUrl?: string
}

export interface ThemeContextType {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

export interface AnalyticsEvent {
    action: string
    category: string
    label?: string
    value?: number
}
