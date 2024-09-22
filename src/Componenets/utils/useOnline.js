import React, { useEffect, useState } from 'react'

function useOnline() {
 const [isOnline, setIsOnline] = useState(true)

 useEffect(()=>{
     const handleisOnline = ()=>{
        setIsOnline(true)
     }
     const handleisOfline = () =>{
        setIsOnline(false)
     }

     window.addEventListener("online", handleisOnline)
     window.addEventListener("offline", handleisOfline)

     return ()=>{
        window.removeEventListener("online", handleisOnline)
        window.removeEventListener("offline", handleisOfline)
     }
 }, [])

 return isOnline
}

export default useOnline
