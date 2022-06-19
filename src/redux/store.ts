import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import answersSlice from './answersSlice';
import { apiSlice } from './questionsApiSlice';

const store = configureStore({
  reducer: {
    answers: answersSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;
export default store;
