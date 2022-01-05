import './Form.css';

import React from 'react';

export default function Form({ name, bio, age, image, breed, updateDog }) {
  return (
    <form>
      <h2>Enter Dog Details</h2>
      <label>
        Name:
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            updateDog('name', e.target.value);
          }}
        ></input>
      </label>
      <label>
        Bio:
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => {
            updateDog('bio', e.target.value);
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
            updateDog('age', e.target.value);
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
            updateDog('image', e.target.value);
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
            updateDog('breed', e.target.value);
          }}
        ></input>
      </label>
      <button>Save</button>
    </form>
  );
}
