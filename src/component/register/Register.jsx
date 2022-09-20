import './register.scss'
import { useState,useContext, useEffect } from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";
import { showinfo } from '../../App';
import Swal from 'sweetalert2'
import PWDRequisite from './PWDRequisite'
export default function Register() {
  const {setreg,setlogin,setFlage,setindex,index,List}=useContext(showinfo)
   
  const[name,setName]=useState("")
  
  const[email,setEmail]=useState("")

  const[password,setpassword]=useState("")

  const[pwdRequisite,setpwdrequisite]=useState(false)

  const[Spassword,setSpassword]=useState("")
  
  const[checkpassword,setcheckpassword]=useState(false)

  const[checks,setChecks]=useState({
    capsLetterCheck: false ,
    numberCheck: false ,
    pwdLengthCheck: false,
    specialCharCheck:false,
  })
  useEffect(()=>{
    console.log("osama");
    if(name && checkpassword && email){
      setFlage(true)
      const user={
              name:name,
              password:password,
              email:email
          }
          
      List.push(user)
      setindex(List.length - 1)
    localStorage.setItem("ListUsers", JSON.stringify(List));
    }
  })
  
 const handelpassword=(e)=>{
  setpassword(e.target.value)
 }

 const handelFocus=()=>{
  setpwdrequisite(true)
 }

 const handelOnBur=()=>{
  setpwdrequisite(false)
 }
//now =>I've used reg exp in js to check the password and email and name validation
 const handelOnkeyUp=(e)=>{
 const { value }=e.target;
 const capsLetterCheck=/[A-Z]/.test(value)
 const numberCheck=/[0-9]/.test(value)
 const pwdLengthCheck=value.length > 7
 const specialCharCheck=/[!@#$%^&*]/.test(value)
 setChecks({
  capsLetterCheck,
  numberCheck,
  pwdLengthCheck,
  specialCharCheck,
 })
 }
 const handel=()=>{
  if((Spassword === password) && (Spassword !== "") && (password !== "")){
    setcheckpassword(true)
    Swal.fire({
      icon: 'success',
      title: 'Right Password',
      showConfirmButton: false,
      timer: 1500
    })
  }
  else {
   setChecks( {capsLetterCheck:false ,numberCheck:false ,pwdLengthCheck:false ,specialCharCheck:false})
   setpassword("")
   setSpassword("")
   Swal.fire({
    title: 'Error Password',
    text: "Please,Try Again!",
    icon: 'warning',
    timer:1500
})

  }
 }
 const handelName=()=>{
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/
  if(regName.test(name)){
    Swal.fire({
      icon: 'success',
      title: 'Right Name',
      showConfirmButton: false,
      timer: 1000
    })
  }
  else {
    setName("")
      Swal.fire({
      title: 'Error Pattern',
      text: "Please,Try Again!",
      icon: 'warning',
      timer:1500
  })
  }
 }

 const handelCheck=()=>{
  var pattern = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm; 
  if(pattern.test(email))
  { 
    Swal.fire({
      title: 'Right Email',
      icon: 'success',
      showConfirmButton: false,
      timer:1000 
  })
  }
  else {
    setEmail("")
    Swal.fire({
      title: 'Error Pattern',
      text: "Please,Try Again!",
      icon: 'warning',
      timer:1000
  })
  }
 }
 const handelSubmit=()=>{
  if(name && password && email){
    setFlage(true)
    Swal.fire({
      title: 'Login',
      icon: 'success',
      showConfirmButton: false,
      timer:1000 
  })
  }
 else if(!name){
    Swal.fire({
      title: 'Name is empty',
      text: "Please,Try Again!",
      icon: 'warning',
      timer:1000
  })
  }
  else if(!email){
    Swal.fire({
      title: 'Email is empty',
      text: "Please,Try Again!",
      icon: 'warning',
      timer:1000
  })
  }
  else {
    Swal.fire({
      title: 'password is empty',
      text: "Please,Try Again!",
      icon: 'warning',
      timer:1000
  })
  }
 }
 const setLogout=()=>{
  setreg(false)
  setlogin(true)
 }
  return (
    <div className='register'>
      <div className='container'>
        {/* input your information*/}
      <div className="input">   
        <label htmlFor="name">Please inter your name </label>
        <input
        id="name" 
        type="text"
        className="name" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        onMouseLeave={handelName}
        />
        <label htmlFor="email"> Please inter your Email</label>
        <input 
        id="email"
        type="email"
        className="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        onMouseLeave={handelCheck}
        />

       <label htmlFor="password">Password</label>
       <input 
       id="password"
       className={checks.capsLetterCheck && checks.numberCheck && checks.pwdLengthCheck && checks.specialCharCheck ? "valid" : "invalid"}
       type="password"
       value={password} 
       onChange={handelpassword} 
       onFocus={handelFocus}
       onBlur={handelOnBur}
       onKeyUp={handelOnkeyUp}
       />
       {/* to check password*/}
     {pwdRequisite ? <PWDRequisite
      capsLetterFlag={checks.capsLetterCheck?"valid":"invalid"}
      numberFlag={checks.numberCheck?"valid":"invalid"}
      pwdLengthCheck={checks.pwdLengthCheck?"valid":"invalid"}
      specialCharFlag={checks.specialCharCheck?"valid":"invalid"}
      /> : 
      null}
       <label htmlFor="samepassword">Inter same password</label>
       <input 
       id='samepassword'
       type="password"
       value={Spassword}
       onChange={(e)=>setSpassword(e.target.value)}
        />
       <AiOutlineArrowRight
       className='icon'
       onClick={handel}/> {/* handel of password*/}
       </div>
       <button onClick={handelSubmit} > {/*create new account*/}
        Register
       </button>

       <button
       className='bottom' 
       onClick={setLogout}>
        LogOut
      </button>   
      </div>
    {/* end register page*/}    
    </div>
  )
}
