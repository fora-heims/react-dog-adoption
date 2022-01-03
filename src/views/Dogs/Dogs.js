import { React, useState, useEffect } from 'react';
import './Dogs.css';
import { getDogs } from '../../services/dogs.js';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const doggiesData = await getDogs();
      setDogs(doggiesData);
    };
    fetchData();
  }, []);

  return <div></div>;
}
