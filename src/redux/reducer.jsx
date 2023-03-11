import { createSlice } from '@reduxjs/toolkit';

const pageInitialState = { page: 1 };
const perPageInitialState = { perPage: 10 };
const pokeTypeInitialState = { type: null };

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

export const pageReducer = pageSlice.reducer;
export const perPageReducer = perPageSlice.reducer;
export const pokeTypeReducer = pokeTypeSlice.reducer;
