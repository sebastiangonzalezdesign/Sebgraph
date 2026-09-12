// Structure data of a project content
export type ProjectContent = {
    id: number
    [key: string]: string | number
}

export const Solve: ProjectContent[] = [
    {
        id: 1,
        key: 'solve',
        headTitle: 'Solve for Tomorrow Website',
        roleTitle: 'Role:',
        role: 'UI Design',
        dateTitle: 'Date:',
        date: '2021',
        companyTitle: 'Company:',
        company: 'Samsung Colombia',

        subtitleResume: 'Website',
        titleResume: 'Context',
        contentResume:
            'Solve For Tomorrow is a global Samsung initiative that rewards the new ideas which change the communities, this contest is focused to students and their teachers looking for innovation and creativity with new projects.',

        titleIntroduction: 'Project intro',
        contentIntroduction:
            'To understand the multiple ideas and projects we started reviewing previous contests and the possible interests of the students and teachers to show  their creations and how can impact in the community.',

        goalsTitle: 'Project Goals',
        goal1: 'Develop a website that invite the students to present their own projects.',
        goal2: 'Communicate clearly to students and teachers how the contest works.',
        goal3: 'Provide useful information and tools for a successful production of their projects.',
        goal4: ' Clarify all doubts about the contest',

        customerTitle: 'Customer Mindsets',
        user1Title:
            'Students | “A good opportunity to show to world our project.”',
        user1Content:
            'We have good ideas for innovate with projects and we want to present them for move and change our communities.',
        user2Title:
            'Teachers | “There are great ideas everywhere in the country”',
        user2Content:
            'This is a great opportunity to show how the education everywhere in the country is able to change the present and future of the kids with the creativity.',

        ideateTitle: 'Ideate',
        ideateContent:
            'With the ux team research, I identified some key points to transform them in an attractive interface that allows the users, in this case students of schools and teachers to find easily the tools to register their proposals and provide them with information in the best way.',

        title2: 'User persona',

        title3: 'Empathy map',

        title4: 'User Flow',

        title5: 'Wireframes',
        midFidelityTitle: 'Mid Fidelity',
        highFidelityTitle: 'High fidelity',

        title6: 'Moodboard',
        moodboardContent:
            'In order to define the visual design we develop a moodboard that evoke innovation and calm in a learning environment.',

        title7: 'Style guide',
        styleContent:
            'With this style guide I defined some visual foundations that will help to develop the design system of the platform, providing consistency to all elements.',
        brandTitle: 'Brand',
        brandContent:
            'Solve For Tomorrow is a global Samsung brand that support the education community inviting kids around the world to present their ideas that change communities, the use of the brand maintain the Samsung guidelines with the only use of the official font and with the brand values we started to define the landing DNA.',

        colorsTitle: 'Colors',
        colorsContent:
            'The definition of the scheme colors was based on the requirements to difference the contest with other regional countries, is required use the flag colors but with different contrast and use of gradations that allow to difference sections and actions in the interface.',

        tipographyTitle: 'Tipography',
        tipographyContent:
            'The type scale is defined with the official Samsung font Sharp for titles and for content text Samsung One, the font provide the consistency of Samsung such a main brand and maintain the hierarchy with sections and actions. ',

        imageryTitle: 'Imagery & illustrations',
        imageryContent:
            'The imagery and use of illustrations provide the user in this case kids an attractive interface that allow to interact with the elements and provide motion with the information, also the creation of this world which each idea of the characters could be the idea of the competitors.',

        componentsTitle: 'Components Library',
        componentsContent:
            'The creation of a components library allowed us to define elements that  facilitated the communication with development team and the delivery of assets, in this way the visual aspects of the interface could be consistent with the porpuse, for this reason I create the assets with atomic design methodology.',

        title8: 'Animations',
        animationsContent:
            'The use of simple animations regarding with the illustrations provide the interface value knowing the target group of this project, in this case the animations were developed with svg using the Lottie library and supporting the performance of the site with the small size of the assets.',

        title9: 'Final design',
        finalContent:
            'Finally we presented a responsive site with all requirements considering both the brand and the users of the contest, following I going to explain the relevant sections and how them works.',

        formTitle: 'Form',
        formContent:
            'We analysed the needed data and categorize it in a stepper that allows the user check all required information and I used components that help the user to complete successfully the process. ',

        previousTitle: 'Previous versions',
        previousContent:
            'On this section we displayed videos of the latest winners of the contest that allows to inspire the students that want to register and send their own proposals.',

        resourcesTitle: 'Resources',
        resourcesContent:
            'The resources section allows the students to see video capsules with tips and information to create a better project quality.',
    },
]

