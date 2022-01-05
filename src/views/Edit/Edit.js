import './Edit.css';

import { useState, useEffect, React } from 'react';
import Header from '../../components/Header/Header.js';
import Form from '../../components/Form/Form.js';
import { getDog, updateDog } from '../../services/dogs.js';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Edit() {
  const [dog, setDog] = useState({});

  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDog(params.id);
      setDog(data[0]);
    };
    fetchData();
  }, [params.id]);

  const saveButtonHandler = () => {
    updateDog();
  };

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  return (
    <div className="edit">
      <Header />
      <Form handler={saveButtonHandler} {...dog} setDog={setDog} updateDogState={updateDogState} />
    </div>
  );
}
