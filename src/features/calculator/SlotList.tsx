import React from 'react';
import styled from 'styled-components';

const SlotPadding = styled.div`
  & > * {
    margin-bottom: 12px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

type SlotListProps = {
  children: React.ReactNode | Array<React.ReactNode>;
}

const SlotList = React.forwardRef<HTMLDivElement, SlotListProps>((props, ref) => {
  return <SlotPadding ref={ref} >
    {props.children}
  </SlotPadding>;
});

export default SlotList;