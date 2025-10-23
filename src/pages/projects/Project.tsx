import { useContext, useEffect } from 'react'
// Project styles are loaded dynamically by pages that use this template to
// keep critical CSS small during prerender.
import ThemeContext from '../../context/ThemeContext'

interface ProjectProps {
    children: React.ReactNode
}

// === Project Page Template Usage ===
//
// When creating a new project page:
// 1. Add a new entry to seoConfig in src/seoConfig.ts with the correct title, description, and canonical URL.
// 2. Import the SEO component and seoConfig at the top of your new page:
//    import SEO from '../../components/SEO'
//    import { seoConfig } from '../../seoConfig'
// 3. Add the SEO component as the first element in your component's return:
//    <SEO {...seoConfig.[yourProjectKey]} />
// 4. Import { useEffect } from 'react' and your analytics function:
//    import { useEffect } from 'react'
//    import { trackPageView } from '../../services/analytics'
// 5. Add this inside your component to track page views:
//    useEffect(() => { trackPageView('/projects/your-project-path') }, [])
//
// This ensures every project page has proper SEO meta tags and analytics tracking.

const Project: React.FC<ProjectProps> = ({ children }) => {
    const { theme } = useContext(ThemeContext) || { theme: '' }

    useEffect(() => {
        import('./ProjectStyles.scss')
    }, [])

    return (
        <section
            className={`project section-portfolio__modal container-portfolio-modal ${theme}`}
        >
            <div className="project-container">{children}</div>
        </section>
    )
}

export default Project
