import React, { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Main = () => {
  const [authors,Setauthors]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
axios.get("http://localhost:5000/api/authors")
.then(myauthors=>{
  console.log(myauthors.data)
  Setauthors(myauthors.data)
})
.catch(err=>{
  console.log("wait a minute")
})
  },[])
  const DelAuthor=(AuthorId)=>{
 axios.delete(`http://localhost:5000/api/authors/${AuthorId}`)
 .then((res)=>{
  const newList = authors.filter((author, index) => author._id !== AuthorId)
  Setauthors(newList);
  navigate("/")
 })
  }
  return (
    <div>
      <h1>Favorite authors</h1>  
      <Link to={'new'}>Add an author</Link>
      <h2>We have quotes by:</h2>
      <table>
        <thead>
       <tr>
       <th>Author</th>
       <th>Actions available</th>
       </tr>
        </thead>
        <tbody>
       {
        authors.map((myauthors)=>{
          return(
            <div>
            <td>{myauthors.Name}</td>
            <td><Link to={`/edit/${myauthors._id}`}>
    <button>Edit</button>
  </Link>
  <button onClick={() => DelAuthor(myauthors._id)}>Delete</button></td>
            </div>
          )
        })
       }
        </tbody>
      </table>
    </div>
  )
}

export default Main