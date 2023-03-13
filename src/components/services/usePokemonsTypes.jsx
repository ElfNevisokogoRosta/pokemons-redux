/* eslint-disable react-hooks/exhaustive-deps */
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
      setLoading(false);
      return;
    }
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then(res => {
        setLoading(false);

        setTypedPoke(res.data.pokemon);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);
  return [loading, error, typedPoke];
};
