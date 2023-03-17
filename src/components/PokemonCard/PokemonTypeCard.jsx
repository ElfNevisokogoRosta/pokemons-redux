import React from 'react';
import { TypeElements } from 'components/Pokemon/Pokemon.styled';
export const PokemonTypeCard = ({ type, index }) => {
  return (
    <TypeElements key={`${type?.type.name}-${index}`}>
      <h3>{type.type.name}</h3>
    </TypeElements>
  );
};
