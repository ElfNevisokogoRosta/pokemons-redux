import { createSlice } from '@reduxjs/toolkit';
const PokemonInitialState = {
  page: 1,
  perPage: 10,
  typeNumber: 0,
  total: 0,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: PokemonInitialState,
  reducers: {
    nextPage(state, actions) {
      state.page++;
    },
    resetPage(state, actions) {
      state.page = 1;
    },
    setPerPage(state, actions) {
      state.perPage = actions.payload;
    },
    setTypeNumber(state, actions) {
      state.typeNumber = actions.payload;
    },
    setTotalNumber(state, actions) {
      state.total = actions.payload;
    },
  },
});
export const {
  nextPage,
  resetPage,
  setPerPage,
  setPokeTypeNumber,
  setTotalNumber,
  setTypeNumber,
} = pokemonSlice.actions;
export const pokemon = pokemonSlice.reducer;
