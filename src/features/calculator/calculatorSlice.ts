import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { hasPoint, howManyDigits, roundToStringNumber } from '../../common/numbers/stringNumber';

type CalculatorState = {
  operators: Array<string>;
  digitChangers: Array<string>;
  limitDigitNubmer: number;
  expressionValue: number;
  operator: string;
  secondNumber: string;
}

export enum SlotName {
  Display,
  Operators,
  DigitChangers,
  Evaluation,
}

const initialState: CalculatorState = {
  operators: ['/', 'x', '-', '+'],
  digitChangers: [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', ','
  ],
  limitDigitNubmer: 7,
  expressionValue: 0,
  operator: '=',
  secondNumber: '',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    digitAdded(state, action: PayloadAction<string>) {
      if (action.payload === ',' && hasPoint(state.secondNumber)) return;
      if (action.payload === '0' && state.secondNumber === '0') return;
      if (howManyDigits(state.secondNumber) >= state.limitDigitNubmer) return;

      if (isNaN(state.expressionValue)) {
        state.expressionValue = 0;
        state.operator = '=';
      }

      if (state.secondNumber === '' && action.payload === ',') {
        state.secondNumber = '0';
      }

      state.secondNumber += action.payload;
    },
    operatorAdded(state, action: PayloadAction<string>) {
      if (state.secondNumber === '') {
        state.operator = action.payload;
        return;
      }

      const secondNumericValue = Number(state.secondNumber.replace(',', '.'));
      let result = NaN;

      if (state.operator === '+') {
        result = state.expressionValue + secondNumericValue;
      } else if (state.operator === '-') {
        result = state.expressionValue - secondNumericValue;
      } else if (state.operator === 'x') {
        result = state.expressionValue * secondNumericValue;
      } else if (state.operator === '/' && secondNumericValue === 0) {
        result = NaN;
      } else if (state.operator === '/') {
        result = state.expressionValue / secondNumericValue;
      } else if (state.operator === '=') {
        result = secondNumericValue;
      }

      state.expressionValue = result;
      state.operator = action.payload;
      state.secondNumber = '';
    },
    calculatorReset(state) {
      state.expressionValue = initialState.expressionValue;
      state.operator = initialState.operator;
      state.secondNumber = initialState.secondNumber;
    }
  }
});

export const selectDisplayValue = (state: RootState) => {
  if (state.calculation.secondNumber) return state.calculation.secondNumber;
  return roundToStringNumber(state.calculation.limitDigitNubmer, state.calculation.expressionValue);
};
export const selectDigitChangers = (state: RootState) => state.calculation.digitChangers;
export const selectOperators = (state: RootState) => state.calculation.operators;

export const { digitAdded, operatorAdded, calculatorReset } = calculatorSlice.actions;

export default calculatorSlice.reducer;