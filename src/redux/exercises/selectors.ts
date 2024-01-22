import { RootState } from '../rootReducer';

export const selectBodyPart = (state: RootState) => state.exercises.bodyPart;
export const selectExercises = (state: RootState) => state.exercises.exercises;
export const selectIsLoading = (state: RootState) => state.exercises.isLoading;
export const selectFilters = (state: RootState) => state.exercises.filters;
