import React,{useState} from 'react'
const Todo = (props) => {
 const [newtab,Setnewtab]=useState(props.Tab)   
 const [get,Setget]=useState("")
 const add=(e) =>{
e.preventDefault()
if(get.length===0){
  return ;
}
const getitem={
  text:get,
  verif:false
 }
 Setnewtab([...newtab,getitem])
Setget("")
 }
 const DeletetheElement = (idx)=>{
 const filtertab=newtab.filter( (_item,index)=>{
  return idx!==index
  } )
  Setnewtab(filtertab)
 }
 const changerverif= (idx)=>{
 const changetab=newtab.map( (item,index)=>{
  if(index===idx){
    item.verif=!item.verif
  }
  return (item)
 } )
 Setnewtab(changetab)
 }
  return (
    <div>
    <form onSubmit={add}>
   <input type="text" placeholder='Get Mern Black Belt' value={get} onChange={  (e)=>{Setget(e.target.value)}} />
   <button>Add</button>
   </form>
   {
    newtab.map( (item,idx)=>{
    const mytab=[]
      if(item.verif){
     mytab.push("line-through")
      }
   return( <div key={idx}>
    <input checked={item.verif} type="checkbox" onChange={ (e)=>{ changerverif(idx) } } />
    <span className={mytab.join("")}>{item.text}</span>
    <button style={{backgroundColor:'black',marginLeft:'8px'}} onClick={ ()=>{ DeletetheElement(idx) }}>Delete</button>
    
   </div>  )
    } )
   }
   </div>
  )
}

export default Todo