import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ArrayMove } from '../../common/array/arrayMove';
import { SlotName } from '../calculator/calculatorSlice';

type ConstructorState = {
  isConstructionMode: boolean;
  constructorParts: Array<SlotName>;
  takenParts: Array<SlotName>;
}

const initialState: ConstructorState = {
  isConstructionMode: true,
  constructorParts: [SlotName.Display, SlotName.Operators, SlotName.DigitChangers, SlotName.Evaluation],
  takenParts: [],
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
    },
    slotMovedToConstructor(state, action: PayloadAction<ArrayMove>) {
      const slotName = state.constructorParts[action.payload.oldIndex];
      state.takenParts.splice(action.payload.newIndex, 0, slotName);
    },
    slotPositionChanged(state, action: PayloadAction<ArrayMove>) {
      const slotName = state.takenParts[action.payload.oldIndex];
      state.takenParts.splice(action.payload.oldIndex, 1);
      state.takenParts.splice(action.payload.newIndex, 0, slotName);
    },
    removeSlot(state, action: PayloadAction<SlotName>) {
      const index = state.takenParts.indexOf(action.payload);
      state.takenParts.splice(index, 1);
    }
  }
});

export const { 
  setConstructionMode,
  toggleConstructionMode,
  slotMovedToConstructor,
  slotPositionChanged,
  removeSlot } = constructorSlice.actions;

export const selectIsConstructionMode = (state: RootState) => state.construction.isConstructionMode;
export const selectIsSlotsEmpty = (state: RootState) => state.construction.takenParts.length === 0;
export const selectSlotNames = (state: RootState) => state.construction.constructorParts;
export const selectTaketSlotNames = (state: RootState) => state.construction.takenParts;

export default constructorSlice.reducer;