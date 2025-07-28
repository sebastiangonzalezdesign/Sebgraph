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
    about: {
        title: 'About – Sebastian González',
        description:
            'Get to know more about Sebastian González, a UI/Visual designer passionate about coding, design systems, and shaping digital experiences through technology.',
        url: 'https://sebastiangonzalez.design/about',
        robots: 'index, follow',
    },
    cv: {
        title: 'Resume – Sebastian González',
        description:
            "Download Sebastian's resume and explore experience, skills, and tools. Specialized in UI design, design systems, and front-end development.",
        url: 'https://sebastiangonzalez.design/cv',
        robots: 'index, follow',
    },
    projects: {
        title: 'Projects – Sebastian González',
        description:
            'Explore UI design and front-end projects by Sebastian González. From scalable systems to creative visuals, see how design meets code.',
        url: 'https://sebastiangonzalez.design/projects',
        robots: 'index, follow',
    },
    // Project pages with better descriptions
    aleph: {
        title: 'Aleph Design System – Sebastian González',
        description:
            'Design system project for satellite imagery platform. Creating intuitive interfaces for complex geospatial data and enhancing user collaboration across teams.',
        url: 'https://sebastiangonzalez.design/projects/aleph',
        robots: 'index, follow',
    },
    avexpert: {
        title: 'AV Expert Mobile App – Sebastian González',
        description:
            'Mobile app design for AV promoters. Dark UI with gold accents, component library, and enhanced product search for customer engagement.',
        url: 'https://sebastiangonzalez.design/projects/avexpert',
        robots: 'index, follow',
    },
    essilor: {
        title: 'Essilor Mobile App – Sebastian González',
        description:
            'Mobile application design for Essilor optical business partners. Interface design focused on commercial process and brand consistency.',
        url: 'https://sebastiangonzalez.design/projects/essilor',
        robots: 'index, follow',
    },
    landing: {
        title: 'Samsung S21 Landing Page – Sebastian González',
        description:
            'Landing page design for Samsung S21 contest. Web interface with Lottie animations and brand-consistent visual design.',
        url: 'https://sebastiangonzalez.design/projects/landing',
        robots: 'index, follow',
    },
    solvefortomorrow: {
        title: 'Solve For Tomorrow Contest – Sebastian González',
        description:
            'Samsung Solve For Tomorrow contest platform design. Interactive web interface with Lottie animations for student and teacher project submissions.',
        url: 'https://sebastiangonzalez.design/projects/solvefortomorrow',
        robots: 'index, follow',
    },
    // Example for a protected/private page
    hub: {
        title: 'Hub Design System – Sebastian González',
        description: 'This project is protected.',
        url: 'https://sebastiangonzalez.design/projects/hub',
        robots: 'noindex, nofollow',
    },
}
