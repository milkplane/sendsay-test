import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { SlotName } from '../calculator/calculatorSlice';

type ConstructorState = {
  isConstructionMode: boolean;
  constructorParts: Array<SlotName>;
  takenParts: Array<SlotName>;
}

type SlotMove = {
  oldPosition: number;
  newPosition: number;
}

const initialState: ConstructorState = {
  isConstructionMode: false,
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
    addSlot(state, action: PayloadAction<SlotName>) {
      if (state.takenParts.indexOf(action.payload) !== -1) return;

      state.takenParts.push();
    },
    addSlotByIndex(state, action: PayloadAction<SlotMove>) {
      const slotName = state.constructorParts[action.payload.oldPosition];
      state.takenParts.splice(action.payload.oldPosition, 1);
      state.takenParts.splice(action.payload.newPosition, 0, slotName);
    },
    slotPositionChanged(state, action: PayloadAction<SlotMove>) {
      const slotName = state.takenParts[action.payload.oldPosition];
      state.takenParts.splice(action.payload.oldPosition, 1);
      state.takenParts.splice(action.payload.newPosition, 0, slotName);
    }
  }
});

export const { 
  setConstructionMode,
  toggleConstructionMode,
  addSlot,
  addSlotByIndex,
  slotPositionChanged } = constructorSlice.actions;

export const selectIsConstructionMode = (state: RootState) => state.construction.isConstructionMode;
export const selectIsSlotsEmpty = (state: RootState) => state.construction.takenParts.length === 0;
export const selectSlotNames = (state: RootState) => state.construction.constructorParts;
export const selectTaketSlotNames = (state: RootState) => state.construction.takenParts;

export default constructorSlice.reducer;