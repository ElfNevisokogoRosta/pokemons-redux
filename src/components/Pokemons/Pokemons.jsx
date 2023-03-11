/* eslint-disable no-unused-vars */
import React from 'react';
import usePokemonLoad from 'components/services/usePokemonLoad';
import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import useLocalStorage from 'components/services/useLocalStorage';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { useTypeData } from 'components/services/useTypeData';
export const Pokemons = () => {
  const [pokemons, setPokemons] = useLocalStorage('local-poke', []);
  const page = useSelector(state => state.page.page);
  const perPage = useSelector(state => state.perPage.perPage);
  const type = useSelector(state => state.type.type);
  const [loading, error] = usePokemonLoad();
  const pokeNumber = Number(page) * perPage;
  const [typeloading, typeerror, types] = useTypeData();
  return (
    <>
      {loading ? (
        <Circles />
      ) : (
        pokemons?.slice(0, pokeNumber).map((pokemon, index) => {
          return (
            <li key={`${pokemon.name}+${index}`}>
              <Pokemon url={pokemon.url} />
            </li>
          );
        })
      )}
    </>
  );
};
