/* eslint-disable no-unused-vars */
import usePokemonData from 'components/services/usePokemonData';
import React from 'react';
import { Circles } from 'react-loader-spinner';

export const Pokemon = ({ url }) => {
  const [loading, error, pokeData] = usePokemonData(url);
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      {loading ? (
        <Circles />
      ) : (
        <div>
          <h2>{pokeData.name}</h2>
          <img src={pokeData.image} alt="" />
          <ul>
            {pokeData.types?.map((type, index) => {
              return (
                <li key={`${type.type.name}+${index}`}>
                  <h3>{type.type.name}</h3>
                </li>
              );
            })}
          </ul>
          <ul className="type-list">
            {pokeData.stats?.map((stat, index) => {
              return (
                <li key={`${stat.stat.name}-${index}`}>
                  <p>
                    {stat.stat.name}: {stat.base_stat}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
