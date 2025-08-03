// Structure of a portfolio Thumbnails
export type PortfolioItem = {
    id: string
    key: string
    title: string
    overview: string
    img: string
    bgClass: string
    order: number
    protected: 'yes' | 'no'
    showProject: 'yes' | 'no'
}

// Data for Thumbnails
export const allPortfolio: PortfolioItem[] = [
    {
        id: '7',
        key: 'startoken',
        title: 'Unblock Token namings',
        overview: 'Design System | Design Tokens | Naming',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-startoken2.webp',
        bgClass: 'card-background-startoken',
        order: 1,
        protected: 'no',
        showProject: 'yes',
    },
    {
        id: '5',
        key: 'Aleph',
        title: 'Aleph Design System',
        overview: 'Design System | Geospatial | Web | UI | Tokens',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-aleph2.webp',
        bgClass: 'card-background-aleph',
        order: 2,
        protected: 'no',
        showProject: 'yes',
    },
    {
        id: '6',
        key: 'hub',
        title: 'Hub Design System',
        overview: 'Design System | Cruisers | iOS | Android | Tokens',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-hub-design-system.webp',
        bgClass: 'card-background-hub',
        order: 3,
        protected: 'yes',
        showProject: 'yes',
    },
    {
        id: '2',
        key: 'av',
        title: 'AV Expert App',
        overview: 'Samsung | Mobile | UI | Prototyping | Lottie',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-av-expert2.webp',
        bgClass: 'card-background-av',
        order: 4,
        protected: 'no',
        showProject: 'yes',
    },
    {
        id: '1',
        key: 'solve',
        title: 'Solve For Tomorrow',
        overview: 'Samsung contest | Web | UI | Lottie',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-solve-for-tomorrow2.webp',
        bgClass: 'card-background-solve',
        order: 5,
        protected: 'no',
        showProject: 'yes',
    },

    {
        id: '3',
        key: 'essilor',
        title: 'Essilor App',
        overview: 'Mobile | UI | Mockups',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-essilor2.webp',
        bgClass: 'card-background-essilor',
        order: 6,
        protected: 'no',
        showProject: 'yes',
    },

    {
        id: '4',
        key: 'landing',
        title: 'Landing S21',
        overview: 'Samsung launching | Web | UI | Prototyping',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-landing-s21-2.webp',
        bgClass: 'card-background-landing',
        order: 7,
        protected: 'no',
        showProject: 'yes',
    },
]

export const uiVisualPortfolio: PortfolioItem[] = [
    {
        id: '2',
        key: 'av',
        title: 'AV Expert App',
        overview: 'Samsung | Mobile | UI | Prototyping | Lottie',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-av-expert2.webp',
        bgClass: 'card-background-av',
        order: 3,
        protected: 'no',
        showProject: 'yes',
    },
    {
        id: '1',
        key: 'solve',
        title: 'Solve For Tomorrow',
        overview: 'Samsung contest | Web | UI | Lottie',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-solve-for-tomorrow2.webp',
        bgClass: 'card-background-solve',
        order: 4,
        protected: 'no',
        showProject: 'yes',
    },

    {
        id: '3',
        key: 'essilor',
        title: 'Essilor App',
        overview: 'Mobile | UI | Mockups',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-essilor2.webp',
        bgClass: 'card-background-essilor',
        order: 5,
        protected: 'no',
        showProject: 'yes',
    },
]

export const codePortfolio: PortfolioItem[] = [
    {
        id: '7',
        key: 'startoken',
        title: 'Unblock Token namings',
        overview: 'Design System | Design Tokens | Naming',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-startoken2.webp',
        bgClass: 'card-background-startoken',
        order: 1,
        protected: 'no',
        showProject: 'yes',
    },
    {
        id: '1',
        key: 'solve',
        title: 'Solve For Tomorrow',
        overview: 'Samsung contest | Web | UI | Lottie',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-solve-for-tomorrow2.webp',
        bgClass: 'card-background-solve',
        order: 2,
        protected: 'no',
        showProject: 'yes',
    },
]

export const dsPortfolio: PortfolioItem[] = [
    {
        id: '7',
        key: 'startoken',
        title: 'Unblock Token namings',
        overview: 'Design System | Design Tokens | Naming',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-startoken2.webp',
        bgClass: 'card-background-startoken',
        order: 1,
        protected: 'no',
        showProject: 'yes',
    },
    {
        id: '5',
        key: 'Aleph',
        title: 'Aleph Design System',
        overview: 'Design System | Geospatial | Web | UI | Tokens',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-aleph2.webp',
        bgClass: 'card-background-aleph',
        order: 2,
        protected: 'no',
        showProject: 'yes',
    },
    {
        id: '6',
        key: 'hub',
        title: 'Hub Design System',
        overview: 'Design System | Cruisers | iOS | Android | Tokens',
        img: 'https://sebastiangonzalez.design/images/thumbnails/thumbnail-hub-design-system.webp',
        bgClass: 'card-background-hub',
        order: 3,
        protected: 'yes',
        showProject: 'yes',
    },
]
