import { configureStore } from '@reduxjs/toolkit';
import { pokemon } from './reducer';
export const store = configureStore({
  reducer: {
    pokemon: pokemon,
  },
});
