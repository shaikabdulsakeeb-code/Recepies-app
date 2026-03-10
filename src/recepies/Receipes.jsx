import React, { use } from 'react'
import Rcard from './Rcard'
function Receipes() {
  const [recepies, setRecepies] = React.useState([])
  React.useEffect(() => {
      fetch('https://dummyjson.com/recipes')
          .then(res => res.json())
          .then(data => setRecepies(data.recipes))
  }, [])
  return (
    <div>
      <h1>Recepies</h1>
      <ul style={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        border:'1px solid black',
        padding:'1em',
        gap:'1em'
      }}>
        {recepies.map(recepie => (
          <Rcard recepie={recepie} />
        ))}
      </ul>
    </div>
    
  )
}

export default Receipes