import { Button } from '../components/Button'
import Error from '../../src/img/error.svg'
import './Error.scss'

const Error404 = () => {
    return (
        <section className="error-section section-hero bg-white mt-40">
            <figure className="error-section__img">
                <img
                    className="error-section__img"
                    src={Error}
                    alt="Error 404"
                />
            </figure>
            <div className="error-section__content-box">
                <div className="error-section__text-box">
                    <h1 className="heading__100--bold">
                        Ooops! Page not found
                    </h1>
                    <p className="paragraph__100--medium">
                        The page you are looking is not available
                    </p>
                </div>
                <a href="https://sebastiangonzalez.design/">
                    <Button>Back to home</Button>
                </a>
            </div>
        </section>
    )
}

export default Error404
