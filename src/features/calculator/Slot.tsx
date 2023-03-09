import React from 'react';
import styled from 'styled-components';
import { SlotName } from './calculatorSlice';
import DigitChangers from './DigitChangers';
import Display from './Display';
import EvaluateSlot from './EvaluateSlot';
import OperatorSlot from './OperatorSlot';

type SlotProps = {
  slotName: SlotName;
}

export interface DisableableElement {
  isDisabled?: boolean;
  isClickable?: boolean;
}

const SlotBorder = styled.div`
  opacity: ${(props: DisableableElement) => props.isDisabled ? 0.5 : 1};
  pointer-events: ${(props: DisableableElement) => props.isDisabled ? 'none' : 'auto'};
  border-radius: 4px;
  padding: 4px;
`;

const Slot = React.forwardRef<HTMLDivElement, SlotProps & DisableableElement>((props, ref) => {
  let Content = <></>;

  if (props.slotName === SlotName.Display) {
    Content = <Display />;
  } else if (props.slotName === SlotName.Operators) {
    Content = <OperatorSlot />;
  } else if (props.slotName === SlotName.DigitChangers) {
    Content = <DigitChangers />;
  } else if (props.slotName === SlotName.Evaluation) {
    Content = <EvaluateSlot />;
  }

  Content = React.cloneElement(Content, { isDisabled: props.isDisabled, isClickable: props.isClickable });

  return <SlotBorder {...props} ref={ref}>
    {Content}
  </SlotBorder>;
});

export default Slot;