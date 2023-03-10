import { createSlice } from '@reduxjs/toolkit';
const initialState = { page: 0 };

const counterSlice = createSlice({
  name: 'pageNumber',
  initialState,
  reducers: {
    nextPage(state) {
      state.page++;
    },
  },
});

export const { nextPage } = counterSlice.actions;
export default counterSlice.reducer;
