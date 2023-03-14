import { createSlice } from '@reduxjs/toolkit';

const pageInitialState = { page: 1 };
const perPageInitialState = { perPage: 10 };
const pokeTypeInitialState = { type: null };
const pokeNumberTypeInitialState = { typeNumber: 0 };
const totalPokeInititalState = { total: 0 };

const pokeNumberTypeSlice = createSlice({
  name: 'pokeNumberType',
  initialState: pokeNumberTypeInitialState,
  reducers: {
    setPokeTypeNumber(state, actions) {
      state.typeNumber = actions.payload;
    },
  },
});
const totalPokeSlice = createSlice({
  name: 'totalPoke',
  initialState: totalPokeInititalState,
  reducers: {
    setTotalPoke(state, actions) {
      state.total = actions.payload;
    },
  },
});
const pageSlice = createSlice({
  name: 'page',
  initialState: pageInitialState,
  reducers: {
    nextPage(state) {
      state.page++;
    },
    resetPage(state) {
      state.page = 1;
    },
  },
});

const perPageSlice = createSlice({
  name: 'perPage',
  initialState: perPageInitialState,
  reducers: {
    perPageChange(state, action) {
      state.perPage = action.payload;
    },
  },
});
const pokeTypeSlice = createSlice({
  name: 'pokeType',
  initialState: pokeTypeInitialState,
  reducers: {
    pokeTypeSet(state, action) {
      state.type = action.payload;
    },
  },
});

export const { nextPage, resetPage } = pageSlice.actions;
export const { perPageChange } = perPageSlice.actions;
export const { pokeTypeSet } = pokeTypeSlice.actions;
export const { setPokeTypeNumber } = pokeNumberTypeSlice.actions;
export const { setTotalPoke } = totalPokeSlice.actions;

export const totalPokeNumber = totalPokeSlice.reducer;
export const pokeTypeNumber = pokeNumberTypeSlice.reducer;
export const pageReducer = pageSlice.reducer;
export const perPageReducer = perPageSlice.reducer;
export const pokeTypeReducer = pokeTypeSlice.reducer;
