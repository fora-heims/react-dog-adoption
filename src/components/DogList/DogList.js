import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

export default function DogList({ dogs }) {
  // console.log(dogs);
  return (
    <div className="list">
      {dogs.map((dog) => (
        <Link className="list-item" key={dog.id} to={`/dogs/${dog.id}`}>
          <h2>Meet {dog.name}</h2>
          <img alt="dog" src={dog.image}></img>
          <span>
            {dog.name} is a(n) {dog.age} year old {dog.breed}
          </span>
        </Link>
      ))}
    </div>
  );
}
