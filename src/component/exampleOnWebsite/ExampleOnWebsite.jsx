import { showinfo } from "../../App"
import {useContext}from 'react'
import './exampleonwebsite.scss'
function ExampleOnWebsite() {

    let data=useContext(showinfo)
    
    //Going To Login Page
    const Logout=()=>{
        data.setlogin(true)
        data.setFlage(false)
    }
  return (
    <div className="container1">
      <div className="parent">
        <div className="navbar"> {/*navbar Contain three element*/}
            <div className="logo" ><img src="assets/logo.jpeg" alt="" /></div>  {/* One */}
            <h1 className="name">{data.List[data.index].name}</h1>              {/* Two */}
            <div            
            className="logout"
            onClick={Logout}                                                      
            >LogOut</div>                                                         {/* Three */}
        </div>
        {/* end navbar */}
        </div>
        {/* This element can be expanded */}
        {/* small page example on content of any website  */}
         <div className="content">
            <div className="image"><img src="assets/back.jpg" alt="" /></div>
            <div className="sidebar">
                <h1>{data.List[data.index].name} </h1>
                <span>how can to help U!!</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate enim error iusto quam nostrum delectus tempora consequatur placeat amet magnam mollitia blanditiis excepturi, asperiores eveniet totam quidem maxime commodi culpa.</p>
            </div>
         </div>
         {/* end footer */}
    </div>
  )
}

export default ExampleOnWebsite