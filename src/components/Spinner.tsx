import './Spinner.scss'
import LogoLoading from './LogoLoading'

interface SpinnerProps {
    duration?: number // Define the duration prop
}

const Spinner: React.FC<SpinnerProps> = ({ duration }) => {
    return (
        <div
            className="spinner__container"
            style={{
                animationDuration: `${duration}ms`, // Example usage of the duration prop
            }}
        >
            <LogoLoading />
        </div>
    )
}

export default Spinner
