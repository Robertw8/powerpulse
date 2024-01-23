import { RootState } from '../rootReducer';

export const selectBodyPart = (state: RootState) => state.exercises.bodyPart;
export const selectExercises = (state: RootState) => state.exercises.exercises;
export const selectIsLoading = (state: RootState) => state.exercises.isLoading;
export const selectFilters = (state: RootState) => state.exercises.filters;
export const selectBurnedCalories = (state: RootState) =>
  state.exercises.burnedCalories;
export const selectTime = (state: RootState) => state.exercises.time;
