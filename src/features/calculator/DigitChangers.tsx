import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { selectDigitChangers } from './calculatorSlice';
import DigitChanger from './DigitChanger';

const ChangersBorder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: dense;
  grid-template-rows: repeat(4, minmax(48px, 1fr));
  grid-gap: 8px;
  padding: 4px;

  & .zero {
    grid-column: span 2;
  }
`;

const DigitChangers = () => {
  const digitChangers = useAppSelector(selectDigitChangers);
  const Changers = digitChangers.map((changer) => {
    return <DigitChanger changer={changer}/>;
  });

  return <ChangersBorder>
    {Changers}
  </ChangersBorder>;
};

export default DigitChangers;