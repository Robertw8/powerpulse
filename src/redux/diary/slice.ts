import { createSlice } from '@reduxjs/toolkit';
import {
  getDiary,
  addDiaryProduct,
  deleteDiaryProduct,
  addDiaryExercise,
  deleteDiaryExercise,
} from '.';

import { Exercise, InitialState } from './types';
import dayjs from 'dayjs';
import { setSelectedDate } from './operations';

const initialState: InitialState = {
  products: [],
  exercises: [],
  caloriesBurned: 0,
  caloriesConsumed: 0,
  caloriesRemaining: 0,
  sportsTime: 0,
  isLoading: false,
  error: '',
  selectedDate: dayjs().format(),
};

const slice = createSlice({
  name: 'diary',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setSelectedDate.pending, state => {
        state.isLoading = true;
      })
      .addCase(setSelectedDate.fulfilled, (state, { payload }) => {
        state.selectedDate = payload as string;
        state.isLoading = false;
      })
      .addCase(getDiary.pending, state => {
        state.isLoading = true;
      })
      .addCase(getDiary.fulfilled, (state, { payload }) => {
        state.products = payload.productsResult.products;
        state.caloriesConsumed = payload.productsResult.caloriesConsumedTotal;
        state.caloriesRemaining = payload.productsResult.caloriesRemainingTotal;
        state.exercises = payload.exercisesResult.exercises as Exercise[];
        state.caloriesBurned = payload.exercisesResult.caloriesBurned;
        state.sportsTime = payload.exercisesResult.sportsRemaining;
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
        state.caloriesRemaining=payload.caloriesRemainingTotal
        state.caloriesConsumed = payload.caloriesConsumedTotal;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(deleteDiaryProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(addDiaryExercise.pending, state => {
        state.isLoading = true;
      })
      .addCase(addDiaryExercise.fulfilled, (state, { payload }) => {
        state.exercises.unshift(payload.doneExercise);
        state.caloriesBurned = payload.caloriesBurnedTotal;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(addDiaryExercise.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteDiaryExercise.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteDiaryExercise.fulfilled, (state, { payload }) => {
        state.exercises = state.exercises.filter(
          exercise => exercise._id !== payload.id
        );
        state.caloriesBurned = payload.data.caloriesBurned;
        state.isLoading = false;
        state.error = '';
        state.sportsTime = payload.data.sportsRemaining;
      })
      .addCase(deleteDiaryExercise.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      });
  },
});

export const diaryReducer = slice.reducer;