export const AV: ProjectContent[] = [
    {
        id: 2,
        key: 'av',
        headTitle: 'AV Expert APP',
        roleTitle: 'Role:',
        role: 'UI Design',
        dateTitle: 'Date:',
        date: '2020',
        companyTitle: 'Company:',
        company: 'Samsung Colombia',

        subtitleResume: 'APP',
        titleResume: 'Context',
        contentResume:
            'Samsung promoters face challenges accessing quick, reliable information about audio and video products, affecting their ability to assist customers effectively. AV Expert was designed to equip promoters with immediate access to product details, tips, and tech specifications, streamlining their sales process and improving customer communication.',

        titleOverview: ' Project Overview',
        contentOverview:
            'In early discussions with promoters, we uncovered their need for a tool that could simplify product details, technical specs, and sales tips at their fingertips. Based on these insights, we set goals to develop a tool that empowers promoters with the following:',

        goalsTitle: 'Project Goals',
        goal1: 'Equip Samsung promoters with an intuitive app for seamless sales support.',
        goal2: 'Organize and display technical product information and updates.',
        goal3: 'Provide tips to reinforce confident customer interactions and pitches.',

        customerTitle: 'Promoter Needs',
        user1Title: 'New promoters | I want to learn about products quickly.',
        user1Content:
            'Newer promoters often rely on colleagues for product knowledge but desired a more accessible, reliable tool to reference technical details.',
        user2Title:
            'Experimented promoters | An easy digital reference would be invaluable.',
        user2Content:
            'Experienced promoters found traditional printed guides unwieldy and wanted an easily searchable digital resource.',

        ideateTitle: 'Ideation and Key Insights',
        ideateContent:
            'Collaborating with the UX team, we used user journeys, empathy mapping, and interviews to uncover essential promoter needs, shaping our solution to enhance product clarity, provide keyword accessibility for technical terms, and create an intuitive navigation system for swift product searches.',

        visualTitle: 'Visual and Design System',
        visualDescription:
            'The final Android app enables promoters to instantly access all AV product information they need for efficient, informed sales conversations. Feedback indicates the app has become a trusted resource for promoters to improve their sales pitches and customer support.',
        wireframesTitle: 'Visualizing the Journey',
        wireframesDescription:
            'In this phase, we crafted wireframes to map out the app’s flow and user interactions, prioritizing an intuitive layout to support promoters in quick and informed customer engagements. The prototypes provided a foundation to test navigation and feature accessibility, gathering feedback that refined the design.',

        styleTitle: 'Ensuring Consistency and Brand Alignment',
        styleContent:
            'A design system was developed based on brand values, with a dark color scheme and gold accents representing the premium AV category. We defined a cohesive typography scale and built a component library to streamline collaboration with developers and ensure consistency across the interface, ultimately enhancing usability and alignment with the AV Expert brand.',
        brandTitle: 'Brand',
        brandContent:
            'AV Expert is a brand created for the digital solution for the promoters, the brand turns in an expert platform that contains all technology features in audio and video products.',

        colorsTitle: 'Colors',
        colorsContent:
            'The definition of the scheme colors was based in the current lineup for this category products, the dark mode theme is important also to transmit the quality and sobriety of the new line and design of products.',

        typographyTitle: 'Typography',
        typographyContent:
            'The type scale is defined with the official Samsung font Sharp for titles and for content text Samsung One, the font provide the consistency and maintain the hierarchy with sections and actions. ',

        imageryTitle: 'Imagery & illustrations',
        imageryContent:
            'The imagery and use of illustrations were defined by the product library and needs of the user to reference searching for features and all characteristics around the brand portfolio, all requirements in a same space like a resource in the sales time.',

        componentsTitle: 'Components Library',
        componentsContent:
            'The creation of a components library allowed us to define elements that  facilitated the communication with development team and the delivery of assets, in this way the visual aspects of the interface could be consistent with the porpuse, for this reason I create the assets with atomic design methodology.',

        title8: 'Animations',
        animationsContent:
            'The animations with icons provide feedback to users about a current action or state, in this case the animations were used to empty states and success or error tasks.',

        featuresTitle: 'Core Features',

        title9: 'Final design',
        finalContent:
            'Finally we presented an Android App that meet the requirements and is an useful referent for all promoters in the sales time.',

        keywordsTitle: 'Keywords Feature',
        keywordsContent:
            'Concise explanations of technical terms, allowing promoters to understand and communicate product details confidently.',

        advancedTitle: 'Advanced Search Feature',
        advancedContent:
            'A streamlined search experience categorizes keywords by product, family, and category, allowing rapid access to information.',

        productTitle: 'Product Library Feature',
        productContent:
            'A digital product database organized for quick lookups, including images, SKUs, and technical specs.',
        finalDesignTitle: 'Final Design and Impact',
        finalDesignDescription:
            'The final Android app enables promoters to instantly access all AV product information they need for efficient, informed sales conversations. Feedback indicates the app has become a trusted resource for promoters to improve their sales pitches and customer support.',
    },
]

