import React, { useState } from 'react'

const Form = (props) => {
const [firstname,Setfirstname]=useState("")
const [lastname,Setlastname]=useState("")
const [Email,Setemail]=useState("")
const [pass,Setpass]=useState("")
const [confirm,Setconfirm]=useState("")
  return (
    <div>
   <div>
    <form action="">
    <p> First name: <input type="text" onChange={(e) => {Setfirstname(e.target.value)} }/>      </p>      
    <p> Last name : <input type="text" onChange={(e) => {Setlastname(e.target.value)} } />       </p>     
    <p> Email: <input type="text" onChange={(e) => {Setemail(e.target.value)} } />               </p>     
    <p> password: <input type="password" onChange={(e) => {Setpass(e.target.value)} } />          </p>   
    <p> confirm password: <input type="password" onChange={(e) => {Setconfirm(e.target.value)} } /> </p>
   </form>
   </div>
   <div>
    <p>your form Data</p>
  <p>{firstname} </p>    
  <p>{lastname}  </p> 
  <p>{Email}     </p>  
  <p>{pass}      </p>
  <p>{confirm}   </p> 
   </div>

    </div>
  )
}

export default Form