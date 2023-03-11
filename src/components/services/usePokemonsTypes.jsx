import axios from 'axios';
import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const usePokemonsTypes = type => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [typedPoke, setTypedPoke] = useLocalStorage('typed-poke', []);
  useEffect(() => {
    setLoading(true);
    if (type === null) {
      return;
    }
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then(res => {
        setLoading(false);
        console.log(res.data);
        setTypedPoke(res.data.pokemon);
      })
      .catch(e => {
        setError(e);
      });
  }, []);
  return [loading, error, typedPoke];
};
