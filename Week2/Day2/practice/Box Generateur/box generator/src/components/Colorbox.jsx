import React,{useState} from 'react'
const Colorbox = (props) => {
const [newcolor, setnewcolor] = useState(props.colors)
const [add,Setadd] = useState("")
const addcolor = (e)=> {
  e.preventDefault()
 setnewcolor([...newcolor,add])
 Setadd("")
} 
var yas={add}
console.log(yas)
  return (
    <div>
      {
     newcolor.map( (mycolor,index)=>{
     return(
     <div key={index} style={{ 
      display: "inline-block",
      margin: "10px",
      height: "120px", 
      width: "120px", 
      backgroundColor: mycolor
      }}>
    
     </div>
     )
     } )

      }
      <form onSubmit={addcolor}>
     <p> color <input type='text' onChange={ (e)=>{Setadd(e.target.value)}} value={add}/> </p>
     <button>Add</button>
      </form>
      </div>
      
  )
}

export default Colorbox