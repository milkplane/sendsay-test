import React from 'react';
import ConstructiorSwitch from './features/construction/ConstructorSwitch';
import Display from './features/calculator/Display';
import OperatorSlot from './features/calculator/OperatorSlot';
import DigitChangers from './features/calculator/DigitChangers';
import EvaluateSlot from './features/calculator/EvaluateSlot';

function App() {
  return (
    <>
      <ConstructiorSwitch/>
      <Display/>
      <OperatorSlot/>
      <DigitChangers/>
      <EvaluateSlot/>
    </>
  );
}

export default App;
