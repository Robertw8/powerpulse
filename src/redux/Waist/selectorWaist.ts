import { RootState } from '../rootReducer';

const selectWaist = (state: RootState) => state.exercises.bodyPart;
const selectWaistExercises = (state: RootState) => state.exercises.exercises;
const selectIsLoading = (state: RootState) => state.exercises.isLoading;
const selectFilter = (state: RootState) => state.exercises.filters;
export { selectWaist, selectIsLoading, selectFilter, selectWaistExercises };
