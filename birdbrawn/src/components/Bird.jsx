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
    textShadow: "0 0 10px black",
    margin: "10px",
  };

  return (
    <div className="Bird--tile" style={tileStyle}>
      {rightSpot? <div className = "greendot"></div> : <div className = "reddot"></div>}
      <h2 style = {weightStyle}>{weight} g</h2>
      <h1 className = "Bird--name">{name}</h1>
    </div>
  );
};

export default Bird;