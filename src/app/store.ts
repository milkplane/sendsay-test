import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import construction from '../features/construction/constructionSlice';

export const store = configureStore({
  reducer: {
    construction,
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
