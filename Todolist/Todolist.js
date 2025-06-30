import style1 from './style1.module.css'
import { useState,useRef } from 'react'
export const Todolist = ()=>{
    let [data,set] = useState([])
    let txt = useRef()

    function handle(){
        let n = txt.current.value
        if(n !== ""){set([...data,n])}
    
        txt.current.focus()
        txt.current.value=""
    }
    function del(index){
        // up = data.toSplice(index,1)
        const up = data.filter((_,i)=>i !== index)
        set(up)
    }
    function clear(){
        set([])
    }
return(
   <center> <div className={style1.main}>
        <input type='text' className={style1.text} placeholder='enter the task' ref={txt}/>
        <button onClick={handle} className={style1.button} onFocus={handle}>+</button><br/>
    


        <div className={style1.second}>
        {data.map((item,index)=>{
            return <p className={style1.li} key={index}>{item}<button style={{borderRadius:20}}  onClick={()=>{del(index)} } >remove</button></p>
        })}
       <button onClick={clear}>clear</button>
        </div>
       
    </div></center>
)
}