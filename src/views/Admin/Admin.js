import './Admin.css';

import React from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import { useState } from 'react';

export default function Admin() {
  const [dogInfo, setDogInfo] = useState({});

  const saveButtonHandler = () => {};

  return (
    <div className="admin">
      <Header />
      <Form handler={saveButtonHandler} dog={dogInfo} setDogInfo={setDogInfo} />
    </div>
  );
}
