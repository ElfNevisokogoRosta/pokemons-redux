/* eslint-disable no-unused-vars */
import usePokemonData from 'components/services/usePokemonData';
import React from 'react';
import { Circles } from 'react-loader-spinner';
import {
  Container,
  Tittle,
  FontImage,
  TypeList,
  StatsList,
  StatElement,
  StatName,
  StateValue,
} from './Pokemon.styled';
import { PokemonTypeCard } from 'components/PokemonCard/PokemonTypeCard';
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
        <Container>
          <Tittle>{pokeData.name}</Tittle>
          <FontImage src={pokeData.image} alt="" />
          <TypeList>
            {pokeData.types?.map((type, index) => {
              return <PokemonTypeCard type={type} index={index} />;
            })}
          </TypeList>
          <StatsList>
            {pokeData.stats?.map((stat, index) => {
              return (
                <StatElement key={`${stat.stat.name}-${index}`}>
                  <StatName>{stat.stat.name}</StatName>{' '}
                  <StateValue>{stat.base_stat}</StateValue>
                </StatElement>
              );
            })}
          </StatsList>
        </Container>
      )}
    </>
  );
};
