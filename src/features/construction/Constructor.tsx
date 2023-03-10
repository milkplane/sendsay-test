import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import DraggableCopy from '../../common/components/DraggableCopy';
import DropTooltip from '../../common/components/DropTooltip';
import { SlotName } from '../calculator/calculatorSlice';
import Slot from '../calculator/Slot';
import SlotList from '../calculator/SlotList';
import { removeSlot, selectIsConstructionMode, selectIsSlotsEmpty, selectTaketSlotNames } from './constructionSlice';

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

type ConstructorProps = {
  droppableId: string;
}

const Constructor = (props: ConstructorProps) => {
  const dispatch = useAppDispatch();
  const isNoTakenSlots = useAppSelector(selectIsSlotsEmpty);
  const isConstractionMode = useAppSelector(selectIsConstructionMode);
  
  const doubleClickHandler = (slotName: SlotName) => {
    isConstractionMode && dispatch(removeSlot(slotName));
  };

  const takenSlotsNames = useAppSelector(selectTaketSlotNames);
  const slots = takenSlotsNames.map(slotName => {
    return <Slot slotName={slotName}
      isClickable={!isConstractionMode}
      ondblclick={doubleClickHandler} />;
  });

  const draggableSlots = slots.map((slot, index) => {
    return <DraggableCopy
      draggableId={props.droppableId + index}
      index={index} isCloneable={false}
      isDraggable={!isConstractionMode}>
      {slot}
    </DraggableCopy>;
  });

  const content = isNoTakenSlots
    ? <DropTooltip />
    : <SlotList>
      {draggableSlots}
    </SlotList>;

  return <Droppable droppableId={props.droppableId}>
    {(provided, snapshot) => {
      return <ConstructorBorder
        isNoContent={isNoTakenSlots}
        isOverFirstElement={snapshot.isDraggingOver && isNoTakenSlots}
        {...provided.droppableProps}
        ref={provided.innerRef}>
        {content}
      </ConstructorBorder>;
    }}
  </Droppable>;
};

export default Constructor;