import axios from 'axios';
import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const usePokemonLoad = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [localData, setLocalData] = useLocalStorage('local-poke', []);
  useEffect(() => {
    setLoading(true);
    if (localData.length > 0) {
      setLoading(false);
      return;
    }
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(res => {
        setLocalData([...res.data.results]);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [loading, error, localData];
};
export default usePokemonLoad;
