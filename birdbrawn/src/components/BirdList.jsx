import React from 'react';
import { ReactSortable } from "react-sortablejs";
import Bird from "./Bird"

export default function BirdList ({id, list, setList, group, onEnd}) {
  let canPut = id === "birds";
  let weightColor = id === "singleTile" ? "transparent" : "white";
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
        put: canPut,
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
          weightColor={weightColor}
        />
      ))}
    </ReactSortable>
  );
};