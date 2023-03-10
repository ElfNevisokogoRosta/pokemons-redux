import React from 'react';
import usePokemonLoad from 'components/services/usePokemonLoad';
import { Circles } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage } from 'redux/reducer';
export const Pokemons = () => {
  const page = useSelector(state => state.page);
  const dispatch = useDispatch();
  const [loading, error, data] = usePokemonLoad();
  return (
    <>
      {loading ? (
        <Circles />
      ) : (
        data.slice(0, 10 * page).map((pokemon, index) => {
          return (
            <li key={`${pokemon.name}+${index}`}>
              {pokemon.name}+{pokemon.url}
            </li>
          );
        })
      )}
      <button
        onClick={() => {
          dispatch(nextPage);
        }}
      >
        next page
      </button>
    </>
  );
};
