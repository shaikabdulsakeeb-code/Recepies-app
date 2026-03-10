import React from 'react'

function Rcard({recepie,onClick}) {

  return (

    <div
      className="card h-100 shadow"
      style={{cursor:"pointer"}}
      onClick={onClick}
    >

      <img
        src={recepie.image}
        className="card-img-top"
      />

      <div className="card-body">

        <h5 className="card-title">
          {recepie.name}
        </h5>

        <p>
          ⭐ {recepie.rating}
        </p>

        <p>
          {recepie.cuisine}
        </p>

      </div>

    </div>

  )
}

export default Rcard