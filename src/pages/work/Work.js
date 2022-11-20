import HeroWork from '../work/HeroWork';
import Portfolio from "../../pages/work/Portfolio";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Work = () => {
    const {theme} = useContext(ThemeContext);
    return(
        <main className={`container-home ${theme}`}>
            <HeroWork/>
            <Portfolio/>
        </main>
    );
};

export default Work;