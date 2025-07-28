import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
    title: string
    description: string
    url?: string
    image?: string
    type?: string
    twitterCardType?: string
    robots?: string
    structuredData?: object
}

const defaultImage =
    'https://sebastiangonzalez.design/images/thumbnails/preview-image.png'
const defaultUrl = 'https://sebastiangonzalez.design/'
const defaultType = 'website'
const defaultTwitterCard = 'summary_large_image'

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    url = defaultUrl,
    image = defaultImage,
    type = defaultType,
    twitterCardType = defaultTwitterCard,
    robots = 'index, follow',
    structuredData,
}) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={robots} />
        <link rel="canonical" href={url} />
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        {/* Twitter Card */}
        <meta name="twitter:card" content={twitterCardType} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:url" content={url} />
        {/* Structured Data */}
        {structuredData && (
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        )}
    </Helmet>
)

export default SEO
