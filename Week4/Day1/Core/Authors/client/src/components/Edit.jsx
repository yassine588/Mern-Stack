import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [Name,SetName]=useState("")
    const {id}=useParams()
    const navigate=useNavigate()
  const UpdateAuthors=(e)=>{
    e.preventDefault()
  axios.put(`http://localhost:5000/api/authors/${id}`,{Name})
  .then((res)=>{
  console.log(res.data)
   navigate("/")
  })
  .catch((err)=>{console.log(err)})
  }
  const cancel=()=>{
    SetName("")
  }
  return (
    <div>
     <h1>Favorite authors</h1> <br />
     <Link to={"/"}>Home</Link> <br />
     <h2>Edd this author:</h2> <br />
     <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={(e) => SetName(e.target.value)}
                value={Name}
              />
              <button onClick={cancel}>Cancel</button>
              <button onClick={UpdateAuthors}>Submit</button>
    </div>
  )
}

export default Edit