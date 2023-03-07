import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type ConstructorState = {
  isConstructionMode: boolean;
}

const initialState: ConstructorState = {
  isConstructionMode: false,
};

const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    setConstructionMode(state, action: PayloadAction<boolean>) {
      state.isConstructionMode = action.payload;
    },
    toggleConstructionMode(state) {
      state.isConstructionMode = !state.isConstructionMode;
    }
  }
});

export const { setConstructionMode, toggleConstructionMode } = constructorSlice.actions;

export const selectIsConstructionMode = (state: RootState) => state.construction.isConstructionMode;

export default constructorSlice.reducer;