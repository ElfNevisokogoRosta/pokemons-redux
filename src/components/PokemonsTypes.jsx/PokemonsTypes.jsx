/* eslint-disable no-unused-vars */
import React from 'react';
import { usePokemonsTypes } from 'components/services/usePokemonsTypes';
import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import useLocalStorage from 'components/services/useLocalStorage';
import { Pokemon } from 'components/Pokemon/Pokemon';

export const PokemonsTypes = () => {
  const [typesPokemons, setTypesPokemons] = useLocalStorage('typed-poke', []);
  const page = useSelector(state => state.page.page);
  const perPage = useSelector(state => state.perPage.perPage);
  const type = useSelector(state => state.type.type);
  const [loading, error] = usePokemonsTypes(type);
  const pokeNumber = Number(page) * perPage;
  const pokemons = typesPokemons?.slice(0, pokeNumber);

  return (
    <>
      {loading ? (
        <Circles />
      ) : (
        <ul className="poke-list">
          {pokemons?.map((pokemon, index) => {
            return (
              <li key={`${pokemon.pokemon.name}+${index}`}>
                <Pokemon url={pokemon.pokemon.url} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
