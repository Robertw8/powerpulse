import { createSlice } from '@reduxjs/toolkit';
import { getExercises } from './operations';
import { Exercise, InitialState } from './types';

const initialState: InitialState = {
  exercises: [],
  isLoading: false,
  error: '',
  filters: {
    filter: '',
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
      });
    // .addCase(setFilters, (state, action) => {
    //     state.filters = action.payload as unknown as Filter
    // });
  },
});

export const { reducer: exercisesReducer } = exercisesSlice;
