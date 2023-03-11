import axios from 'axios';
import { useState, useEffect } from 'react';

export const useTypeData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(' https://pokeapi.co/api/v2/type/')
      .then(res => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch(e => setError(e));
  }, []);
  return [loading, error, data];
};
