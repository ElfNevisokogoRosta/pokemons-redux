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
  Background,
} from './Pokemon.styled';
import { PokemonTypeCard } from 'components/PokemonCard/PokemonTypeCard';
import sprites from '../../styles/sprites.svg';

export const Pokemon = ({ url }) => {
  const [loading, error, pokeData] = usePokemonData(url);
  const type =
    pokeData?.types && pokeData.types.length > 0
      ? pokeData.types[0].type.name
      : null;

  const typeIcon = type => {
    switch (type) {
      case 'normal':
        return <use href={`${sprites}#normal`} />;
      case 'dark':
        return <use href={`${sprites}#dark`} />;
      case 'electric':
        return <use href={`${sprites}#electric`} />;
      case 'fairy':
        return <use href={`${sprites}#fairy`} />;
      case 'fighting':
        return <use href={`${sprites}#fighting`} />;
      case 'ground':
        return <use href={`${sprites}#ground`} />;
      case 'ice':
        return <use href={`${sprites}#ice`} />;
      case 'physic':
        return <use href={`${sprites}#physic`} />;
      case 'poison':
        return <use href={`${sprites}#poison`} />;
      case 'rock':
        return <use href={`${sprites}#rock`} />;
      case 'steel':
        return <use href={`${sprites}#steel`} />;
      case 'water':
        return <use href={`${sprites}#steel`} />;
      case 'flying':
        return <use href={`${sprites}#flying`} />;
      case 'bug':
        return <use href={`${sprites}#bug`} />;
      case 'ghost':
        return <use href={`${sprites}#ghost`} />;
      case 'fire':
        return <use href={`${sprites}#fire`} />;
      case 'grass':
        return <use href={`${sprites}#grass`} />;
      case 'psychic':
        return <use href={`${sprites}#psyhic`} />;
      case 'dragon':
        return <use href={`${sprites}#dragon`} />;
      default:
        return <use href={`${sprites}#standart`} />;
    }
  };

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      {loading ? (
        <Circles />
      ) : (
        <Container>
          <Background>{typeIcon(type)}</Background>
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
