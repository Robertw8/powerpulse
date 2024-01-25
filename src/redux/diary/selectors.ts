import { RootState } from '../rootReducer';

export const selectProducts = (state: RootState) => state.diary.products;
export const selectExercises = (state: RootState) => state.diary.exercises;
export const selectCaloriesBurned = (state: RootState) =>
  state.diary.caloriesBurned;
export const selectCaloriesConsumed = (state: RootState) =>
  state.diary.caloriesConsumed;
export const selectCaloriesRemaining = (state: RootState) =>
  state.diary.caloriesRemaining;
export const selectSportsTime = (state: RootState) => state.diary.sportsTime;
export const selectIsLoading = (state: RootState) => state.diary.isLoading;
export const selectError = (state: RootState) => state.diary.error;
export const selectSelectedDate = (state: RootState) => state.diary.selectedDate;