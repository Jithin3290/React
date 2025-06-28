import logo from './logo.svg'
import './example.css' // external css
import style from './style.module.css'
function UserProfile(){
    return(
        <div>
            {/*inline styling */}
             <h3 style = {{fontSize:30 , color:"red"}}>my name is john</h3>
             <img src={logo} alt="logo" style={{height:50,width:50}}></img>
             <br/><button style ={{ backgroundColor: 'red', color: 'white' }}>click </button>
            {/*external styling */}
             <h3 className='heading'>my name is john</h3>
             <br/><button className='button'>click </button>
            {/*css module */}
            <h3 className={style.heading}>my name is john</h3>
             <br/><button className={style.button}>click </button>

        </div>
    )
}
export default UserProfile