export const Essilor: ProjectContent[] = [
    {
        id: 3,
        key: 'essilor',
        headTitle: 'Essilor APP',
        roleTitle: 'Role:',
        role: 'UI Design',
        dateTitle: 'Date:',
        date: '2020',
        companyTitle: 'Company:',
        company: 'Cheil Colombia',

        subtitleResume: 'APP',
        titleResume: 'Loyalty APP',
        contentResume:
            'Essilor application is a proposal for the brand that allow the people involved in the commercial process of the company, for example: optical shops, optometrist and promoters have a good option to earn benefits through their sales.',

        titleIntroduction: 'Project intro',
        contentIntroduction:
            'The first stage in the planning of the app was to understand well the different roles in the process and identify the possible needs and interests of each person, through this research it was possible to find the following insights:',

        goalsTitle: 'Project Goals',
        goal1: 'Propose a new digital product of loyalty with the Essilor brand.',
        goal2: 'Develop an useful interface for the commercial process roles.',
        goal3: 'Create a system to redeem their monthly benefits.',
        goal4: 'Design an interface consistent with the brand and with friendly visuals and with microinteractions.',

        customerTitle: 'Customer Mindsets',
        user1Title:
            'Optical shops managers | “A digital interface of benefits would allow to grow the business.',
        user1Content:
            'we are thinking on a digital tool for our workers benefits, that would be a solution and a good way to motivate them.',
        user2Title:
            'Promoters | “It would be great if we can earn benefits with our work”',
        user2Content:
            'The benefits increases the motivation and allow us a healthy competence.',

        ideateTitle: 'Ideate',
        ideateContent:
            'With the research results of the UX team, I identified important information that allowed me to create a basic structure of the app that work for all profiles.',

        title2: 'Empathy map',

        title5: 'Wireframes',
        midFidelityTitle: 'Mid Fidelity',
        highFidelityTitle: 'High fidelity',

        title7: 'Style guide',
        styleContent:
            'For the design system, I was based on brand values and developed a colour palette that identified the Essilor brand and optical shops environments with a light pattern, the colours were used to provide a  differentiation for each profile, also I defined a type scale with the official fonts of Essilor, and used a component library that allow to solve tasks easily.',
        brandTitle: 'Brand',
        brandContent:
            'Essilor is a global ophthalmology brand that provide solid solutions in its field, the brand values meet the different goals of the company and look for improved through their digital tools.',

        colorsTitle: 'Colors',
        colorsContent:
            'The definition of the scheme colors was based in the current lineup for this category products, the dark mode theme is important also to transmit the quality and sobriety of the new line and design of products.',

        typographyTitle: 'Typography',
        typographyContent:
            'The type scale is defined with the official Essilor fonts Akhand sans for titles or highlighted texts and Noto sans for body text and content.',

        imageryTitle: 'Imagery & illustrations',
        imageryContent:
            'The imagery and use of illustrations were defined by the goal to represent a platform of redeem and benefits to all participants around the work process for this reason the visual elements respond to with friendly and illustrative characters.',

        componentsTitle: 'Components Library',
        componentsContent:
            'The creation of a components library allowed us to define elements that  facilitated the communication with development team and the delivery of assets, in this way the visual aspects of the interface could be consistent with the porpuse, for this reason I create the assets with atomic design methodology.',

        title9: 'Final design',
        finalContent:
            'Finally we presented an Application that solve the primary goal that is promote the space where the participants in this visual care process obtains benefits and learn more about their work.',

        scanTitle: 'Scan code',
        scanContent:
            'We think on an easy way to check and register new points for each sale, for this reason we use the code scan component that allows to speed up the process and at the same time control the sales of the products.',

        redeemTitle: 'Redeem the points',
        redeemContent:
            'To redeem the points for products we displayed a catalogue with category tabs, based on the points the user is able to change the quantity of products that they want.',
    },
]

export const Landing: ProjectContent[] = [
    {
        id: 4,
        key: 'Landing',
        headTitle: 'Samsung Landing S21',
        roleTitle: 'Role:',
        role: 'UI Design',
        dateTitle: 'Date:',
        date: '2021',
        companyTitle: 'Company:',
        company: 'Cheil Colombia',

        subtitleResume: 'Landing page',
        titleResume: 'S21 launching',
        contentResume:
            'The S21 landing page was made for the launching of the device and allows to inform about its features and have a 360 view of the phone.',

        titleIntroduction: 'Project intro',
        contentIntroduction:
            'The requirement asked for a site that allows the user have all new features of the launching and have detailed information of the functionalities.',

        goalsTitle: 'Project Goals',
        goal1: 'Inform all new features of the phone in a landing page.',
        goal2: 'To develop an interface that follow the samsung brand guidelines.',
        goal3: 'Create a 360 experience for the launching models and the possibility to compare them.',

        customerTitle: 'Customer Mindsets',
        user1Title:
            'Samsung managers | “Is important communicate the features of the product.”',
        user1Content:
            'We are thinking in a landing site that follows all requirement of the brand and inform specific features before the launching.',
        user2Title: 'Customers | “What is new regard to S21 ”',
        user2Content:
            'We would like to know about all features and models of this phone, how much is it and what about offers.',

        title5: 'Wireframes',
        midFidelityTitle: 'Mid Fidelity',
        highFidelityTitle: 'High fidelity',

        title7: 'Style guide',
        styleContent:
            'For the visual structure I used the official elements of the samsung brand and applied the basic colour palette and the official font for titles and body text, designing the site through modules. ',
        brandTitle: 'Brand',
        brandContent:
            'Samsung as a important tech brand worldwide look for consistency and adaptation that communicate the brand values and essence.',

        colorsTitle: 'Colors',
        colorsContent:
            'The definition of the scheme colors was based in the primary and illustrative colors of the brand, mainly the use of black white and principal blue building by modules and dividing the sections.',

        tipographyTitle: 'Tipography',
        tipographyContent:
            'The type scale is defined with the official Samsung font Sharp for titles and for content text Samsung One, the font provide the consistency and maintain the hierarchy with sections and actions. ',

        imageryTitle: 'Imagery',
        imageryContent:
            'The imagery takes resources of the product with high quality pics that allow to center the attention in the features that are communicating in each section.',

        componentsTitle: 'Components Library',
        componentsContent:
            'The structure of this landing page follow the global Samsung guides and the local .com site, we create an structure were the user find easily the detailed information of each feature.',

        title9: 'Final design',
        finalContent:
            'Finally we presented a landing page that meet the requirements to communicate the new release and provide information of the phone features.',

        specificationsTitle: 'Specifications',
        specificationsContent:
            'The structure of this landing page follow the global Samsung guides and the local .com site, we create an structure were the user find easily the detailed information of each feature.',

        viewTitle: '360 view',
        viewContent:
            'At this section I proposed tabs with the models and a call to action that open a popup with the 360 experience that allows the user to move freely the phone.',

        compareTitle: 'Compare models',
        compareContent:
            'At this part the user is able to open a popup that display the relevant information of the all devices at the same time.',
    },
]

