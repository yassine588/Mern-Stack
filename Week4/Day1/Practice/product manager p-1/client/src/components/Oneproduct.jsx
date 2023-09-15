import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Oneproduct = () => {
    const {id}=useParams()
    const [oneproduct,Setoneproduct]=useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)
          .then((res) => {
            console.log(res.data)
            Setoneproduct(res.data);
            
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);
    console.log(oneproduct)
  return (
    <div>
        {
          
            <div>
            <h1>{oneproduct.title}</h1>
            <h1>{oneproduct.price}</h1>
            <h1>{oneproduct.description}</h1>
            </div>
          
        }
    </div>
  )
}

export default Oneproduct