import './Form.css';

import React from 'react';

export default function Form() {
  return (
    <form>
      <h2>Enter Dog Details</h2>
      <p className="update-alert"></p>
      <label>
        Name:
        <input></input>
      </label>
      <label>
        Age:
        <input></input>
      </label>
      <label>
        Bio:
        <input></input>
      </label>
      <label>
        Image:
        <input></input>
      </label>
      <label>
        Breed:
        <input></input>
      </label>
      <submit>Save</submit>
    </form>
  );
}
