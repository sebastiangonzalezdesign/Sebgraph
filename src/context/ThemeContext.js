import { createContext, useState } from "react";


const ThemeContext = createContext();

const initialTheme = "light";

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialTheme);
    const $root = document.getElementById('root');
    /* console.log(document.getElementById('lightContainer')); */

    /* localStorage para guardar modo */
    // guardamos modo en localStorage
    if(document.getElementById('root').classList.contains("dark")){
        localStorage.setItem('dark-mode', 'true');        
    }else{
        localStorage.setItem('dark-mode', 'false');
    }

    // obtenemos modo actual
    if(localStorage.getItem('dark-mode')=== 'true'){
        document.getElementById('root').classList.add("dark");
    }else{
        document.getElementById('root').classList.remove("dark");
    }

    /* console.log(document.getElementById('root').className); */

    const handleTheme = (e) => {


        if (e.target.value === "light") {
            setTheme("light");
            $root.classList.remove("dark");
            document.getElementById('lightContainer').classList.add("bg-yellow");
            document.getElementById('darkContainer').classList.remove("bg-yellow");
            document.getElementById('darkContainer').classList.remove("disabled");

        }else {            
            setTheme("dark");
            $root.classList.toggle("dark");
            document.getElementById('lightContainer').classList.remove("bg-yellow");
            document.getElementById('darkContainer').classList.add("disabled");
            document.getElementById('darkContainer').classList.add("bg-yellow");
        }
    };


    const data = {theme, handleTheme};


    return (
        <ThemeContext.Provider value={data}> {children}</ThemeContext.Provider>
    )

}

export {ThemeProvider};
export default ThemeContext;