import React,{useState} from 'react'
const Forms = () => {
  const [ firstName, Setfirstname] = useState("");
  const [ lastName, Setlastname] = useState("");
  const [ email, Setemail ] = useState("");
  const [ password, Setpass] = useState("");
  const [ confirm, Setconfirm] = useState("");
  return (
    <div>
        <div>
    <p> First name: <input type="text" onChange={(e) => {Setfirstname(e.target.value)} }/>      </p> 
    {  firstName.length < 2 ?( <p>First name must be at least 2 charcaters</p>):null}     
    <p> Last name : <input type="text" onChange={(e) => {Setlastname(e.target.value)} } />       </p>  
    {  lastName.length < 2 ?( <p>Last name must be at least 2 charcaters</p>):null}   
    <p> Email: <input type="text" onChange={(e) => {Setemail(e.target.value)} } />               </p>
    {  email.length < 2 ?( <p>Email must be at least 2 charcaters</p>):null}     
    <p> password: <input type="password" onChange={(e) => {Setpass(e.target.value)} } />          </p> 
    {  password.length < 8 ?( <p>password must be at least 8 charcaters</p>):null} 
    { confirm!==password || password.length < 8 ?( <p>password must match</p>):null} 
    <p> confirm password: <input type="password" onChange={(e) => {Setconfirm(e.target.value)} } /> </p>
    </div>
    <div>
    <p>your form Data</p>
  <p>{firstName} </p>    
  <p>{lastName}  </p> 
  <p>{email}     </p>  
  <p>{password}  </p>
  <p>{confirm}   </p> 
   </div>
</div>
  )
}

export default Forms