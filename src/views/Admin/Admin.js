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
    try {
      await insertDog(dog);
      setMessage('Details successfully Updated!');
      setDog({});
      setTimeout(() => {
        setMessage('');
      }, 2000);
    } catch {
      setMessage('Something went wrong!');
    }
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
