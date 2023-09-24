import  { useState } from 'react';



export const useProject = (initialValue = false) => {

    const [isOpen, setIsOpen] = useState(initialValue);
    const $body = document.getElementsByTagName("body")[0];

    const openProject = () => {
    setIsOpen(true);
    $body.style.overflow = "hidden";
    }
        
    const closeProject = () => {
        setIsOpen(false);
        $body.style.overflow = "visible";
        
        
    }

    return [isOpen, openProject, closeProject];

}
