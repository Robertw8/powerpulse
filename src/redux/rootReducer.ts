import { combineReducers } from '@reduxjs/toolkit';
import { persistedAuthReducer } from './auth';
import { productsReducer } from './products';
import { exercisesReducer } from './Waist';
import { statisticsReducer } from './Waist';

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
  exercises: exercisesReducer,
  statistics: statisticsReducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
