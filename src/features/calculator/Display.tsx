import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { selectDisplayValue } from './calculatorSlice';
import { DisableableElement } from '../construction/Slot';

const DisplayBorder = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
`;

const DisplayContent = styled.p`
  text-align: right;
  border-radius: 6px;
  margin: 0;
  font-weight: 800;
  font-size: 36px;
  background-color: #F3F4F6;
  padding: 4px 8px 4px 8px;
  word-breaK: break-all;
`;

const Display = (props: DisableableElement) => {
  const value = useAppSelector(selectDisplayValue);

  return <DisplayBorder>
    <DisplayContent>
      {value === 'NaN' ? 'Не определено' : value}
    </DisplayContent>
  </DisplayBorder>;
};

export default Display;