// Central SEO config for all main and project pages
export const seoConfig = {
    home: {
        title: 'Sebastian González — Design Systems Designer | Design Technologist',
        description:
            'Design Systems Designer focused on scalable interfaces, design systems, accessibility, and the intersection of design and code. Based in Bogotá, Colombia.',
        url: 'https://sebastiangonzalez.design/',
        robots: 'index, follow',
        structuredData: {
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'Person',
                    name: 'Sebastian González',
                    jobTitle: 'Design Systems Designer',
                    description:
                        'Design Systems Designer focused on scalable interfaces, design systems, accessibility, and the intersection of design and code',
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
                        'Design Systems',
                        'UI Design',
                        'Component Architecture',
                        'React',
                        'TypeScript',
                        'Accessibility',
                    ],
                    address: {
                        '@type': 'Place',
                        addressLocality: 'Bogotá',
                        addressCountry: 'Colombia',
                    },
                },
                {
                    '@type': 'WebSite',
                    name: 'Sebastian González — Design Systems Designer | Design Technologist',
                    url: 'https://sebastiangonzalez.design/',
                    description:
                        'Portfolio and case studies by Sebastian González — Design Systems, UI design, and design-to-code collaboration.',
                    publisher: {
                        '@type': 'Organization',
                        name: 'Sebastian González Design',
                    },
                },
            ],
        },
    },
    about: {
        title: 'About — Sebastian González | Design Systems Designer',
        description:
            'I combine visual design with systems thinking, accessibility, and frontend collaboration to build scalable digital experiences and design systems.',
        url: 'https://sebastiangonzalez.design/about',
        robots: 'index, follow',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sebastian González',
            jobTitle: 'Design Systems Designer',
            description:
                'I combine visual design with systems thinking, accessibility, and frontend collaboration to build scalable digital experiences and design systems.',
            url: 'https://sebastiangonzalez.design/about',
            sameAs: [
                'https://github.com/sebasgonzac',
                'https://linkedin.com/in/sebastian-gonzalez-design',
            ],
        },
    },
    cv: {
        title: 'CV — Sebastian González | Design Systems Designer',
        description:
            'UI/Visual Designer specializing in Design Systems, component architecture, accessibility, and design-to-code workflows. View my experience.',
        url: 'https://sebastiangonzalez.design/cv',
        robots: 'index, follow',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sebastian González',
            jobTitle: 'Design Systems Designer',
            description:
                'UI/Visual Designer specializing in Design Systems, component architecture, accessibility, and design-to-code workflows.',
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
        title: 'Aleph — Enterprise Design System for Geospatial Interfaces',
        description:
            'Design System for enterprise geospatial platform. Building scalable components, design foundations, design tokens, and interfaces for complex data visualization.',
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
                'Design System for enterprise geospatial platform with scalable components, design foundations, and design tokens.',
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
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: 'Essilor Mobile App',
            url: 'https://sebastiangonzalez.design/projects/essilor',
            description:
                'Mobile application for Essilor business partners focused on commercial workflows and consistent brand experience.',
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
            image: 'https://sebastiangonzalez.design/images/projects/essilor/project.png',
        },
    },
    landing: {
        title: 'Samsung S21 Landing Page – Sebastian González',
        description:
            'Landing page design for Samsung S21 contest. Web interface with Lottie animations and brand-consistent visual design.',
        url: 'https://sebastiangonzalez.design/projects/landing',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/landing/project.png',
        type: 'article',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Samsung S21 Landing Page',
            url: 'https://sebastiangonzalez.design/projects/landing',
            description:
                'Interactive landing page showcasing Samsung S21 visuals with Lottie animations and progressive UX.',
            author: {
                '@type': 'Person',
                name: 'Sebastian González',
                url: 'https://sebastiangonzalez.design/',
            },
            provider: {
                '@type': 'Organization',
                name: 'Sebastian González Design',
            },
            applicationCategory: 'WebApplication',
            operatingSystem: 'Web',
            image: 'https://sebastiangonzalez.design/images/projects/landing/project.png',
        },
    },
    solvefortomorrow: {
        title: 'Solve For Tomorrow Contest – Sebastian González',
        description:
            'Samsung Solve For Tomorrow contest platform design. Interactive web interface with Lottie animations for student and teacher project submissions.',
        url: 'https://sebastiangonzalez.design/projects/solvefortomorrow',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/solvefortomorrow/project.png',
        type: 'article',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Solve For Tomorrow Platform',
            url: 'https://sebastiangonzalez.design/projects/solvefortomorrow',
            description:
                'Contest platform for students and teachers with interactive submissions and community features.',
            author: {
                '@type': 'Person',
                name: 'Sebastian González',
                url: 'https://sebastiangonzalez.design/',
            },
            provider: {
                '@type': 'Organization',
                name: 'Sebastian González Design',
            },
            applicationCategory: 'EducationApplication',
            operatingSystem: 'Web',
            image: 'https://sebastiangonzalez.design/images/projects/solvefortomorrow/project.png',
        },
    },
    startoken: {
        title: 'Startoken — Design Token Pipeline & Figma Integration',
        description:
            'A design token pipeline built with TypeScript that connects Figma variables to production-ready CSS, with token normalization, aliases, and multi-theme support.',
        url: 'https://sebastiangonzalez.design/projects/startoken',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/startoken/project.png',
        type: 'article',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: 'Startoken Design Token Pipeline',
            url: 'https://sebastiangonzalez.design/projects/startoken',
            description:
                'Design token pipeline built with TypeScript that transforms Figma variables into production-ready CSS with token normalization and multi-theme support.',
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
    // MUIK Motion UI Kit landing page
    motionUIKit: {
        title: 'Motion UI Kit – Free React Animation Library by Sebastian González',
        description:
            'A free + pro-ready library of polished UI micro-interactions for React & Framer Motion. Dark mode first, copy-paste components, and smooth 60fps animations.',
        url: 'https://sebastiangonzalez.design/motion-ui-kit',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/motion-ui-kit/cover.png',
        type: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: 'Motion UI Kit (landing)',
            url: 'https://motion.sebastiangonzalez.design/',
            description:
                'Landing and lead capture for Motion UI Kit. Live demo and interactive examples are hosted at motion.sebastiangonzalez.design.',
            creator: {
                '@type': 'Person',
                name: 'Sebastian González',
                url: 'https://sebastiangonzalez.design/',
            },
            isPartOf: {
                '@type': 'WebSite',
                name: 'Sebastian González Portfolio',
                url: 'https://sebastiangonzalez.design/',
            },
            sameAs: ['https://motion.sebastiangonzalez.design/'],
        },
    },
    // MUIK Project case study (different from landing page)
    muikProject: {
        title: 'Motion UI Kit — React Motion & Design System',
        description:
            'A React component library exploring motion in design systems, with Framer Motion, design tokens, accessibility, responsive components, and interactive UI patterns.',
        url: 'https://sebastiangonzalez.design/projects/MUIK',
        robots: 'index, follow',
        image: 'https://sebastiangonzalez.design/images/projects/MUIK/project.png',
        type: 'article',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Motion UI Kit',
            url: 'https://sebastiangonzalez.design/projects/MUIK',
            description:
                'React component library with Framer Motion micro-interactions, design tokens, accessibility, and interactive UI patterns.',
            author: {
                '@type': 'Person',
                name: 'Sebastian González',
                url: 'https://sebastiangonzalez.design/',
            },
            provider: {
                '@type': 'Organization',
                name: 'Sebastian González Design',
            },
            applicationCategory: 'DeveloperTool',
            operatingSystem: 'Web',
            image: 'https://sebastiangonzalez.design/images/projects/MUIK/project.png',
            sameAs: ['https://motion.sebastiangonzalez.design/'],
        },
    },
    // Example for a protected/private page
    hub: {
        title: 'Hub — Design System Audit & Migration Project',
        description:
            'Design System audit and migration project. Foundations, token architecture, component consolidation, and cross-platform consistency.',
        url: 'https://sebastiangonzalez.design/projects/hub',
        robots: 'noindex, nofollow',
        structuredData: undefined,
    },
}
