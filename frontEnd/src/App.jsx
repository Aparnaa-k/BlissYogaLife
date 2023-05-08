import { useState } from 'react'
import './App.css'

// Importing the Navbar Component
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <h1>Hi it's Aparna</h1>

        
    </div>
  )
}

export default App
