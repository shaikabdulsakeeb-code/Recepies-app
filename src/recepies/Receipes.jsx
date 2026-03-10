import React from 'react'
import Rcard from './Rcard'

function Receipes() {

  const [recepies, setRecepies] = React.useState([])
  const [selectedRecipe, setSelectedRecipe] = React.useState(null)

  React.useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => setRecepies(data.recipes))
  }, [])

  return (

    <div>

      <h2 className="text-center mb-4">🍲 Recipes</h2>

      <div className="row">

        {recepies.map(recepie => (
          <div className="col-md-4 mb-4" key={recepie.id}>
            <Rcard
              recepie={recepie}
              onClick={() => setSelectedRecipe(recepie)}
            />
          </div>
        ))}

      </div>
      {selectedRecipe && (
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-dialog-centered modal-xl">

            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">{selectedRecipe.name}</h5>

                <button
                  className="btn-close"
                  onClick={() => setSelectedRecipe(null)}
                ></button>
              </div>

              <div
                className="modal-body"
                style={{ maxHeight: "70vh", overflowY: "auto" }}
              >

                <div className="row">

                  <div className="col-md-5">
                    <img
                      src={selectedRecipe.image}
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="col-md-7">

                    <p><b>🍽 Cuisine:</b> {selectedRecipe.cuisine}</p>
                    <p><b>⏱ Prep Time:</b> {selectedRecipe.prepTimeMinutes} mins</p>
                    <p><b>🔥 Cook Time:</b> {selectedRecipe.cookTimeMinutes} mins</p>
                    <p><b>⭐ Rating:</b> {selectedRecipe.rating}</p>

                    <h5>Ingredients</h5>
                    <ul>
                      {selectedRecipe.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                      ))}
                    </ul>

                    <h5>Instructions</h5>
                    <ol>
                      {selectedRecipe.instructions.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Receipes