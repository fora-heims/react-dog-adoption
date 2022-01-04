import React from 'react';
import './DogDetail.css';

export default function DogDetail({ dog, showDetail = false }) {
  return (
    <div className="detail">
      <h3>Meet {dog.name}</h3>
      {showDetail ? (
        <img className="big-dog" alt="dog" src={dog.image} />
      ) : (
        <img alt="dog" src={dog.image} />
      )}
      <p>
        {dog.name} is a(n) {dog.age} year old {dog.breed}
      </p>
      <br />
      {showDetail && <span>{dog.bio}</span>}
    </div>
  );
}
