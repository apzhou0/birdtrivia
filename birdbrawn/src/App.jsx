import React from 'react'
import hum from './assets/images/hum.png'
import './App.css'
import BirdList from './components/Bird.jsx'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <BirdList />
    </div>
  )
}

export default App
