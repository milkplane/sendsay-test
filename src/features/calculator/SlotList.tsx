import React from 'react';
import styled from 'styled-components';

const SlotPadding = styled.div`
  & > * {
    margin-bottom: 12px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  opacity: ${(props: {isHidden?: boolean}) => props.isHidden ? 0 : 1};
`;

type SlotListProps = {
  children: React.ReactNode | Array<React.ReactNode>;
  isHidden?: boolean;
}

const SlotList = React.forwardRef<HTMLDivElement, SlotListProps>((props, ref) => {
  return <SlotPadding ref={ref} isHidden={props.isHidden}>
    {props.children}
  </SlotPadding>;
});

export default SlotList;