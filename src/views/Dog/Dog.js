import { React, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DogDetail from '../../components/DogDetail/DogDetail.js';
import Header from '../../components/Header/Header.js';
import { getDog, deleteDog } from '../../services/dogs.js';

export default function Dog() {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const doggyData = await getDog(params.id);
      setDog(doggyData);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  const editButtonHandler = () => {
    history.push(`/dogs/${params.id}/edit`);
  };

  const deleteButtonHandler = async () => {
    await deleteDog(params.id);
    history.push('/');
  };

  return (
    <div>
      <Header />
      {loading ? (
        <span>...loading</span>
      ) : (
        <DogDetail
          deleteButtonHandler={deleteButtonHandler}
          dog={dog}
          editButtonHandler={editButtonHandler}
          showDetail
        />
      )}
    </div>
  );
}
