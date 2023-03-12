import { useRef } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { DisableableElement } from '../../common/components/Disableable';
import { useAdaptiveFontSize } from '../../common/hooks.tsx/useAdaptiveFontSize';
import { selectDisplayValue } from './calculatorSlice';

const DisplayBorder = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
`;

type DisplayContentProps = {
  fontSize: number;
}

const DisplayContent = styled.p`
  text-align: right;
  border-radius: 6px;
  margin: 0;
  font-weight: 800;
  line-height: 49px;
  font-size: ${(props: DisplayContentProps) => props.fontSize + 'px'};
  background-color: #F3F4F6;
  padding: 4px 8px 4px 8px;
  word-breaK: break-all;
`;

const Display = (props: DisableableElement) => {
  const value = useAppSelector(selectDisplayValue);
  const ref = useRef(null);
  const content = value === 'NaN' ? 'Не определено' : value;
  const fontSize = useAdaptiveFontSize(ref, content, 36);

  return <DisplayBorder>
    <DisplayContent ref={ref} fontSize={fontSize}>
      {content}
    </DisplayContent>
  </DisplayBorder>;
};

export default Display;