import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  singUp,
  signIn,
  SignInArgs,
  SignUpArgs,
  AuthResponse,
} from '../../../services/apiRequest';

const registerUser = createAsyncThunk(
  'auth/register',
  async (data: SignUpArgs, thunkAPI) => {
    try {
      const response = await singUp(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'An unknown error occurred'
      );
    }
  }
);

const loginUser = createAsyncThunk(
  'auth/login',
  async (dataUser: SignInArgs, thunkAPI) => {
    try {
      const response: AuthResponse = await signIn(dataUser);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  }
);

export { registerUser, loginUser };
