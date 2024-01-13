import { createAsyncThunk } from '@reduxjs/toolkit';
import { singUp, SignIn } from '../../../services/apiRequest';

  export const registerUser = createAsyncThunk(
  'auth/register',
  async (data: { name: string, email: string, password: string }, thunkAPI) => {
    try {
    const response = await singUp(data);
      return response; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  }
);


 export const loginUser = createAsyncThunk(
  'auth/login',
  async (dataUser, thunkAPI) => {
    try {
      return SignIn(dataUser);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

  