import React from "react";

function Bird ({id, name, weight, image, rightSpot, isPlaced}) {
  const tileStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "240px",
    height: "180px",
  };
  const weightStyle = {
    fontSize: "20px",
    textAlign: "right",
    color: "white",
    margin: "10px",
    textShadow: "0 0 7px black"
  };
  const redDot = {
    backgroundColor: "#cc0000"
  };
  const greenDot = {
    backgroundColor: "#63ab57"
  };

  return (
    <div className="Bird--tile" style={tileStyle}>
      <div className="Bird--dot" style={rightSpot ? greenDot : redDot}></div>
      {isPlaced && <h2 className="Bird--weight" style={weightStyle}>{weight} g</h2>}
      <h1 className = "Bird--name">{name}</h1>
    </div>
  );
};

export default Bird;