import "./DarkModeButton.scss";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const DarkModeButton = () => {
    const {theme, handleTheme} = useContext(ThemeContext);

    return (
        
        <div className={`radio-buttons ${theme}`} > 
        <label className="custom-radio" htmlFor="light">
        <input type="radio" name="theme" id="light" onClick={handleTheme} value="light"/>
        <div id="lightContainer"  className="container-icon">
        <FontAwesomeIcon  className="radio-btn" icon={faSun}/>
        </div>
       

        </label>
        
        <label className="custom-radio" htmlFor="dark">
        <input type="radio" name="theme" id="light" onClick={handleTheme} value="dark"/>
        <div id="darkContainer" className="container-icon">
        <FontAwesomeIcon onClick={handleTheme} className="radio-btn" icon={faMoon}/>
        </div >
        </label>

        </div>

        

    );

};

export default DarkModeButton;