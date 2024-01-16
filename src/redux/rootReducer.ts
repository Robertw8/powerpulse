import { combineReducers } from '@reduxjs/toolkit';
import { persistedAuthReducer } from './auth/SignUp/slice';
import { productsReducer } from './products';
import { exercisesReducer } from './auth/Waist';

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
  exercises: exercisesReducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
