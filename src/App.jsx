import './App.scss'
import { useState,createContext } from 'react';
import Login from './component/login/Login'
import Register from './component/register/Register'
import ExampleOnWebsite from './component/exampleOnWebsite/ExampleOnWebsite';
export const showinfo=createContext({})
function App() {
const[reg,setreg]=useState(false)
const[login,setlogin]=useState(true)
const[flag,setFlage]=useState(false)
const[index,setindex]=useState(0)    
//The local memory was used as Database                     
var List = JSON.parse(window.localStorage.getItem("ListUsers"))== null ? [] : JSON.parse(window.localStorage.getItem("ListUsers"));
const handelR=()=>{
  setreg(true)
  setlogin(false)
}
const handelL=()=>{
  setreg(false)
  setlogin(true) 
}
let data={
  setreg,
  setlogin,
  setFlage,
  setindex,
  index,
  List,
}
  return (
      <div className="app">
        {!flag?
             <div className="click">
              <button className='reg' onClick={handelR}>Register</button>
              <button className='log' onClick={handelL}>Login</button>
             </div> :null
                }
             <showinfo.Provider value={data}>          
            {(reg && !flag)? <Register/> : null}
            {(login && !flag ) ? <Login/> : null}   
            {flag ? <ExampleOnWebsite/> : null}      
          </showinfo.Provider>
      </div>
  );
}

export default App;
