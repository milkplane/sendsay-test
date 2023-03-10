import { forwardRef } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import DropTooltip from '../../common/components/DropTooltip';
import { SlotName } from '../calculator/calculatorSlice';
import SlotList from './SlotList';
import { removeSlot, selectIsConstructionMode, selectSlotNames, selectTaketSlotNames } from './constructionSlice';
import DraggableSlot from './DraggableSlot';

type ExtraConstructorBorderProps = {
  isOverFirstElement: boolean;
  isNoContent: boolean;
}

const ConstructorBorder = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  box-sizing: border-box;
  border-radius: 6px;
  border-width: 2px;
  border-style: ${(props: ExtraConstructorBorderProps) => props.isNoContent ? 'dashed' : 'solid'};
  border-color: ${(props: ExtraConstructorBorderProps) => props.isNoContent ? '#C4C4C4' : 'transparent'};
  border-style: ${(props: ExtraConstructorBorderProps) => props.isNoContent ? 'dashed' : 'solid'};
  background-color: ${(props: ExtraConstructorBorderProps) => {
    return props.isOverFirstElement && props.isNoContent ? '#F0F9FF' : 'transparent';
  }};
`;

type DraggableSlotListProps = {
  isConstructor: boolean;
  droppableId: string;
}

const DraggableSlotList = forwardRef<HTMLDivElement, DraggableSlotListProps>((props, ref) => {
  const dispatch = useAppDispatch();
  const slotNames = useAppSelector(selectSlotNames);
  const takenSlotNames = useAppSelector(selectTaketSlotNames);
  const isConstructionMode = useAppSelector(selectIsConstructionMode);
  const isNoTakenSlots = takenSlotNames.length === 0;

  const selectedSlotNames = props.isConstructor ? takenSlotNames : slotNames;

  const doubleClickHandler = (slotName: SlotName) => {
    props.isConstructor && isConstructionMode && dispatch(removeSlot(slotName));
  };

  const draggableSlots = selectedSlotNames.map((slotName, index) => {
    return <DraggableSlot
      key={index}
      draggableId={props.droppableId + index}
      index={index}
      slotName={slotName}
      isClickable={!isConstructionMode && props.isConstructor}
      isDraggable={isConstructionMode}
      isClonable={!props.isConstructor}
      isDisabled={!isConstructionMode && !props.isConstructor}
      isHighlighted={!props.isConstructor && !takenSlotNames.includes(slotName)}
      doubleClickHandler={doubleClickHandler} />;
  });

  const isHidden = !props.isConstructor && !isConstructionMode;
  const content = props.isConstructor && isNoTakenSlots && isConstructionMode
    ? <DropTooltip />
    : <SlotList isHidden={isHidden}>
      {draggableSlots}
    </SlotList>;


  return <Droppable droppableId={props.droppableId}>
    {(provided, snapshot) => {
      return <ConstructorBorder
        ref={provided.innerRef}
        {...provided.droppableProps}
        isOverFirstElement={props.isConstructor && snapshot.isDraggingOver}
        isNoContent={props.isConstructor && isNoTakenSlots && isConstructionMode}>
        {content}
      </ConstructorBorder>;
    }}
  </Droppable>;
});

export default DraggableSlotList;