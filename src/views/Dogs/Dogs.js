import { React, useState, useEffect } from 'react';
import { getDogs } from '../../services/dogs.js';
import DogList from '../../components/DogList/DogList.js';
import Header from '../../components/Header/Header';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const doggiesData = await getDogs();
      setDogs(doggiesData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {loading ? <span>...loading</span> : <DogList dogs={dogs}></DogList>}
    </>
  );
}
