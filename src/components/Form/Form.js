import './Form.css';

import React from 'react';

export default function Form({
  name,
  bio,
  age,
  image,
  breed,
  updateDogState,
  saveButtonHandler,
  message,
}) {
  return (
    <form>
      <h2>Enter Dog Details</h2>
      <p>{message}</p>
      <label>
        Name:
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            updateDogState('name', e.target.value);
          }}
        ></input>
      </label>
      <label>
        Bio:
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => {
            updateDogState('bio', e.target.value);
          }}
        ></textarea>
      </label>
      <label>
        Age:
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            updateDogState('age', e.target.value);
          }}
        ></input>
      </label>
      <label>
        Image:
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => {
            updateDogState('image', e.target.value);
          }}
        ></input>
      </label>
      <label>
        Breed:
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => {
            updateDogState('breed', e.target.value);
          }}
        ></input>
      </label>
      <button onClick={saveButtonHandler} className="button">
        Save
      </button>
    </form>
  );
}
