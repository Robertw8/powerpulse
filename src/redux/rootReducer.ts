import { combineReducers } from '@reduxjs/toolkit';
import { persistedAuthReducer } from './auth';
import { productsReducer } from './products';
import { persistedExercisesReducer } from './exercises';
import { statisticsReducer } from './statistics';
import { diaryReducer } from './diary';

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
  exercises: persistedExercisesReducer,
  statistics: statisticsReducer,
  diary: diaryReducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
