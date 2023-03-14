import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useLocalStorage from './useLocalStorage';
import { setTotalPoke } from 'redux/reducer';
const usePokemonLoad = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [localData, setLocalData] = useLocalStorage('local-poke', []);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    if (localData.length > 0) {
      dispatch(setTotalPoke(localData.length));
      setLoading(false);
      return;
    }
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(res => {
        const totalNumber = res.data.results.length;
        dispatch(setTotalPoke(totalNumber));
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
