import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '.';
import { Product, InitialState } from './types';

const initialState: InitialState = {
  products: [],
  isLoading: false,
  error: '',
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = [...state.products, ...action.payload] as Product[];
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const productsReducer = slice.reducer;
