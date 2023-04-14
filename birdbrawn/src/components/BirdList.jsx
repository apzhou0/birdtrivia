import React from 'react';
import { ReactSortable } from "react-sortablejs";
import Bird from "./Bird"

export default function BirdList ({id, birds, setBirds, group, onEnd}) {
  return (
    <ReactSortable id={id} list={birds} setList={setBirds} group={group} onEnd={onEnd} animation={100} delay={2} >
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