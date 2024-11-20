import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import './DarkMode.scss'
import useTheme from '../../hooks/useTheme'

const DarkMode = () => {
    const { theme, toggleTheme } = useTheme() // Use the custom hook to access context

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
                checked={theme === 'dark'}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <SunIcon className="sun svg" />
                <MoonIcon className="moon svg" />
            </label>
        </div>
    )
}

export default DarkMode
