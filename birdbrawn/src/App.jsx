import React from 'react'
import hum from './assets/images/hum.png'
import './App.css'
import BirdList from './components/BirdList.jsx'

export default function App() {
  const [singleTile, setSingleTile] = React.useState([{id: 3, name: "singleBird", weight: "0", image: hum }]);

  const [birds, setBirds] = React.useState([
    { id: 1, name: "bird1", weight: "0.1", image: hum },
    { id: 2, name: "bird2", weight: "0.2", image: hum },
  ]);
  
  const newSingleTile = (event) => {
    if (event.to.id === "birds") {
      const newId = Math.floor(Math.random() * 1000);
      setSingleTile([{ id: newId, name: "singlebird", weight: newId, image: hum }]);
    }
  };

  return (
    <div className="App">
      <div style={{ height: "400px" }}>
      <BirdList id="singleTile" birds={singleTile} setBirds={setSingleTile} group="shared" onEnd={newSingleTile} />
      </div>
      <BirdList id="birds" birds={birds} setBirds={setBirds} group="shared"/>
    </div>
  );
}