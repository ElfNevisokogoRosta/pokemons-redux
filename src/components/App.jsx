import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PokemonsLayout } from './pages/PokemonsLayout';
import { Pokemons } from './Pokemons/Pokemons';
import { PokemonsTypes } from './PokemonsTypes.jsx/PokemonsTypes';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonsLayout />}>
        <Route index element={<Pokemons />} />
        <Route path="/:type" element={<PokemonsTypes />} />
      </Route>
    </Routes>
  );
};
