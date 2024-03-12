import { createSlice } from '@reduxjs/toolkit';

const createAuth = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  //   extraReducers: (builder) => {
  //     builder;
  //   },
});

export const authReducer = createAuth.reducer;