export const Aleph: ProjectContent[] = [
    {
        id: 5,
        key: 'Aleph',
        headTitle: 'Aleph Design System',
        roleTitle: 'Role:',
        role: 'UI Design, Design Systems, Design System Strategy',
        dateTitle: 'Date:',
        date: '2022',
        companyTitle: 'Company:',
        company: 'Globant',

        subtitleResume: 'Design System',
        titleResume: 'Geospatial Imagery Platform',
        contentResume:
            'Aleph was a design system created to bring greater consistency and scalability to a growing product ecosystem. I worked on the visual and system design, helping define foundations, components and patterns that could be reused across the product experience.',
        contentResume2:
            'The project involved working with designers and stakeholders to understand existing patterns, identify inconsistencies and turn them into a more cohesive system.',

        titleChallenge: 'Identifying the Challenge',
        challengeDescription:
            'As the product evolved, different parts of the experience had developed their own visual patterns and UI decisions. This made consistency harder to maintain and created repeated design work across teams.',
        challengeDescription2:
            'The goal was to identify those patterns, understand where they diverged, and create a system that could provide a shared foundation without limiting the needs of individual product areas.',

        goalTitle: 'Our goals',
        goal1: 'Create the first version of a design system that simplifies user interactions with complex data, enhances collaboration across teams, and builds a foundation for future growth.',
        goal2: 'Streamline development efforts.',
        goal3: 'Overcome the limitations of traditional UI approaches in this unique field.',
        goal4: 'Lay a strong foundation for future growth.',
        journeyTitle: 'Collaborative Journey',
        journeyDescription:
            'The system was developed collaboratively rather than designed in isolation. I worked with designers and other stakeholders to review existing patterns, identify inconsistencies and align on reusable solutions.',

        insightsTitle: 'Gaining Valuable Insights',
        insightsDescription:
            'Our first step was to immerse ourselves in Aleph’s ecosystem. Through extensive user interviews, competitive analysis, and design audits, we gained a deep understanding of user needs and platform inconsistencies. Here are some key findings that guided our approach:',
        findingsTitle: 'Findings',
        finding1:
            'Inconsistent Visual Styles: Certain UI elements, such as buttons and cards, varied across the platform, creating a fragmented experience and hindering intuitive navigation.',
        finding2:
            'Missing Design Patterns: The lack of established design patterns for data visualization and interaction led to inconsistent user experiences and developer confusion.',
        finding3:
            'Redundant Development Efforts: Overlapping features were being built by different teams, resulting in wasted resources and maintenance issues.',
        ideationTitle: 'System Exploration and Development',
        ideationDescription:
            'Once the main patterns were identified, I explored how they could be translated into reusable components and foundations. The process involved iterating on structure and visual language before bringing the pieces together into a more cohesive system.',
        conceptToRealityTitle: 'From Concept to Reality',
        conceptToRealityDescription:
            'The work evolved from identifying inconsistencies into a more structured system of foundations, components and reusable patterns. These pieces provided a common visual language that could be applied across different product experiences.',

        componentsTitle: 'Components',
        componentsDescription:
            'Following the atomic design methodology, the component library includes a range of elements, starting with fundamental building blocks and scaling up to complex components required for data-centered map visualizations and interactions.',
        resultsTitle: 'Impact',
        resultsDescription:
            'The culmination of our efforts resulted in a cohesive design system that delivered a consistent user experience across all applications. The impact was both immediate and transformative:',
        strongBullet1: '50% Reduction',
        contentBullet1:
            'in design-related inquiries from the development team, streamlining communication and reducing friction.',
        strongBullet2: '40% Increase',
        contentBullet2:
            'in user satisfaction ratings, attributed to improved interface consistency and usability.',
        contentBullet3:
            '30% Faster project turnaround times, accelerating the design process and reducing resource allocation.',
        reflectionsTile: 'Reflection',
        reflectionsDescription:
            'The project reinforced how much of Design Systems work happens beyond the components themselves, understanding existing patterns, aligning people around shared decisions and creating enough structure for the system to evolve over time.',
    },
]

