import React from 'react'
import './App.css'
import BirdList from './components/BirdList.jsx'
import bird_data from '../../bird_data.json';
import sparrow from './assets/images/sparrow.png'
import crow from './assets/images/crow.png'
import goose from './assets/images/goose.png'

let processedIndices = new Set();
let mistakeCount = 0;
let scoreCount = 0;
let highScore = 0;

export default function App() {
  const shuffledBirds = bird_data;

  const resetGame = () => {
    processedIndices = new Set();
    setSingleTile([getRandomBird()]);
    setBirds([getRandomBird()]);
    highScore = Math.max(highScore, scoreCount);
    mistakeCount = 0;
    scoreCount = 0;
  }

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

  const [singleTile, setSingleTile] = React.useState([getRandomBird()]);
  const [birds, setBirds] = React.useState([getRandomBird()]);
  
  const tilePlaced = (event, newBird) => {
    if (mistakeCount / 2 <= 3 && event.to.id === "birds") {
      setSingleTile([getRandomBird()]);
      setBirds((prevBirds) => {
        const sortedBirds = [...prevBirds].sort((a, b) => a.weight - b.weight);
        if (JSON.stringify(prevBirds) !== JSON.stringify(sortedBirds)) {
          newBird.rightSpot = false;
          mistakeCount += 1;
        }
        else {
          newBird.rightSpot = true;
          scoreCount += 1
        }
        return sortedBirds;
      });
    }
  };

  return (
    <div className="App">
      <img className="sparrowImg" src={sparrow} style={{opacity: mistakeCount > 0 ? 0.3 : 1}} />
      <img className="crowImg" src={crow} style={{opacity: mistakeCount > 1 ? 0.3 : 1}} /> 
      <img className="gooseImg" src={goose} style={{opacity: mistakeCount > 2 ? 0.3 : 1}}/>
      <h1 className="score">
        score: {scoreCount}
        <span className="spacer"></span>
        best: {highScore}
      </h1>
      {mistakeCount === 4 && <button className="restartButton" onClick={resetGame}>restart</button>}
      <div style={{ height: "200px" }}>
      <BirdList id="singleTile" list={singleTile} setList={setSingleTile} group="shared" onEnd={(event) => tilePlaced(event, singleTile[0])} />
      </div>
      <div style={{height: "50px"}}></div>
      <BirdList id="birds" list={birds} setList={setBirds} group="shared"/>
    </div>
  );
}