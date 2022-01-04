import React from 'react';
import './DogDetail.css';

export default function DogDetail({ dog }) {
  return (
    <div>
      <h2>Meet {dog.name}</h2>
      <img alt="dog" src={dog.image}></img>
      <span>
        {dog.name} is a(n) {dog.age} year old {dog.breed}
      </span>
      <br />
      <span>{dog.bio}</span>
    </div>
  );
}
