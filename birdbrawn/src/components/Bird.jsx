import React from "react";

function Bird ({id, name, weight, image, rightSpot, weightColor}) {
  const tileStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "240px",
    height: "180px",
  };
  const weightStyle = {
    textAlign: "right",
    color: weightColor,
    margin: "10px",
  };
  const redDot = {
    backgroundColor: "red"
  };
  const greenDot = {
    backgroundColor: "green"
  };

  return (
    <div className="Bird--tile" style={tileStyle}>
      <div className="Bird--dot" style={rightSpot ? greenDot : redDot}></div>
      <h2 style={weightStyle}>{weight} g</h2>
      <h1 className = "Bird--name">{name}</h1>
    </div>
  );
};

export default Bird;