import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { selectOperators } from './calculatorSlice';
import Operator from './Operator';
import { DisableableElement } from './Slot';

const OperatorBorder = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(48px, 1fr);
  grid-gap: 8px;
`;

const OperatorSlot = (props: DisableableElement) => {
  const operators = useAppSelector(selectOperators);
  const Operators = operators.map((operator) => {
    return <Operator key={operator} operator={operator}/>;
  });

  return <OperatorBorder draggable={true}>
    {Operators}
  </OperatorBorder>;
};

export default OperatorSlot;