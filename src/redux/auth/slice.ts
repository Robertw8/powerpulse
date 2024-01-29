import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import {
  registerUser,
  loginUser,
  getCurrentUser,
  logOutUser,
  getUserValue,
  getUserAvatar,
} from './operations';
import initialState from './initialState';
import { User } from './types';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
        state.error = '';
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        if (!action.payload) {
          state.isLoggedIn = false;
          state.token = '';
        }
        state.error = '';
      })
      .addCase(getCurrentUser.rejected, state => {
        state.token = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = 'Unable to get current user';
      })
      .addCase(logOutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.user = {} as User;
        state.token = '';
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload as string;
      })
      .addCase(getUserValue.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserValue.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isLoading = false;
      })
      .addCase(getUserValue.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })
      .addCase(getUserAvatar.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserAvatar.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload.avatarURL;
        state.isLoading = false;
      })
      .addCase(getUserAvatar.rejected, (state, { payload }) => {
        state.isLoading = false;
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
