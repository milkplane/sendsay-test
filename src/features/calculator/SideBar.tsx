import { Droppable } from 'react-beautiful-dnd';
import { useAppSelector } from '../../app/hooks';
import DraggableCopy from '../../common/components/DraggableCopy';
import { selectIsConstructionMode, selectSlotNames, selectTaketSlotNames } from '../construction/constructionSlice';
import Slot from './Slot';
import SlotList from './SlotList';

type SideBarProps = {
  droppableId: string;
  isHidden?: boolean;
}

const SideBar = (props: SideBarProps) => {
  const slotNames = useAppSelector(selectSlotNames);
  const takenSlotNames = useAppSelector(selectTaketSlotNames);
  const isConstructionMode = useAppSelector(selectIsConstructionMode);

  const slots = slotNames.map((slotName, index) => {
    return <Slot key={index}
      slotName={slotName}
      isClickable={false}
      isDisabled={takenSlotNames.includes(slotName) || !isConstructionMode}
      isHighlighted={!takenSlotNames.includes(slotName)}/>;
  });

  const draggableSlots = slots.map((slot, index) => {
    return <DraggableCopy key={index}
      draggableId={props.droppableId + index}
      index={index}
      isCloneable={true}>
      {slot}
    </DraggableCopy>;
  });

  return <Droppable droppableId={props.droppableId} isDropDisabled={true}>
    {(provided) => {
      return <SlotList isHidden={props.isHidden} ref={provided.innerRef} {...provided.droppableProps}>
        {draggableSlots}
      </SlotList>;
    }}
  </Droppable>;
};

export default SideBar;