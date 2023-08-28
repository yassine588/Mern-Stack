import React, { useState } from 'react'
const Birthday = (props) => {
const [age,Setage]=useState(props.age)  
console.log(age)  
  return (
    <div>
         <h1>
        {props.Name} , {props.Surname}
        <p> age : {age} </p> 
        <p>hair color:{props.color} </p>
         </h1>    
  <button onClick={() => {Setage(age+1)}}>Birthday button for {props.Surname} {props.Name} </button>
  
    </div>
  )
}

export default Birthday