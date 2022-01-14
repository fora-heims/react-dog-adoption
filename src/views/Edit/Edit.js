import './Edit.css';

import { useState, useEffect, React } from 'react';
import Header from '../../components/Header/Header.js';
import Form from '../../components/Form/Form.js';
import { getDog, updateDog } from '../../services/dogs.js';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Edit() {
  const [dog, setDog] = useState({});
  const [message, setMessage] = useState('');

  let params = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDog(params.id);
      setDog(data);
    };
    fetchData();
  }, [params.id]);

  const saveButtonHandler = async () => {
    try {
      await updateDog({ ...dog, id: params.id });
      setMessage('Details successfully Updated!');
      setTimeout(() => {
        history.push(`/dogs/${params.id}`);
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
    <div className="edit">
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
