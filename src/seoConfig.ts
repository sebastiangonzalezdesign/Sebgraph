// Central SEO config for all main and project pages
export const seoConfig = {
    home: {
        title: 'Sebastian González – UI Designer & Design System Developer',
        description:
            "I'm a UI designer focused on scalable design systems and front-end development. Let's build smarter interfaces together. Based in Bogotá, working remotely.",
        url: 'https://sebastiangonzalez.design/',
        robots: 'index, follow',
        structuredData: {
            '@context': 'https://schema.org',
            '@graph': [
                {
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
                {
                    '@type': 'WebSite',
                    name: 'Sebastian González – UI Designer & Design System Developer',
                    url: 'https://sebastiangonzalez.design/',
                    description:
                        'Portfolio and case studies by Sebastian González — UI design, design systems and front-end collaboration.',
                    publisher: {
                        '@type': 'Organization',
                        name: 'Sebastian González Design',
                    },
                },
            ],
        },
    },
    about: {
        title: 'About – Sebastian González',
        description:
            'Get to know more about Sebastian González, a UI/Visual designer passionate about coding, design systems, and shaping digital experiences through technology.',
        url: 'https://sebastiangonzalez.design/about',
        robots: 'index, follow',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sebastian González',
            jobTitle: 'UI Designer & Design System Developer',
            description:
                'UI designer passionate about coding, design systems, and shaping digital experiences through technology.',
            url: 'https://sebastiangonzalez.design/about',
            sameAs: [
                'https://github.com/sebasgonzac',
                'https://linkedin.com/in/sebastian-gonzalez-design',
            ],
        },
    },
    cv: {
        title: 'Resume – Sebastian González',
        description:
            "Download Sebastian's resume and explore experience, skills, and tools. Specialized in UI design, design systems, and front-end development.",
        url: 'https://sebastiangonzalez.design/cv',
        robots: 'index, follow',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sebastian González',
            jobTitle: 'UI & Design System Specialist',
            description:
                'UI & Design System Specialist with experience building scalable, user-centered digital products.',
            url: 'https://sebastiangonzalez.design/cv',
            sameAs: [
                'https://github.com/sebasgonzac',
                'https://linkedin.com/in/sebastian-gonzalez-design',
            ],
        },
    },
    projects: {
        title: 'Projects – Sebastian González',
        description:
            'Explore UI design and front-end projects by Sebastian González. From scalable systems to creative visuals, see how design meets code.',
        url: 'https://sebastiangonzalez.design/projects',
        robots: 'index, follow',
        structuredData: undefined,
    },
    // Project pages with better descriptions
    aleph: {
        title: 'Aleph Design System – Sebastian González',
        description:
            'Design system project for satellite imagery platform. Creating intuitive interfaces for complex geospatial data and enhancing user collaboration across teams.',
        url: 'https://sebastiangonzalez.design/projects/aleph',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/aleph/project.png',
        type: 'article',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: 'Aleph Design System',
            url: 'https://sebastiangonzalez.design/projects/aleph',
            description:
                'Design system project for a geospatial imagery platform focusing on usable UI and scalable design tokens.',
            author: {
                '@type': 'Person',
                name: 'Sebastian González',
                url: 'https://sebastiangonzalez.design/',
            },
            provider: {
                '@type': 'Organization',
                name: 'Sebastian González Design',
            },
        },
    },
    avexpert: {
        title: 'AV Expert Mobile App – Sebastian González',
        description:
            'Mobile app design for AV promoters. Dark UI with gold accents, component library, and enhanced product search for customer engagement.',
        url: 'https://sebastiangonzalez.design/projects/avexpert',
        robots: 'index, follow',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: 'AV Expert',
            url: 'https://sebastiangonzalez.design/projects/avexpert',
            description:
                'Mobile app design for AV promoters featuring a dark theme with gold accents, a component library and improved product search for customer engagement.',
            author: {
                '@type': 'Person',
                name: 'Sebastian González',
                url: 'https://sebastiangonzalez.design/',
            },
            provider: {
                '@type': 'Organization',
                name: 'Sebastian González Design',
            },
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'iOS, Android',
            image: 'https://sebastiangonzalez.design/assets/avexpert/cover.png',
        },
    },
    essilor: {
        title: 'Essilor Mobile App – Sebastian González',
        description:
            'Mobile application design for Essilor optical business partners. Interface design focused on commercial process and brand consistency.',
        url: 'https://sebastiangonzalez.design/projects/essilor',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/essilor/project.png',
        type: 'article',
        structuredData: undefined,
    },
    landing: {
        title: 'Samsung S21 Landing Page – Sebastian González',
        description:
            'Landing page design for Samsung S21 contest. Web interface with Lottie animations and brand-consistent visual design.',
        url: 'https://sebastiangonzalez.design/projects/landing',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/landing/project.png',
        type: 'article',
        structuredData: undefined,
    },
    solvefortomorrow: {
        title: 'Solve For Tomorrow Contest – Sebastian González',
        description:
            'Samsung Solve For Tomorrow contest platform design. Interactive web interface with Lottie animations for student and teacher project submissions.',
        url: 'https://sebastiangonzalez.design/projects/solvefortomorrow',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/solvefortomorrow/project.png',
        type: 'article',
        structuredData: undefined,
    },
    startoken: {
        title: 'Startoken Design System – Sebastian González',
        description:
            'Design token naming methodology for design systems. Unblock token naming conventions and create scalable design token architecture.',
        url: 'https://sebastiangonzalez.design/projects/startoken',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/startoken/project.png',
        type: 'article',
        structuredData: undefined,
    },
    // MUIK Motion UI Kit landing page
    motionUIKit: {
        title: 'Motion UI Kit – Free React Animation Library by Sebastian González',
        description:
            'A free + pro-ready library of polished UI micro-interactions for React & Framer Motion. Dark mode first, copy-paste components, and smooth 60fps animations.',
        url: 'https://sebastiangonzalez.design/motion-ui-kit',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/motion-ui-kit/cover.png',
        type: 'website',
        structuredData: undefined,
    },
    // MUIK Project case study (different from landing page)
    muikProject: {
        title: 'Motion UI Kit Design System Project – Sebastian González',
        description:
            'Design system case study: Building a comprehensive UI component library with React, TypeScript, and Framer Motion. Design tokens, dark mode, and micro-interactions.',
        url: 'https://sebastiangonzalez.design/projects/MUIK',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/MUIK/project.png',
        type: 'article',
        structuredData: undefined,
    },
    // Example for a protected/private page
    hub: {
        title: 'Hub Design System – Sebastian González',
        description: 'This project is protected.',
        url: 'https://sebastiangonzalez.design/projects/hub',
        robots: 'noindex, nofollow',
        structuredData: undefined,
    },
}
