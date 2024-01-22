import { createSlice } from '@reduxjs/toolkit';
import { getDiary, addDiaryProduct, deleteDiaryProduct } from './index';
import { InitialState } from './types';

const initialState: InitialState = {
  products: [],
  exercises: [],
  caloriesBurned: 0,
  caloriesConsumed: 0,
  caloriesRemaining: 0,
  sportsTime: 0,
  sportsRemaining: 0,
  isLoading: false,
  error: '',
};

const slice = createSlice({
  name: 'diary',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDiary.pending, state => {
        state.isLoading = true;
      })
      .addCase(getDiary.fulfilled, (state, { payload }) => {
        state.products = payload.data.productsResult.products;
        state.caloriesConsumed =
          payload.data.productsResult.caloriesConsumedTotal;
        state.exercises = payload.data.exercisesResult.exercises;
        state.caloriesBurned = payload.data.exercisesResult.caloriesBurnedTotal;
        state.sportsTime = payload.data.exercisesResult.timeTotal;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getDiary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(addDiaryProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(addDiaryProduct.fulfilled, (state, { payload }) => {
        console.log(payload.product);
        state.products = [...state.products, payload.product];
        state.isLoading = false;
        state.error = '';
      })
      .addCase(addDiaryProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteDiaryProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteDiaryProduct.fulfilled, (state, { payload }) => {
        state.products = state.products.filter(
          product => product._id !== payload.id
        );
        state.isLoading = false;
        state.error = '';
      })
      .addCase(deleteDiaryProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      });
  },
});

export const diaryReducer = slice.reducer;
