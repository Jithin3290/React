import { useState } from "react"
export const UserCard = ({name,age,salary})=>{
    const [ag,setage] = useState(Number(age))
    return(
        <div>
            <h3>name = {name}<br></br>age = {ag}<br></br> salary = {salary}</h3>
            <button onClick={()=>{setage(ag +1 )}}>increase age by 1</button>
            <button onClick={()=>{setage(ag - 1)}}>decrease age by 1</button>

        </div>
    )

}