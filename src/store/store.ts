import { configureStore } from '@reduxjs/toolkit';

import filterSlice from '../reducers/filterSlice';
import tasksSlice from '../reducers/tasksSlice';

export const store = configureStore({
  reducer: {
    tasksSlice,
    filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
