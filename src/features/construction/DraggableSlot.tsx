import DraggableCopy from '../../common/components/DraggableCopy';
import { SlotName } from '../calculator/calculatorSlice';
import Slot, { DisableableElement } from './Slot';

type ConsturctorSlotProps = {
  slotName: SlotName;
  draggableId: string;
  index: number;
  isDraggable?: boolean;
  isClonable: boolean;
  isHighlighted?: boolean;
  doubleClickHandler?: (slotName: SlotName) => void;
}

const DraggableSlot = (props: ConsturctorSlotProps & DisableableElement) => {
  const slot = <Slot slotName={props.slotName}
    isClickable={props.isClickable}
    doubleClickHandler={props.doubleClickHandler}
    isHighlighted={props.isHighlighted}/>;

  return <DraggableCopy
    draggableId={props.draggableId}
    index={props.index}
    isCloneable={props.isClonable}
    isDraggable={props.isDraggable}>
    {slot}
  </DraggableCopy>;
};

export default DraggableSlot;