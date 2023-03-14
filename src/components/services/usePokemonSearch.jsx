import axios from 'axios';
import { useState, useEffect } from 'react';

export const usePokemonSearch = query => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    if (query.trim() === '') {
      setError('Enter valid search qury');
    }
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(e => {
        setLoading(false);
        setError(e);
      });
  }, [query]);
  return [loading, error, data];
};
