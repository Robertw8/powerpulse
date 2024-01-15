import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '.';

interface Product {
  weight: number;
  calories: number;
  category: string;
  title: string;
  groupBloodNotAllowed: { [key: string]: boolean };
}

interface InitialState {
  products: Product[];
  isLoading: boolean;
}

const initialState: InitialState = {
  products: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload as Product[];
        state.isLoading = false;
      })
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
      });
  },
});

export const productsReducer = slice.reducer;
