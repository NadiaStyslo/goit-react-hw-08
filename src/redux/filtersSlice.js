import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    nameFilters: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { nameFilters } = filterSlice.actions;
export const reducerFiletr = filterSlice.reducer;
