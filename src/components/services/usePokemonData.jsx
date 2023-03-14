/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useState, useEffect } from 'react';

const usePokemonData = url => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    setError(false);
    setLoading(true);
    axios
      .get(url)
      .then(res => {
        setPokeData({
          name: res.data.name,
          image: res.data.sprites.front_default,
          types: res.data.types,
          stats: res.data.stats,
        });

        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        setError(e);
      });
  }, [url]);
  return [loading, error, pokeData];
};
export default usePokemonData;
