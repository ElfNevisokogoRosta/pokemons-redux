/* eslint-disable no-unused-vars */
import React from 'react';
import usePokemonLoad from 'components/services/usePokemonLoad';
import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { List } from './Pokemons.styled';

export const Pokemons = () => {
  const { page, perPage } = useSelector(state => state.pokemon);
  const [loading, error, data] = usePokemonLoad();
  const pokeNumber = Number(page) * perPage;
  const pokemons = data?.slice(0, pokeNumber);
  return (
    <>
      {loading ? (
        <Circles />
      ) : (
        <List className="poke-list">
          {pokemons?.map((pokemon, index) => {
            return (
              <li key={`${pokemon.name}+${index}`}>
                <Pokemon url={pokemon.url} />
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};
