import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';
// import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { reducerFiletr } from './filtersSlice';

export const store = configureStore({
  reducer: {
    filter: reducerFiletr,
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persitor = persistStore(store);
