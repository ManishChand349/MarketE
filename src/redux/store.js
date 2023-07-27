import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import bazarRedcure from "./bazarSlice";

export const store = configureStore({
  reducer: {
     bazar: bazarRedcure,
  },
})

