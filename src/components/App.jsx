import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PokemonsLayout } from './pages/PokemonsLayout';
import { Pokemons } from './Pokemons/Pokemons';
import { PokemonsTypes } from './PokemonsTypes.jsx/PokemonsTypes';
import { SearchResults } from './SearchResults.jsx/SearchResults';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonsLayout />}>
        <Route index element={<Pokemons />} />
        <Route path="/:type" element={<PokemonsTypes />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
