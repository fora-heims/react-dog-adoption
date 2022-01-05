import './Admin.css';

import React from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import { useState } from 'react';

export default function Admin() {
  const [dog, setDog] = useState({});

  const saveButtonHandler = () => {};

  const updateDog = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  return (
    <div className="admin">
      <Header />
      <Form handler={saveButtonHandler} dog={dog} setDogInfo={setDog} updateDog={updateDog} />
    </div>
  );
}
