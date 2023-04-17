import React from "react";

function Bird ({id, name, weight, image, rightSpot, isPlaced}) {
  const weightStyle = {
    backgroundColor: "#500404",
  };
  const nameStyle = {
    backgroundColor: "#500404",
  };

  return (
    <div className="Bird--tile">
      <div className="Bird--weightbox" style={!rightSpot ? weightStyle : null}>{isPlaced && `${weight} g`}</div>
      <img className="Bird--image" src={image}/>
      <h1 className = "Bird--namebox" style={!rightSpot ? weightStyle : null}>{name}</h1>
    </div>
  );
};

export default Bird;