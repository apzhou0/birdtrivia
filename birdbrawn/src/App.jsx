import React from 'react'
import hum from './assets/images/hum.png'
import './App.css'
import BirdList from './components/BirdList.jsx'
import Bird from './components/Bird.jsx'
import { ReactSortable } from 'react-sortablejs';

export default function App() {
  const [singleTile, setSingleTile] = React.useState([{id: 3, name: "singleBird", weight: "0", image: hum }]);

  const [birds1, setBirds1] = React.useState([
    { id: 1, name: "bird1", weight: "0.1", image: hum },
    { id: 2, name: "bird2", weight: "0.2", image: hum },
  ]);

  return (
    <div className="App">
      <div style={{ height: "400px" }}>
      <BirdList birds={singleTile} setBirds={setSingleTile} group="shared"/>
      </div>
      <BirdList birds={birds1} setBirds={setBirds1} group="shared" />
    </div>
  );
}