import React from 'react'

const container = ({children}) => {
  return (
    <div  style={{
      display :'flex',
      flexWrap :'wrap', 
    width: '950px',
    height: '780px',
    backgroundColor: 'silver',
    margin: '0 auto',
    padding: '20px'}}> 
        {children}
    </div> 
  )
}

export default container