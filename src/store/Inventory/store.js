import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './Features/Item/itemSlice';

export const storeT = configureStore({
    reducer: {
       item:itemReducer
    },
  });
  