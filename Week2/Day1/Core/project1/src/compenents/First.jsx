import React from 'react'

const First = (props) => {
  return (
    <div>
     <h1>{props.lastname} , {props.firstname} </h1>
     <p>Age:{props.age}</p>
     <p>Hair:{props.hair}</p>
    </div>
  )
}

export default First