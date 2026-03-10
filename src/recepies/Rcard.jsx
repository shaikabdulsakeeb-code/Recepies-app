import React from 'react'

function Rcard({ recepie }) {
  return (
    <div className='card' style={{
        width:"10em",
        border:"1px solid black",
        padding:"1em",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:"1em"

    }}>
      <h2>{recepie.name}</h2>
      <img style={{
        width:"100%"
      }} src={recepie.image} alt="" />
    </div>
  )
}

export default Rcard