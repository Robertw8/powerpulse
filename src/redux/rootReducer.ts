import { combineReducers } from '@reduxjs/toolkit';
import { persistedAuthReducer } from './auth';
import { productsReducer } from './products';
import { exercisesReducer } from './Waist';
import { diaryReducer } from './diary';

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
  exercises: exercisesReducer,
  diary:diaryReducer
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
