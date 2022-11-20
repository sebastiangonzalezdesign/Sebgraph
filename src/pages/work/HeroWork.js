import HiIcon from '../../img/icon-hi.svg';
import ImgHome from '../../img/img-home.svg';
import "./HeroWork.scss";
import { useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroWork = () => {
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        Aos.init({duration: 1000});

    },[]);
    return(

        <section className={`section-hero ${theme}`}>
            <article className="section-hero__text-container">
                <h1 className="heading-primary" data-aos="fade-up" data-aos-delay="500">I will help you to connect the users with your digital products through great experiences and memorable interfaces.</h1>
                <div className="section-hero__hi-text" data-aos="fade-up" data-aos-delay="900">
                    <img className="section-hero__icon" src={HiIcon} loading="lazy"  alt="Hi icon"/>
                    <span className="section-hero__name heading-tertiary">Hi! i'm Sebastian González, An <strong className="section-hero__name--rol"> UI designer.</strong></span>
                </div>
            </article>

            <img className="section-hero__img" data-aos="flip-right" data-aos-delay="1000" src={ImgHome} alt="sebgraph illustration"/>
        </section>
     
    );
};

export default HeroWork;