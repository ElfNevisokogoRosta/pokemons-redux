/* eslint-disable no-unused-vars */
import React from 'react';
import usePokemonLoad from 'components/services/usePokemonLoad';
import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import useLocalStorage from 'components/services/useLocalStorage';
import { Pokemon } from 'components/Pokemon/Pokemon';

export const Pokemons = () => {
  const [localPokemons, setlocalPokemons] = useLocalStorage('local-poke', []);
  const page = useSelector(state => state.page.page);
  const perPage = useSelector(state => state.perPage.perPage);
  const [loading, error] = usePokemonLoad();
  const pokeNumber = Number(page) * perPage;
  const pokemons = localPokemons?.slice(0, pokeNumber);
  return (
    <>
      {loading ? (
        <Circles />
      ) : (
        <ul className="poke-list">
          {pokemons?.map((pokemon, index) => {
            return (
              <li key={`${pokemon.name}+${index}`}>
                <Pokemon url={pokemon.url} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
