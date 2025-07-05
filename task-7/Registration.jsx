import './Style2.css'
import { useNavigate } from 'react-router-dom'
export const Registration = ()=>{
   
    const n = useNavigate()

    
function handle(e){
   e.preventDefault()
    n("/login")
}
    return(
        <>
    
        <h1>Registration</h1>
        <div className="div">
            
        <form  >
        <pre>
        <div style={{padding:20}}>First name  :<input type="text" placeholder="firstname" required/></div>
        <div style={{padding:20}}>Last name   :<input type="text" placeholder="lastname"/></div>
        <div style={{padding:20}}>Email       :<input type="email" placeholder="Email"/></div>
        <div style={{padding:20}}>Phone number:<input type="number" placeholder="phone number"/></div>
        <div style={{padding:20}}>password    :<input type="text" placeholder="password"/></div>
        <button onClick={handle} type='submit'>Submit</button>
        </pre>  
        </form>
        </div>

        </>
    )
}