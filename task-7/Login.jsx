import { Link } from 'react-router-dom'
import './Style2.css'
import { useNavigate  } from 'react-router-dom'
export const Login = ()=>{
 const n = useNavigate()
 function handle(e){
    e.preventDefault()
    n("/home")
 }
    return(
        <>
    
        <h1>Login</h1>
        <div className="div">
            
        <form  >
        <pre>
        <div style={{padding:30}}>Email     :<input type="text" placeholder="Email"/></div>
        <div style={{padding:30}}>password  :<input type="text" placeholder="password"/></div>
        <button onClick={handle} type='submit'>Submit</button>
        </pre>  
        </form>
        </div>
    
        </>
    )
}