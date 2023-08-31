import React from 'react'
import { useParams } from 'react-router-dom'

const ParamsComponent = (props) => {
    const { hello }=useParams()
  return (
    <div>
  { isNaN(hello) ? <h1> the world is : {hello} </h1> : <p>The Number is:{hello}</p> }
    </div>
  )
}
export default ParamsComponent