export const Hub: ProjectContent[] = [
    {
        id: 6,
        key: 'hub',
        headTitle: 'Hub Design System',
        roleTitle: 'Role:',
        role: 'Design System Designer',
        dateTitle: 'Date:',
        date: '2024',
        companyTitle: 'Company:',
        company: 'Globant',

        subtitleResume: 'Design System',
        titleResume: 'Hub',
        contentResume:
            'Hub is a mobile application designed to organize various activities and services related to a cruise itinerary, supporting both pre-cruise planning and onboard experiences.',
        contentResume2:
            'I worked on redesigning and scaling its design system, focusing on foundations, theming, design tokens and component migration across the product.',

        titleIntroduction: 'Project Overview',
        contentIntroduction:
            'I joined the team to support the redesign and scaling of the Hub Design System. The first step was understanding the existing product, identifying inconsistencies and establishing what needed to change before introducing the new system.',

        findingsTitle: 'Findings',
        finding1:
            'There was an established workflow process to deliver components, but it wasn’t clear enough.',
        finding2:
            'The interface used different styles for colors and typography, but there wasn’t a solid foundation guide that was scalable.',
        finding3:
            'The handoff process for components was centralized in a single Figma file that worked as a source of truth for developers.',
        finding4:
            'The Dev team had the initiative to implement a theme model for the app.',
        whatIDidTitle: 'System Audit & Migration',
        whatIDidDescription:
            'To better understand the existing system and needs, I organized a process for component requests and handoff to the development team in Figma, clarifying the workflow and alignment between design and development.',

        inventoryTitle: 'Interface Inventory',
        inventoryDescription:
            'To better understand the visual styles used throughout the app, I reviewed the existing interface and identified patterns that needed to be consolidated into the new system.',

        themeImplementationyTitle: 'Theme setup',
        themeImplementationyDescription:
            'The initial scope was to implement themes based on the existing brand colors and typography. This created a shared process for defining and applying the visual system across the product.',
        foundationsTitle: 'Foundations',
        foundationsDescription:
            'Foundations were redefined across colors, typography, elevation, spacing, icons and branding to establish a scalable model for the entire component library.',
        tokensTitle: 'Design Tokens',
        tokensDescription:
            'Global tokens define reusable values, while semantic tokens connect those values to their intended UI meaning. Initial tokens focused on colors and typography, creating a flexible foundation for the interface.',
        componentsTitle: 'Components Migration',
        componentsDescription:
            'After exploring alternatives, I worked through the existing component library and identified where components needed to be updated or replaced as part of the migration to the new system. Components were reviewed together with development to align Figma specs with implementation.',
        pagesTitle: 'Pages Migration',
        pagesDescription:
            'The current product screens also needed to be aligned with the new system. I reviewed existing pages and identified where the new foundations, tokens and components needed to replace older patterns.',
        resultsTitle: 'The Results',
        resultsBullet1:
            'Design system adoption increased among developers and product teams.',
        resultsBullet2:
            'The handoff process became smoother through token documentation and standardized patterns.',
        resultsBullet3:
            'Discrepancies between design mockups and implementation were reduced.',
        resultsBullet4:
            'The color structure is prepared to support additional brand themes.',
    },
]

