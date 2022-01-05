import './Admin.css';

import React from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import { useState } from 'react';
import { insertDog } from '../../services/dogs';

export default function Admin() {
  const [dog, setDog] = useState({});

  const saveButtonHandler = async (dog) => {
    await insertDog(dog);
  };

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  return (
    <div className="admin">
      <Header />
      <Form handler={saveButtonHandler} dog={dog} setDog={setDog} updateDogState={updateDogState} />
    </div>
  );
}
