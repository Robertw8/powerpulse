import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import {
  getExercises,
  setBurnedCalories,
  setFilters,
  setTime,
  type Exercise,
  type InitialState,
} from '.';

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

const persistConfig = {
  key: 'exercises',
  storage,
  whitelist: ['filters'],
};

// export const { reducer: exercisesReducer } = exercisesSlice;
export const persistedExercisesReducer = persistReducer(
  persistConfig,
  exercisesSlice.reducer
);