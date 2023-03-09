import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import SideBar from '../calculator/SideBar';
import { addSlotByIndex, slotPositionChanged } from './constructionSlice';
import Constructor from './Constructor';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 56px;
`;

const ConstructionArea = () => {
  const dispatch = useAppDispatch();

  const constractorId = 'constactor-parts';
  const calculatorPartsId = 'calculator-parts';

  const handleDragEnd: OnDragEndResponder = ({ destination, source }) => {
    if (!destination) return;
    if (destination.index === source.index && destination.droppableId === source.droppableId) return;

    if (destination.droppableId !== source.droppableId && destination.droppableId === constractorId) {
      dispatch(addSlotByIndex(source.index));
    } else if (source.droppableId === destination.droppableId) {
      dispatch(slotPositionChanged({ oldPosition: source.index, newPosition: destination.index }));
    }


  };

  return <Layout>
    <DragDropContext onDragEnd={handleDragEnd}>
      <SideBar droppableId={calculatorPartsId} />
      <Constructor droppableId={constractorId} />
    </DragDropContext>
  </Layout>;
};

export default ConstructionArea;