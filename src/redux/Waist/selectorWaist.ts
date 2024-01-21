import { RootState } from '../rootReducer';

const selectWaist = (state: RootState) => state.exercises.bodyPart;

export { selectWaist };
