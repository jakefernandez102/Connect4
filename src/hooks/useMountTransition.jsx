import { useEffect, useState } from "react";

const useMountTransition = (isMounted, unmountDelay) => {
    const [hasTransitioned,setHasTransitioned]=useState(false)

    useEffect(()=>{
        let timeOutId;

        if(isMounted || !hasTransitioned){
            setHasTransitioned(true)
        }

        else if(!isMounted || hasTransitioned){            
            timeOutId = setTimeout(() => {
                setHasTransitioned(false)
            }, unmountDelay); 
        }

        return ()=>{
            clearTimeout(timeOutId)
        }

    },[isMounted,unmountDelay,hasTransitioned])
  return hasTransitioned
}

export default useMountTransition