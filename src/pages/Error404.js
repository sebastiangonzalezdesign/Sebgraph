import { Button } from "../components/Button";
import Error from "../../src/img/error.svg";
import "./Error.scss";

const Error404 = () => {
    return(
        <section className="error-section section-hero bg-white mt-40">
            <figure className="img">
                <img src={Error} alt="Error 404"/>

            </figure>
            <h1 className="heading-secondary">Ooops! Page not found</h1>
            <p className="paragraph">The page you are looking is not available</p>
            <a href="https://sebgraph.co/">
            <Button>Back to home</Button>
            </a>
        </section>
    )
}

export default Error404;