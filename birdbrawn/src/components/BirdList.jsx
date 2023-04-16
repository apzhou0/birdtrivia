import React from 'react';
import { ReactSortable } from "react-sortablejs";
import Bird from "./Bird"

export default function BirdList ({id, list, setList, group, onEnd}) {
  let isPlaced = id === "birds";
  return (
    <ReactSortable 
      id={id} 
      list={list} 
      setList={setList} 
      onEnd={onEnd} 
      animation={100} 
      delay={2} 
      group={{
        name: group,
        put: isPlaced,
      }}
      >
      {list.map((bird) => (
        <Bird
          key={bird.id}
          id={bird.id}
          name={bird.name}
          weight={bird.weight}
          image={bird.image}
          rightSpot={bird.rightSpot}
          isPlaced={isPlaced}
        />
      ))}
    </ReactSortable>
  );
};