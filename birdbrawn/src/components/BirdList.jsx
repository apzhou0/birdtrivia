import React from 'react';
import { ReactSortable } from "react-sortablejs";
import Bird from "./Bird"

export default function BirdList ({birds, setBirds, group}) {
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