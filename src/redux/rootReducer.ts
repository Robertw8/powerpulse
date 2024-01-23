import { combineReducers } from '@reduxjs/toolkit';
import { persistedAuthReducer } from './auth';
import { productsReducer } from './products';
import { exercisesReducer } from './Waist';
import { statisticsReducer } from './statistics';
import { diaryReducer } from './diary';

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
  exercises: exercisesReducer,
  statistics: statisticsReducer,
  diary: diaryReducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
