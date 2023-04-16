import React from 'react'
import './App.css'
import BirdList from './components/BirdList.jsx'
import bird_data from '../../bird_data.json';

const shuffledBirds = bird_data;
let processedIndices = new Set();

function getRandomBird() {
  let randomIndex = Math.floor(Math.random() * shuffledBirds.length);
  while (processedIndices.has(randomIndex)) {
    randomIndex = Math.floor(Math.random() * shuffledBirds.length);
  }
  processedIndices.add(randomIndex);
  const randomBird = shuffledBirds[randomIndex];
  const newBird = {id: randomIndex, name: randomBird.name, weight: randomBird.weight, image: randomBird.image_url, rightSpot: true};
  return newBird;
}

export default function App() {
  const [singleTile, setSingleTile] = React.useState([getRandomBird()]);
  const [birds, setBirds] = React.useState([getRandomBird()]);
  
  const tilePlaced = (event, newBird) => {
    if (event.to.id === "birds") {
      setSingleTile([getRandomBird()]);
      setBirds((prevBirds) => {
        const sortedBirds = [...prevBirds].sort((a, b) => a.weight - b.weight);
        if (JSON.stringify(prevBirds) !== JSON.stringify(sortedBirds)) {
          newBird.rightSpot = false;
        }
        return sortedBirds;
      });
    }
  };

  return (
    <div className="App">
      <div style={{ height: "400px" }}>
      <BirdList id="singleTile" list={singleTile} setList={setSingleTile} group="shared" onEnd={(event) => tilePlaced(event, singleTile[0])} />
      </div>
      <BirdList id="birds" list={birds} setList={setBirds} group="shared"/>
    </div>
  );
}