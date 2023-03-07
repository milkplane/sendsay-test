import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import Button from '../../common/components/Button';
import { operatorAdded } from './calculatorSlice';

const EvaluateSlotBorder = styled.div`
  display: grid;
  grid-template-rows: minmax(64px, 1fr);
  padding: 4px;
  background-color: #ffffff;
`;

const EvaluateSlot = () => {
  const dispatch = useAppDispatch();
  const dispatchEvaluate = () => {
    dispatch(operatorAdded('='));
  };

  return <EvaluateSlotBorder>
    <Button color="#5D5FEF"
      onClick={dispatchEvaluate}
      textColor="#ffffff">
      =
    </Button>
  </EvaluateSlotBorder>;
};

export default EvaluateSlot;