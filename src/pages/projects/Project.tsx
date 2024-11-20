import './ProjectStyles.scss'
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

interface ProjectProps {
    children: React.ReactNode
}

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
