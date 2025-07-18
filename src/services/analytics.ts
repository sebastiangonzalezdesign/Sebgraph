import ReactGA from 'react-ga4'

const GA_MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID

export function initGA() {
    if (GA_MEASUREMENT_ID) {
        ReactGA.initialize(GA_MEASUREMENT_ID)
    } else {
        console.warn('Google Analytics ID not found in environment variables.')
    }
}

export function trackPageView(path: string) {
    if (GA_MEASUREMENT_ID) {
        ReactGA.send({ hitType: 'pageview', page: path })
    }
}

// Track custom events (e.g., button clicks, downloads)
export function trackEvent({
    action,
    category,
    label,
    value,
}: {
    action: string
    category?: string
    label?: string
    value?: number
}) {
    if (GA_MEASUREMENT_ID) {
        const event: {
            action: string
            category?: string
            label?: string
            value?: number
        } = { action }
        if (typeof category === 'string') (event as any).category = category
        if (typeof label === 'string') (event as any).label = label
        if (typeof value === 'number') (event as any).value = value
        ReactGA.event(event as any)
    }
}
