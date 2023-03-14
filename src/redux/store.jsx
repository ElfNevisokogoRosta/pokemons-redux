import { configureStore } from '@reduxjs/toolkit';
import {
  pageReducer,
  perPageReducer,
  pokeTypeReducer,
  pokeTypeNumber,
  totalPokeNumber,
} from './reducer';
export const store = configureStore({
  reducer: {
    page: pageReducer,
    perPage: perPageReducer,
    type: pokeTypeReducer,
    typeNumber: pokeTypeNumber,
    total: totalPokeNumber,
  },
});
