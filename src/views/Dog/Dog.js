import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DogDetail from '../../components/DogDetail/DogDetail.js';
import Header from '../../components/Header/Header.js';
import { getDog } from '../../services/dogs.js';
import './Dog.css';

export default function Dog() {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const doggyData = await getDog(params.id);
      setDog(doggyData);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  return (
    <div>
      <Header />
      {loading ? <span>...loading</span> : <DogDetail dog={dog[0]} showDetail />}
    </div>
  );
}
