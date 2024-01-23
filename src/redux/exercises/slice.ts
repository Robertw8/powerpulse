import { createSlice } from '@reduxjs/toolkit';
import { getExercises, setBurnedCalories, setFilters, setTime } from '.';
import { Exercise, InitialState } from './types';

const initialState: InitialState = {
  exercises: [],
  isLoading: false,
  error: '',
  burnedCalories: 0,
  time: 0,
  filters: {
    filter: 'bodyPart',
    category: '',
  },
  bodyPart: [],
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getExercises.pending, state => {
        state.isLoading = true;
      })
      .addCase(getExercises.fulfilled, (state, { payload }) => {
        state.exercises = [
          ...state.bodyPart,
          ...(Array.isArray(payload) ? payload : [payload]),
        ] as Exercise[];
        state.isLoading = false;
      })
      .addCase(getExercises.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(setFilters, (state, action) => {
        state.filters = {
          filter: action.payload.filter,
          category: action.payload.category,
        };
      })
      .addCase(setBurnedCalories, (state, action) => {
        state.burnedCalories = action.payload;
      })
      .addCase(setTime, (state, action) => {
        state.time = action.payload;
      });
  },
});

export const { reducer: exercisesReducer } = exercisesSlice;
