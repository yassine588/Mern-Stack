import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Newauthors = () => {
    const [Name,Setname]=useState("")
    const navigate=useNavigate()
    const addNewAuthors=(e)=>{
  e.preventDefault()
axios.post("http://localhost:5000/api/authors",{Name})
.then(newauthors=>{
  console.log(newauthors)
   navigate("/")
})
.catch(err=>{console.log(err)})
}
const cancel=()=>{
  Setname("")
}
  return (
    <div>
        <h1>Favorite authors</h1> <br /> 
        <Link to={"/"}>Home</Link> <br />
        <h2>Add new author:</h2> <br />
        <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={(e) => Setname(e.target.value)}
                value={Name}
              />
              <button onClick={cancel}>Cancel</button>
              <button onClick={addNewAuthors}>Submit</button>
    </div>
  )
}

export default Newauthors