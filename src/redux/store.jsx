import { configureStore } from '@reduxjs/toolkit';
import { pageReducer, perPageReducer, pokeTypeReducer } from './reducer';
export const store = configureStore({
  reducer: {
    page: pageReducer,
    perPage: perPageReducer,
    type: pokeTypeReducer,
  },
});
