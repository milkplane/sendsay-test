import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import DraggableCopy from '../../common/components/DraggableCopy';
import Slot from '../calculator/Slot';
import SlotList from '../calculator/SlotList';
import { selectIsConstructionMode, selectIsSlotsEmpty, selectTaketSlotNames } from './constructionSlice';

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
  const isNoTakenSlots = useAppSelector(selectIsSlotsEmpty);
  const isConstractionMode = useAppSelector(selectIsConstructionMode);
  const isOverSlotFirstElemnt = false;

  const takenSlotsNames = useAppSelector(selectTaketSlotNames);
  const slots = takenSlotsNames.map(slotName => {
    return <Slot slotName={slotName}
      isClickable={!isConstractionMode} />;
  });

  const draggableSlots = slots.map((slot, index) => {
    return <DraggableCopy
      draggableId={props.droppableId + index}
      index={index} isCloneable={false}
      isDraggable={!isConstractionMode}>
      {slot}
    </DraggableCopy>;
  });

  return <Droppable droppableId={props.droppableId}>
    {(provided) => {
      return <>
        <ConstructorBorder
          isNoContent={isNoTakenSlots}
          isOverFirstElement={isOverSlotFirstElemnt}
          {...provided.droppableProps}
          ref={provided.innerRef}>
          <SlotList>
            {draggableSlots}
          </SlotList>
        </ConstructorBorder>
        {provided.placeholder}
      </>;
    }}
  </Droppable>;
};

export default Constructor;