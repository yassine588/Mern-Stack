import React, {useState} from 'react'
import { styled } from 'styled-components'
const Tabs = (props) => {
    const [tab,SetTab]=useState(props.mytab)
    const [number,Setnumber]=useState(0)
    const showtab = (e) =>{
    e.preventDefault()
    }
  return (
    <div>  
        <form onSubmit={showtab}>
     <button onClick={ (e)=>{ Setnumber(0) } } >Tab1</button>
     <button onClick={ (e)=>{ Setnumber(1) } }>Tab2</button>
     <button onClick={ (e)=>{ Setnumber(2) } }>Tab3</button>
     </form>
     <h1>{tab[number]}</h1>
    </div>
  )
}

export default Tabs