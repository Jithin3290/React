import { useState,useEffect } from "react"
export const Fetchquote = ()=>{
    let [q,set] = useState([])
    useEffect(()=>{
        async function Qfetch(){
            let n = await fetch("https://dummyjson.com/quotes")
            let data = await n.json()
            set(data.quotes.slice(0,10))
            console.log(data);
           }
        Qfetch()
    },[])
    return(
        <div style = {{backgroundColor:"grey",color:"yellow",height:500}}>
            <h1><u>Quote</u>
            {q.map(item=>{
                return <li keys = {item.id}>{item.quote}</li>
            })}
            </h1>
        </div>
    )
}