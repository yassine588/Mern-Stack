import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Edit = () => {
    const [title,SetTitle]=useState("")
    const [price,Setprice]=useState(0)
    const [description,Setdescription]=useState("")
    const {id}=useParams()
    const navigate=useNavigate()
    const sendobj={
        title,
        price,
        description
       }
 const updateData=(e)=>{
    e.preventDefault()
axios.put(`http://localhost:5000/api/product/${id}`,sendobj)
.then((res)=>{
    console.log(res.data)
 navigate('/')
})  
.catch((err)=>console.log(err))
 }
 useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            SetTitle(res.data.title);
            Setprice(res.data.price);
            Setdescription(res.data.description);
        })
        .catch((err) => console.log(err));
}, [id]);
  return (
    <form onSubmit={updateData}> 
    <label>New Title:</label>
    <input type="text" name="title" onChange={(e)=>{SetTitle(e.target.value)}}  value={title}/>
    <label>New Price:</label>
    <input type="number" name="price" onChange={(e)=>{Setprice(e.target.value)}} value={price} />
    <label>New Description:</label>
    <input type="text" name="Description"  onChange={(e)=>{Setdescription(e.target.value)}} value={description}/>
    <button>update</button>
    </form>
  )
}
