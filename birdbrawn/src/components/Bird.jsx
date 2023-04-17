import React from "react";

function Bird ({id, name, weight, image, rightSpot, isPlaced}) {
  const weightStyle = {
    fontSize: "20px",
    textAlign: "right",
    color: "white",
    margin: "10px",
    textShadow: "0 0 7px black"
  };

  return (
    <div className="Bird--tile">
      <div className="Bird--weightbox">{weight}</div>
      <img className="Bird--image" src={image}/>
      <h1 className = "Bird--namebox">{name}</h1>
    </div>
  );
};

export default Bird;