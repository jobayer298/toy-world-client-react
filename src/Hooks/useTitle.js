import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - ZooZooToys`;
    }, [title])
}

export default useTitle;