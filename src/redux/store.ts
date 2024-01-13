import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';  

import { authReducer } from './auth/SignUp/slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);



// store.js
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {registerReducer }  from './auth/SignUp/slice'; // Оновіть шлях відповідно
// import {
//   FLUSH,
//   PAUSE, 
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'redux-persist';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
// import persistStore from 'redux-persist/es/persistStore';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['token'], // Назва редуктора, який ви хочете зберігати
// };

// const persistedReducer = persistReducer(persistConfig, registerReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//      middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Corrected property name
//     },
//   }),
// });

// export const persistor = persistStore(store);


