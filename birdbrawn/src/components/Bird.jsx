import React from "react";
import { ReactSortable } from "react-sortablejs";

const Bird = ({ id, name, weight, image }) => {
  return (
    <div key={id} className="Bird--tile">
      <h2>{name}</h2>
      <p>weight: {weight}</p>
      <img className="Bird--image" src={image} alt={name} />
    </div>
  );
};

const BirdList = ({ birds, setBirds, group}) => {
  return (
    <ReactSortable list={birds} setList={setBirds} group={group}>
      {birds.map((bird) => (
        <Bird
          key={bird.id}
          id={bird.id}
          name={bird.name}
          weight={bird.weight}
          image={bird.image}
        />
      ))}
    </ReactSortable>
  );
};

export default BirdList;