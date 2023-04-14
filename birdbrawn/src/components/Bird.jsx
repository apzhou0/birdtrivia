import React from "react";

function Bird ({id, name, weight, image}) {
  return (
    <div data-id={id} className="Bird--tile">
      <h2>{name}</h2>
      <p>weight: {weight}</p>
      <img className="Bird--image" src={image} alt={name} />
    </div>
  );
};

export default Bird;