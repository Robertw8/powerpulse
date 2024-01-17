import { combineReducers } from '@reduxjs/toolkit';
import { persistedAuthReducer } from './auth/slice';
import { productsReducer } from './products';
import { exercisesReducer } from './Waist';

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
  exercises: exercisesReducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
