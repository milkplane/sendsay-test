import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { selectOperators } from './calculatorSlice';
import Operator from './Operator';

const OperatorBorder = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(48px, 1fr);
  grid-gap: 8px;
  padding: 4px;
`;

const OperatorSlot = () => {
  const operators = useAppSelector(selectOperators);
  const Operators = operators.map((operator) => {
    return <Operator operator={operator}/>;
  });

  return <OperatorBorder>
    {Operators}
  </OperatorBorder>;
};

export default OperatorSlot;