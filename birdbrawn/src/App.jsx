import React from 'react'
//import hum from './assets/images/hum.png'
import './App.css'
import BirdList from './components/Bird.jsx'

function App() {
  const [birds1, setBirds1] = React.useState([
    { id: 1, name: "bird1", weight: "0.1", image: "s.png" },
    { id: 2, name: "bird2", weight: "0.2", image: "s.png" },
    { id: 3, name: "bird3", weight: "0.3", image: "s.png" },
  ]);

  const [birds2, setBirds2] = React.useState([
    { id: 4, name: "bird4", weight: "0.4", image: "s.png" },
    { id: 5, name: "bird5", weight: "0.5", image: "s.png" },
    { id: 6, name: "bird6", weight: "0.6", image: "s.png" },
  ]);

  return (
    <div className="App">
      <BirdList birds={birds1} setBirds={setBirds1} group="shared"/>
      <BirdList birds={birds2} setBirds={setBirds2} group="shared"/>
    </div>
  );
}

export default App;
