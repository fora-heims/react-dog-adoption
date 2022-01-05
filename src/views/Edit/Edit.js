import './Edit.css';

import { useState, useEffect, React } from 'react';
import Header from '../../components/Header/Header.js';
import Form from '../../components/Form/Form.js';
import { getDog } from '../../services/dogs.js';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Edit() {
  const [dogInfo, setDogInfo] = useState({});

  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDog(params.id);
      setDogInfo(data);
    };
    fetchData();
  }, [params.id]);

  const saveButtonHandler = () => {};

  return (
    <div>
      <Header />
      <Form handler={saveButtonHandler} dog={dogInfo} setDogInfo={setDogInfo} />
    </div>
  );
}
