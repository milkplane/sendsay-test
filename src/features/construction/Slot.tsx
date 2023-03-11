import React from 'react';
import styled from 'styled-components';
import { DisableableElement } from '../../common/components/Disableable';
import { SlotName } from '../calculator/calculatorSlice';
import DigitChangers from '../calculator/DigitChangers';
import Display from '../calculator/Display';
import EvaluateSlot from '../calculator/EvaluateSlot';
import OperatorSlot from '../calculator/OperatorSlot';

type SlotProps = {
  slotName: SlotName;
  isHighlighted?: boolean;
  doubleClickHandler?: (slotName: SlotName) => void;
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