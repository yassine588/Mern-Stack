import React from 'react'
import { useParams } from 'react-router-dom'
const Params = (props) => {
    const {word,color,background}=useParams()
  return (
    <div>
  {isNaN(word) && isNaN(color) && isNaN(background) ? <p style={{color:color,backgroundColor:background,height:'40px',padding:'30px'}}>The word is {word}</p> : null}
    </div>
  )
}

export default Params