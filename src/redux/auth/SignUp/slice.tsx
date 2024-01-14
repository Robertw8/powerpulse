import { createSlice } from '@reduxjs/toolkit';

import { UnknownAction } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../SignUp/operations';

interface AuthState extends UnknownAction {
  token: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
  type: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: state => {
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        localStorage.setItem('token', payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        const payload = action.payload as string;
        state.error = payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        localStorage.setItem('token', payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        const payload = action.payload as string;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
