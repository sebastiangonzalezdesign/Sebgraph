import './ProjectStyles.scss'
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

interface ProjectProps {
    children: React.ReactNode
}

// Reminder: When duplicating this template for a new project page,
// import { useEffect } from 'react' and your analytics function:
// import { trackPageView } from '../../services/analytics'
// Then, add this inside your component:
// useEffect(() => { trackPageView('/projects/your-project-path') }, [])

const Project: React.FC<ProjectProps> = ({ children }) => {
    const { theme } = useContext(ThemeContext) || { theme: '' }

    return (
        <section
            className={`project section-portfolio__modal container-portfolio-modal ${theme}`}
        >
            <div className="project-container">{children}</div>
        </section>
    )
}

export default Project
