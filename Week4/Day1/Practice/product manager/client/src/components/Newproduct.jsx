import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Newproduct = () => {
    const [title,SetTitle]=useState("")
    const [price,Setprice]=useState(0)
    const [description,Setdescription]=useState("")
    const [products,Setproducts]=useState([])
    const [refrechState,SetrefrechState]=useState(false)
    const [errors, setErrors] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
      axios.get('http://localhost:5000/api/product')
        .then((res) => {
          Setproducts(res.data);
        })
        .catch(err=>{
          const errorResponse = err.response.data.errors; 
          console.log(errorResponse)
          const errorArr = []; 
          for (const key of Object.keys(errorResponse)) { 
              errorArr.push(errorResponse[key].message)
          }
          // Set Errors
          setErrors(errorArr);
      })
    }, [refrechState]);
    const submitHandler=(e)=>{
     e.preventDefault()
     const sendobj={
      title,
      price,
      description
     }
     axios.post("http://localhost:5000/api/product",sendobj
     )
     .then((res)=>{
     console.log(res.data)
     SetrefrechState(!refrechState)
     SetTitle("")
     Setdescription("")
     Setprice(0)
     })
     .catch(err=>{
      const errorResponse = err.response.data.errors; 
      console.log(errorResponse)
      const errorArr = []; 
      for (const key of Object.keys(errorResponse)) { 
          errorArr.push(errorResponse[key].message)
      }
      // Set Errors
      setErrors(errorArr);
  })
    }
    const Deleteproduct=(prodid)=>{
  axios.delete(`http://localhost:5000/api/product/${prodid}`)
  .then((res)=>{
    const newList = products.filter((product, index) => product._id !== prodid)
    Setproducts(newList);
    navigate("/")
  })
    }
  return (
    <div>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
    <h1>Product Manager</h1>
    <form onSubmit={submitHandler}>
    <div>
    <label>title</label>
    <input type="text" name="title"  onChange={(e)=>{SetTitle(e.target.value)} } value={title}/>  
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
    <h1>Allproducts:</h1>
    {
     products.map((myproduct,index)=>{
      return(<div>
        <Link to={`oneproduct/${myproduct._id}`} key={index}>
      <p>{myproduct.title}</p>  
     </Link>
     <button onClick={()=>{Deleteproduct(myproduct._id)}}>Delete</button>
     <Link to={`Edit/${myproduct._id}`}>Edit</Link>
     </div>
     )
    })
    }
    </div>
  )
}

export default Newproduct