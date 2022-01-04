import React from 'react';
import { Link } from 'react-router-dom';
import DogDetail from '../DogDetail/DogDetail.js';
import './DogList.css';

export default function DogList({ dogs }) {
  // console.log(dogs);
  return (
    <div className="list">
      {dogs.map((dog) => (
        <Link className="list-item" key={dog.id} to={`/dogs/${dog.id}`}>
          <DogDetail dog={dog} />
        </Link>
      ))}
    </div>
  );
}
