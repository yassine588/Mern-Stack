import React, { useState } from 'react'
import axios from 'axios'
const Newproduct = () => {
    const [Title,SetTitle]=useState("")
    const [price,Setprice]=useState(0)
    const [description,Setdescription]=useState("")
    const submitHandler=(e)=>{
     e.preventDefault()
     axios.post("http://localhost:5000/api/product",{
  Title,
  price,
  description
     })
     .then((res)=>{
     console.log(res.data)
     SetTitle("")
     Setdescription("")
     Setprice(0)
     })
     .catch(err=>{console.log(err)})
    }
  return (
    <div>
    <h1>Product Manager</h1>
    <form onSubmit={submitHandler}>
    <div>
    <label>title</label>
    <input type="text" name="title" value={Title} onChange={(e)=>{SetTitle(e.target.value)}}/>  
    </div>
    <div>
    <label>price</label>
    <input type="number" name="price" value={price} onChange={(e)=>{Setprice(e.target.value)}}/>  
    </div>
    <div>
    <label>Description</label>
    <input type="text" name="Description" value={description} onChange={(e)=>{Setdescription(e.target.value)}}/>  
    </div>
    <button>create</button>
    </form>
    </div>
  )
}

export default Newproduct