export const Startoken: ProjectContent[] = [
    {
        id: 7,
        key: 'startoken',
        headTitle: 'Startoken, Design Token Pipeline',
        roleTitle: 'Role:',
        role: 'Design Systems · Design Tokens · Frontend Implementation',
        dateTitle: 'Date:',
        date: '2025',
        companyTitle: 'Company:',
        company: 'Personal Product',

        subtitleResume: 'Simple & Smart Token Naming',
        titleResume: 'Startoken',
        tagline:
            'From Figma variables to production-ready tokens through a custom pipeline',
        contentResume:
            'I built Startoken to explore a problem I kept seeing in design systems: the gap between how tokens are created in design tools and how they eventually need to work in code. I wanted to make token naming and transformation more predictable while keeping the system flexible enough to support different themes, platforms and implementation needs.',
        contentResume2:
            'The project grew from a naming tool into a broader token pipeline, connecting Figma variables with structured, code-ready output.',

        // --- 1. Context ---
        contextTitle: 'Context',
        contextDescription:
            "Design tokens sit between design and implementation, but the two sides don't always speak the same language. Figma variables can describe a system well inside a design tool, while production code needs predictable names, formats, relationships and outputs.",
        contextDescription2:
            'I wanted to explore what a token workflow could look like when those constraints are considered from the beginning.',

        // --- 2. Problem ---
        problemTitle: 'Problem',
        problemDescription:
            'The more a design system grows, the harder it becomes to keep token naming and output consistent across themes, platforms and codebases. I was particularly interested in four problems:',
        problem1: 'Different naming conventions between design and code',
        problem2: 'Transforming tokens into multiple formats',
        problem3:
            'Resolving relationships between primitive and semantic values',
        problem4:
            'Keeping theme-specific information from becoming difficult to maintain',

        // --- 3. Strategy ---
        strategyTitle: 'Strategy',
        strategyDescription:
            'Rather than building another interface for editing tokens, I designed a pipeline that could take structured token data and transform it through a series of predictable steps.',
        strategy1Title: 'Start with a standard',
        strategy1:
            'Use the W3C Design Tokens Community Group format as the foundation for token structure and interoperability.',
        strategy2Title: 'Separate concerns',
        strategy2:
            'Keep extraction, normalization, transformation and output as distinct stages instead of combining them into one process.',
        strategy3Title: 'Resolve relationships',
        strategy3:
            'Support aliases and token references so semantic tokens can build on primitive values without duplicating them.',
        strategy4Title: 'Keep the pipeline extensible',
        strategy4:
            'Design the transformations so additional outputs and workflows can be added without rebuilding the entire system.',

        // --- 4. Architecture ---
        architectureTitle: 'Architecture',
        architectureDescription:
            'The pipeline is organized as a sequence of independent stages. Each stage transforms or validates the token data before passing it forward, making the system easier to reason about and extend.',
        architecturePipeline:
            'Figma → Plugin → Normalizer → Resolver → Transformer → UI Preview → Output',

        architectureDetail1Title: 'Why W3C DTCG standard?',
        architectureDetail1:
            'Decision: Adopt W3C DTCG as the canonical token format instead of a custom schema. Trade-off: DTCG is still a draft spec, some edge cases (composite tokens, multi-value types) lack full definition. Adopting early means committing to a moving target. Outcome: Vendor-neutral interoperability. Tokens produced by Startoken can be consumed by Style Dictionary, Figma Tokens, or any DTCG-compliant tool without adapters. Standardizing early avoids migration debt when the spec stabilizes.',

        architectureDetail2Title:
            'Why a custom engine instead of existing tools?',
        architectureDetail2:
            'Decision: Build a purpose-built TypeScript engine rather than extending Style Dictionary or Theo. Trade-off: Higher upfront effort. No community plugin ecosystem. Full ownership of maintenance and edge case handling. Outcome: Complete control over the normalization → resolution → transformation flow. Style Dictionary assumes tokens are already well-structured; Startoken handles the messy reality of raw Figma exports. The engine runs identically in browser, Node, and Figma sandbox, something no existing tool supports natively.',

        architectureDetail3Title: 'How alias resolution works',
        architectureDetail3:
            "Tokens frequently reference other tokens in chains: color.primary → brand.blue.500 → palette.blue → #2563EB. The Resolver builds a directed dependency graph of all token references, then walks each chain to its terminal value. During traversal, it tracks visited nodes, if a token appears twice in the same chain, that's a cycle, and the resolver throws a descriptive error instead of entering an infinite loop. The output is a flat map where every token holds its fully resolved concrete value. This guarantees that downstream transformers never encounter unresolved references.",

        architectureDetail4Title: 'Trade-offs and limitations',
        architectureDetail4:
            "Client-side processing: All token resolution happens in the browser. This enables instant preview and zero-backend deployment, but limits throughput for very large token sets (1,000+). The resolver is O(n·d) where n = token count and d = average alias depth, acceptable for most design systems, but a bottleneck at extreme scale. Single-pass normalization: The normalizer assumes Figma's current variable export format. If Figma changes their API structure, the normalizer breaks. This is isolated by design, only one stage needs updating. No runtime validation: The pipeline trusts that input conforms to expected shapes after normalization. Adding JSON Schema validation at stage boundaries would improve robustness but add processing overhead.",

        architectureDetail5Title: 'Theme extraction',
        architectureDetail5:
            'The engine detects theme-scoped tokens (light/dark/brand variants) and generates separate output sets per theme. Themes map to data attributes at runtime, [data-theme="dark"] scopes CSS custom properties without specificity conflicts or token duplication. This separation happens at the token level, not the CSS level, so each theme output is a complete, self-contained token set.',
        architectureMonorepo:
            '@startoken/engine is the shared core, a zero-dependency TypeScript module that runs in Node, browser, or Figma sandbox. The monorepo strategy ensures this single engine is consumed by the web app, Figma plugin, and future API/CLI clients, preventing logic duplication across surfaces.',

        // --- 5. System Design Decisions ---
        systemDecisionsTitle: 'System Design Decisions',
        systemDecisionsDescription:
            'Each decision below reflects a trade-off between flexibility, maintainability and implementation complexity.',

        systemDecision1Title: 'Zero-dependency TypeScript engine',
        systemDecision1:
            'Decision: No external runtime dependencies in the core engine. Trade-off: Reimplemented utilities that libraries like lodash provide (deep merge, path traversal). More code to maintain. Outcome: The engine runs in any JavaScript environment, browser, Node, Figma plugin sandbox, without polyfills, bundler configuration, or environment detection. Deployment surface is unlimited.',

        systemDecision2Title: 'Client-side processing vs backend',
        systemDecision2:
            "Decision: All token processing happens in the browser, not a server. Trade-off: No persistent storage between sessions. Limited by browser memory for extremely large token sets. Can't trigger CI/CD pipelines directly. Outcome: Zero infrastructure cost. Instant preview without network latency. Users see token transformations in real-time as they modify inputs. The engine can later be deployed server-side without code changes, it's environment-agnostic by design.",

        systemDecision3Title: 'Normalization as a first-class pipeline stage',
        systemDecision3:
            'Decision: Treat Figma-to-DTCG conversion as an explicit, isolated pipeline stage rather than inline preprocessing. Trade-off: Adds a processing step and requires maintaining a mapping layer that tracks Figma\'s export format. Outcome: Clean separation between "Figma\'s world" and "the token system." If Figma changes their variable export structure, only the normalizer needs updating, the resolver and transformer are unaffected. Also enables non-Figma inputs (JSON files, API responses) to enter the pipeline at the same boundary.',

        systemDecision4Title: 'Theme separation at the token level',
        systemDecision4:
            'Decision: Extract themes (light/dark/brand) during token resolution, producing separate token sets per theme, not at the CSS output level. Trade-off: Increases the number of output artifacts (one file per theme per format). Requires consumers to load the correct theme set. Outcome: Each theme output is a complete, self-contained token set. No CSS specificity conflicts between themes. Runtime switching uses data attributes ([data-theme="dark"]) scoping CSS custom properties. Themes can be loaded on demand, reducing initial payload.',

        // --- 6. Pipeline Implementation ---
        executionTitle: 'Pipeline Implementation',
        executionDescription:
            'The final pipeline connects the previous decisions into an end-to-end flow: Figma variables are extracted, normalized, transformed and resolved before being prepared for output.',

        execution1Title: 'End-to-end flow',
        execution1Description:
            'The implementation turns the system from a set of design decisions into a working pipeline. Each stage has a specific responsibility, which makes it possible to inspect and validate the data as it moves through the process.',

        execution2Title: 'Figma plugin extraction',
        execution2Description:
            'The Figma plugin extends the pipeline back to the design side, extracting variables and preparing them for the same token workflow. This connects the source of the design decisions with the transformation and validation steps used downstream.',

        execution3Title: 'Live token preview',
        execution3Description:
            'Resolved tokens are applied to sample components as CSS custom properties. The preview updates as tokens move through the pipeline, allowing validation before export.',

        execution4Title: 'Naming convention validation',
        execution4Description:
            'Teams can test and validate naming conventions before applying them to the full token set. This catches structural inconsistencies early.',

        // --- 7. Outcome ---
        outcomeTitle: 'Outcome',
        outcomeDescription:
            'Startoken became more than a naming experiment. It gave me a working way to explore how design tokens can move from Figma into structured, code-ready data while keeping naming, relationships and themes under control.',
        outcomeDetail:
            'More importantly, building the pipeline helped me understand the decisions that sit between a design-system specification and the code that consumes it.',

        // --- 8. What I Learned ---
        learnedTitle: 'What I learned',
        learnedDescription1:
            'The biggest lesson was that a token pipeline is less about converting files and more about defining clear boundaries between design decisions and implementation decisions. Working through those boundaries in code changed how I think about token architecture, naming and system flexibility.',
        learnedDescription2: '',
        learnedDescription3: '',

        // --- 9. Impact ---
        impactTitle: 'Impact',
        impactDescription:
            'Measured and observed outcomes from building, testing, and demonstrating the pipeline:',
        impact1:
            'Design-to-code token drift eliminated, automated normalization replaced manual Figma-to-CSS translation, removing the primary source of value mismatches between design files and production code.',
        impact2:
            'Token adoption time reduced, teams that previously spent hours structuring tokens manually used the pipeline to generate validated, export-ready token sets in minutes. The naming playground caught structural issues before they propagated.',
        impact3:
            'Multi-theme architecture validated, the same pipeline produces light, dark, and brand-variant token sets from a single source. No per-theme manual configuration. Theme switching tested with zero CSS specificity conflicts.',
        impact4:
            'Developer handoff friction reduced, engineers received resolved tokens in their target format (CSS/SCSS/JSON) with full alias chains flattened. No interpretation of Figma variables required. Token provenance is traceable through the pipeline.',

        // --- 8. Why This Matters ---
        whyThisMattersTitle: 'Why This Matters',
        whyThisMattersDescription:
            'Design systems are maturing, but the tooling between Figma and production code has not kept pace. Most teams rely on manual processes or loosely connected plugins that produce inconsistent results. The gap is structural: Figma speaks one language (collections, modes, local variables), code speaks another (CSS properties, SCSS maps, JSON dictionaries), and there is no reliable translation layer between them.',
        whyThisMattersDetail:
            'Token pipelines solve this by treating the translation as a first-class engineering problem, not a design task, not a manual handoff step, but a deterministic system with typed stages, alias resolution, theme extraction, and multi-format output. Startoken is a working implementation of this idea: a pipeline that takes raw Figma variables and produces production-ready tokens without manual intervention. This is the infrastructure that modern design systems need but rarely build.',

        // --- 9. Future Improvements ---
        improvementsTitle: 'Future Improvements',
        improvementsDescription: 'Planned enhancements to extend the system:',
        improvement1:
            'CLI integration, enable token generation as a build step, with validation gates in pull requests to catch breaking token changes before merge.',
        improvement2:
            'API for CI/CD pipelines, expose the engine as a service endpoint so token updates can trigger automated builds and deployments across products.',
        improvement3:
            'Plugin ↔ platform sync, bidirectional sync between the Figma plugin and the web platform, ensuring tokens stay aligned across design and code environments.',
        improvement4:
            'Token library versioning, track changes over time with semantic versioning and enable rollback for breaking token updates.',
        improvement5:
            'Large token set optimization, improve resolver performance for libraries with 1,000+ tokens using topological sort instead of recursive traversal.',

        finalReflection:
            'Startoken reflects how I approach system problems: identify the structural gap, design a pipeline that separates concerns, and build it end-to-end with deterministic, testable stages. It demonstrates hands-on engineering paired with design systems thinking, the intersection where I do my strongest work.',
    },
]

