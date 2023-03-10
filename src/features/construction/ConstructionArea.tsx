import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { createDropHanlder, DropHandler } from '../../common/dragndrop/destinationCheckers';
import { slotMovedToConstructor, slotPositionChanged } from './constructionSlice';
import DraggableSlotList from './DraggableSlotList';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 56px;
  margin: 0 auto;
`;

const ConstructionArea = () => {
  const dispatch = useAppDispatch();

  const calculatorPartsId = 'calculator-parts';
  const constractorId = 'constactor-parts';

  const sameDestinationDrop: DropHandler = (move) => {
    dispatch(slotPositionChanged(move));
  };

  const otherDestinationDrop: DropHandler = (move) => {
    dispatch(slotMovedToConstructor(move));
  };

  const dropHandler = createDropHanlder(sameDestinationDrop, otherDestinationDrop);

  return <Layout>
    <DragDropContext onDragEnd={dropHandler}>
      <DraggableSlotList droppableId={calculatorPartsId} isConstructor={false} />
      <DraggableSlotList droppableId={constractorId} isConstructor={true} />
    </DragDropContext>
  </Layout>;
};

export default ConstructionArea;