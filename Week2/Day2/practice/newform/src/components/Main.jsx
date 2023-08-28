import React from 'react'

const Main = ({children}) => {
  return (
    <div style={{height: '600px',
    display:'flex',
    flexWrap :'wrap',
    justifyContent:'space-around',
    width: '700px',
    backgroundColor: 'red'}}>
            {children}
    </div>
  )
}

export default Main