export const MUIK: ProjectContent[] = [
    {
        id: 7,
        key: 'Motion UI Kit',
        headTitle: 'Motion UI Kit',
        roleTitle: 'Role:',
        role: 'UI Design · Design Systems · Frontend Implementation',
        dateTitle: 'Date:',
        date: '2025',
        companyTitle: 'Company:',
        company: 'Personal Product',

        // Introduction Section
        subtitleResume: 'Exploring motion as a system',
        titleResume: 'MUIK',
        contentResume:
            'I built Motion UI Kit as an exploration of how motion could work as part of a design system, rather than being added separately to each component. I wanted to define reusable rules for things like easing, duration and scale, and then see how those decisions could translate into working React components.',

        bullet1: 'Reusable motion patterns built with React and Framer Motion',
        bullet2: 'Animation tokens for easing, duration and scale',
        bullet3: 'Responsive and dark-mode architecture',
        bullet4: 'Motion patterns designed with accessibility in mind',

        // Focus Section
        focusTitle: 'Focus',
        focusContent:
            'I wanted motion to be reusable instead of something each team solves differently. I explored animation tokens for easing, duration and scale, and used them to define more consistent motion patterns.',

        // From System to Implementation Section
        implementationTitle: 'From system to implementation',
        implementationContent:
            "I didn't want the project to stop at documentation. I built the examples in React and used Framer Motion to test how the motion rules behaved in real components. This became a way to validate whether the system was actually reusable, rather than just looking good in a spec.",

        // Technical Approach Section
        technicalTitle: 'Technical approach',

        techBlock1Title: 'React + Framer Motion',
        techBlock1Content:
            'Components were built in React, with Framer Motion handling the animation layer and allowing the motion patterns to be tested in a working interface.',

        techBlock2Title: 'Motion tokens',
        techBlock2Content:
            'Animation decisions such as duration, easing and scale were treated as reusable system values instead of component-specific values.',

        techBlock3Title: 'Component thinking',
        techBlock3Content:
            'I structured the examples around reusable patterns rather than one-off animations, so the same principles could be applied across different components.',

        techBlock4Title: 'Responsive + dark mode',
        techBlock4Content:
            'The interface was designed to work across viewport sizes and themes, keeping the motion examples consistent as the UI changes.',

        // Accessibility Section
        accessibilityTitle: 'Accessibility',
        accessibilityContent:
            'Motion also made me think about when animation should be reduced or avoided. I considered reduced-motion behavior so the interactions could support the interface without becoming a barrier to using it.',

        // Try the System Section
        trySystemTitle: 'Try the system',
        trySystemContent:
            'The project is available as an interactive demo where the motion patterns can be experienced directly in working components.',
        trySystemNote:
            'The interactive demo is hosted separately and maintained as part of the Motion UI Kit project.',

        // Why Make Motion a System Section
        whyMotionTitle: 'Why make motion a system?',
        whyMotionContent:
            'Treating motion as part of the design system makes it easier to reuse decisions instead of recreating them for every component.',

        whyMotionBenefit1: 'Consistent easing and timing',
        whyMotionBenefit2: 'Reusable interaction patterns',
        whyMotionBenefit3: 'Clearer guidance for designers and developers',

        // What I Learned Section
        learnedTitle: 'What I learned',
        learnedContent1:
            'Building the project helped me understand where a motion system needs rules and where it still needs flexibility. Implementing the components in React also changed some of my design decisions, especially around reusable patterns, states and how much control a component should expose.',

        learnedContent2:
            'It reinforced something I find valuable about working between design and code: implementation is not only a final step. It can reveal better decisions about the system itself.',
    },
]
