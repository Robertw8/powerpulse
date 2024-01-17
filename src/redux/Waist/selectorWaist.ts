import { RootState } from '../rootReducer';

const selectWaist = (state: RootState) => state.exercises.exercises;

export { selectWaist };
