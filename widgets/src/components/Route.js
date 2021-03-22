import { useEffect } from "react";
import { useState } from "react";

const Route = ({ path, children }) => {
    const [currectPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(()=> {
        const onLocationChange = () =>{
            setCurrentPath(window.location.pathname);
        }
        
        window.addEventListener('popstate', onLocationChange);

        return()=>{
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])
    
    
    return currectPath === path ? children : null;
}
  
export default Route;