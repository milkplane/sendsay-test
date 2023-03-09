import { Droppable } from 'react-beautiful-dnd';
import { useAppSelector } from '../../app/hooks';
import DraggableCopy from '../../common/components/DraggableCopy';
import { selectSlotNames, selectTaketSlotNames } from '../construction/constructionSlice';
import Slot from './Slot';
import SlotList from './SlotList';

type SideBarProps = {
  droppableId: string;
}

const SideBar = (props: SideBarProps) => {
  const slotNames = useAppSelector(selectSlotNames);
  const takenSlotNames = useAppSelector(selectTaketSlotNames);

  const slots = slotNames.map((slotName, index) => {
    return <Slot key={index}
      slotName={slotName}
      isClickable={takenSlotNames.includes(slotName)}
      isDisabled={takenSlotNames.includes(slotName)} />;
  });

  const draggableSlots = slots.map((slot, index) => {
    return <DraggableCopy key={index}
      draggableId={'calculator-parts' + index}
      index={index}
      isCloneable={true}>
      {slot}
    </DraggableCopy>;
  });

  return <Droppable droppableId={props.droppableId} isDropDisabled={false}>
    {(provided) => {
      return <SlotList ref={provided.innerRef} {...provided.droppableProps}>
        {draggableSlots}
      </SlotList>;
    }}
  </Droppable>;
};

export default SideBar;