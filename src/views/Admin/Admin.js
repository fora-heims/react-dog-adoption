import './Admin.css';

import React from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import { useState } from 'react';
import { insertDog } from '../../services/dogs';

export default function Admin() {
  const [dog, setDog] = useState({});
  const [message, setMessage] = useState('');

  const saveButtonHandler = async () => {
    await insertDog(dog);
    setDog({});
    setMessage('Successfully added a dragon');
  };

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  return (
    <div className="admin">
      <Header />
      <Form
        message={message}
        saveButtonHandler={saveButtonHandler}
        {...dog}
        updateDogState={updateDogState}
      />
    </div>
  );
}
