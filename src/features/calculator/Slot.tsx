import React from 'react';
import styled from 'styled-components';
import { SlotName } from './calculatorSlice';
import DigitChangers from './DigitChangers';
import Display from './Display';
import EvaluateSlot from './EvaluateSlot';
import OperatorSlot from './OperatorSlot';

type SlotProps = {
  slotName: SlotName;
  isHighlighted?: boolean;
  doubleClickHandler?: (slotName: SlotName) => void;
}

export interface DisableableElement {
  isDisabled?: boolean;
  isClickable?: boolean;
}

interface HighlightedElement {
  isHighlighted?: boolean;
}

type SlotBorderProps = DisableableElement & HighlightedElement;

const SlotBorder = styled.div`
  opacity: ${(props: SlotBorderProps) => props.isDisabled ? 0.5 : 1};
  pointer-events: ${(props: SlotBorderProps) => props.isDisabled ? 'none' : 'auto'};
  box-shadow: ${(props: SlotBorderProps) => props.isHighlighted
    ? '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);'
    : 'none'};
  border-radius: 4px;
  padding: 4px;
`;

const Slot = React.forwardRef<HTMLDivElement, SlotProps & DisableableElement>((props, ref) => {
  const doubleClickHandler = () => {
    props.doubleClickHandler && props.doubleClickHandler(props.slotName);
  };

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

  return <SlotBorder onDoubleClick={doubleClickHandler}{...props} ref={ref} isHighlighted={props.isHighlighted}>
    {Content}
  </SlotBorder>;
});

export default Slot;