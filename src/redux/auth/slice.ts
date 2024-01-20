import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import {
  registerUser,
  loginUser,
  getCurrentUser,
  logOutUser,
} from './operations';
import initialState from './initialState';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: state => {
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.token = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.token = '';
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload as string;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
