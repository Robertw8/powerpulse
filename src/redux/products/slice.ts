import { createSlice } from '@reduxjs/toolkit';
import {
  getProducts,
  getProductsByPage,
  getProductsCategories,
  setCalculatedCalories,
  setFilters,
} from '.';
import { Product, InitialState } from './types';

const initialState: InitialState = {
  products: [],
  isLoading: false,
  error: '',
  calculatedCalories: 0,
  categories: [],
  filters: {
    search: '',
    categories: '',
    type: '',
  },
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
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload as Product[];
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getProductsByPage.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductsByPage.fulfilled, (state, { payload }) => {
        state.products = [...state.products, ...payload] as Product[];
        state.isLoading = false;
      })
      .addCase(getProductsByPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // ! temp
      .addCase(setCalculatedCalories, (state, action) => {
        state.calculatedCalories = action.payload;
      })
      .addCase(getProductsCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductsCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(setFilters, (state, action) => {
        state.filters = action.payload;
      });
  },
});

export const productsReducer = slice.reducer;
