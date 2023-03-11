import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PokemonsLayout } from './pages/PokemonsLayout';
import { Pokemons } from './Pokemons/Pokemons';
import { PokemonsTypes } from './PokemonsTypes.jsx/PokemonsTypes';
import { Test } from './Pokemon/Test';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonsLayout />}>
        <Route path="/" element={<Pokemons />} />
        <Route path="/type/:type" element={<PokemonsTypes />} />
        <Route path="/test/:id" element={<Test />} />
      </Route>
    </Routes>
  );
};
