import { useState } from 'react'
import './App.css'
// import DiceGame from './components/DiceGame'
import DiceGame2 from './components/DiceGame2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DiceGame2/>
      
    </>
  )
}

export default App
