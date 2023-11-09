import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Comision 49900</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          La cantidad es {count}
        </button>
      </div>
    </>
  )
}

export default App
