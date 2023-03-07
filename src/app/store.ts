import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import construction from '../features/construction/constructionSlice';
import calculation from '../features/calculator/calculatorSlice';

export const store = configureStore({
  reducer: {
    construction,
    calculation,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
