import { useEffect } from "react"

const useScrollTop = (pathName) => {
    useEffect( ()=> {
        window.scrollTo(0,0);
    } , [pathName]) 
}

export default useScrollTop;