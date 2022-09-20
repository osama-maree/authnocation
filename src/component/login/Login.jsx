import './login.scss'
import { showinfo } from '../../App'
import {useContext, useState} from 'react'
import Swal from 'sweetalert2'  //to show messege
function Login() {
  var data=useContext(showinfo)
   
  const [email,setEmail]=useState("")

  const [password,setPassword]=useState("")

  const check=()=>{
    let c=1,ind=0    
 
    for(var i=0;i<data.List.length;i++){   
      if((data.List[i].email === email) && (data.List[i].password === password)){
        ind=i
        Swal.fire({
          icon: 'success',
          title: 'Right-->Login',
          showConfirmButton: false,
          timer: 5000
        })
        c=0
        data.setFlage(true)
        break
      }
     
  }
  data.setindex(ind)
 if(c){
  setEmail("")
  setPassword("")
    Swal.fire({
      title: 'User not found',
      text: "Please,Try Again! or create account",
      icon: 'warning',
     timer:1000
  })
  }
}
  return (
    <div className='login'>
      {/* Login Page */}
      <div className="container">
        <label htmlFor="email">inter your email</label>
        <input 
        type="text"
        id="emial"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
       />
        <label htmlFor="password">Inter your Password</label>
        <input
        type="password" 
        id='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button 
        onClick={check}
        >Login</button>
      </div>
    </div>
  )
}

export default Login