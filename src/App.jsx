import './App.css'
import Receipes from './recepies/Receipes'

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <h3 className="text-white">🍲 Recipe App</h3>
        </div>
      </nav>

      <div className="container mt-4">
        <Receipes/>
      </div>

      <footer className="bg-dark text-white text-center p-3 mt-5">
        Recipe App © 2026
      </footer>
    </>
  )
}

export default App