import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import Button from '../../common/components/Button';
import { operatorAdded } from './calculatorSlice';
import { DisableableElement } from './Slot';

const EvaluateSlotBorder = styled.div`
  display: grid;
  grid-template-rows: minmax(64px, 1fr);
  background-color: #ffffff;
`;

const EvaluateSlot = (props: DisableableElement) => {
  const dispatch = useAppDispatch();
  const dispatchEvaluate = () => {
    dispatch(operatorAdded('='));
  };

  return <EvaluateSlotBorder>
    <Button color="#5D5FEF"
      onClick={dispatchEvaluate}
      textColor="#ffffff"
      isClickable={props.isClickable}>
      =
    </Button>
  </EvaluateSlotBorder>;
};

export default EvaluateSlot;