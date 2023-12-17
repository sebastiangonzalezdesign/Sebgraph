import { Puff } from 'react-loader-spinner'
import './Spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner__container">
            <Puff
                className="spinner__icon"
                height="80"
                width="80"
                radius={1}
                color="#ffff"
                ariaLabel="loading"
                visible={true}
            />
        </div>
    )
}

export default Spinner
