// Ported seoConfig and helpers for Astro (server-side)
export const seoConfig = {
    home: {
        title: 'Sebastian González – UI Designer & Design System Developer',
        description:
            "I'm a UI designer focused on scalable design systems and front-end development. Let's build smarter interfaces together. Based in Bogotá, working remotely.",
        url: 'https://sebastiangonzalez.design/',
        robots: 'index, follow',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sebastian González',
            jobTitle: 'UI Designer & Design System Developer',
            description:
                'UI designer focused on scalable design systems and front-end development',
            url: 'https://sebastiangonzalez.design/',
            sameAs: [
                'https://github.com/sebasgonzac',
                'https://linkedin.com/in/sebastian-gonzalez-design',
            ],
            worksFor: {
                '@type': 'Organization',
                name: 'Sebastian González Design',
            },
            knowsAbout: [
                'UI Design',
                'Design Systems',
                'Frontend Development',
                'React',
                'TypeScript',
            ],
            address: {
                '@type': 'Place',
                addressLocality: 'Bogotá',
                addressCountry: 'Colombia',
            },
        },
    },
    // other page configs (kept concise here; extend as needed)
    motionUIKit: {
        title: 'Motion UI Kit – Free React Animation Library by Sebastian González',
        description:
            'A free + pro-ready library of polished UI micro-interactions for React & Framer Motion. Dark mode first, copy-paste components, and smooth 60fps animations.',
        url: 'https://sebastiangonzalez.design/motion-ui-kit',
        robots: 'index, follow',
    },
    muikProject: {
        title: 'Motion UI Kit Design System Project – Sebastian González',
        description:
            'Design system case study: Building a comprehensive UI component library with React, TypeScript, and Framer Motion. Design tokens, dark mode, and micro-interactions.',
        url: 'https://sebastiangonzalez.design/projects/MUIK',
        robots: 'index, follow',
    },
}

export function buildPersonSchema() {
    return seoConfig.home.structuredData
}

export function buildWebSiteSchema(siteUrl = seoConfig.home.url) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Sebastian González',
        url: siteUrl,
    }
}

export type ArticleInput = {
    headline: string
    description: string
    image?: string
    authorName?: string
    publisherName?: string
    publisherLogo?: string
    datePublished?: string
    url?: string
}

export function buildArticleSchema({
    headline,
    description,
    image,
    authorName = 'Sebastian González',
    publisherName = 'Sebastian González Design',
    publisherLogo,
    datePublished,
    url,
}: ArticleInput) {
    const schema: any = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
        image: image ?? undefined,
        author: {
            '@type': 'Person',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: publisherName,
        },
        datePublished: datePublished ?? undefined,
        mainEntityOfPage: url ? { '@type': 'WebPage', '@id': url } : undefined,
    }
    if (publisherLogo)
        (schema.publisher as any).logo = {
            '@type': 'ImageObject',
            url: publisherLogo,
        }
    return schema
}

export type BreadcrumbSegment = { name: string; path: string }

export function buildBreadcrumbSchema(
    pathSegments: BreadcrumbSegment[] = [],
    siteUrl = seoConfig.home.url
) {
    const itemListElement = pathSegments.map((segment, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: segment.name,
        item: `${siteUrl}${segment.path}`,
    }))

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement,
    }
}

export function mergeStructuredData(items = []) {
    return items.filter(Boolean)
}

// AI-focused schema builders
export type CreativeWorkInput = {
    name: string
    description: string
    url?: string
    image?: string
    keywords?: string[]
    datePublished?: string
    authorName?: string
}

export function buildCreativeWork({
    name,
    description,
    url,
    image,
    keywords,
    datePublished,
    authorName = 'Sebastian González',
}: CreativeWorkInput) {
    const schema: any = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name,
        description,
        url: url ?? undefined,
        image: image ?? undefined,
        author: {
            '@type': 'Person',
            name: authorName,
        },
        datePublished: datePublished ?? undefined,
    }
    if (keywords && keywords.length > 0) schema.keywords = keywords.join(', ')
    return schema
}

export type SoftwareSourceCodeInput = {
    name: string
    description: string
    url?: string
    codeRepository?: string
    language?: string
    keywords?: string[]
}

export function buildSoftwareSourceCode({
    name,
    description,
    url,
    codeRepository,
    language,
    keywords,
}: SoftwareSourceCodeInput) {
    const schema: any = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        name,
        description,
        url: url ?? undefined,
        codeRepository: codeRepository ?? undefined,
    }
    if (language) schema.programmingLanguage = language
    if (keywords && keywords.length > 0) schema.keywords = keywords.join(', ')
    return schema
}

export type FAQItem = { question: string; answer: string }

export function buildFAQSchema(items: FAQItem[] = []) {
    if (!items || items.length === 0) return null

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((it) => ({
            '@type': 'Question',
            name: it.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: it.answer,
            },
        })),
    }
}
