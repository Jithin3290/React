import { useState,useEffect } from "react"
export const Theme = ()=>{
    const [state,setstate] = useState(false)
    useEffect(()=>{
        document.body.style.backgroundColor = state ? "white" : "black";
    },[state])
    return(
        <button style = {{padding:20}}onClick={() => setstate(!state)}>Switch Theme</button>
    )
}