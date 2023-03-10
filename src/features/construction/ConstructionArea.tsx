import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createDropHanlder, DropHandler} from '../../common/dragndrop/destinationCheckers';
import SideBar from '../calculator/SideBar';
import { slotMovedToConstructor, selectIsConstructionMode, slotPositionChanged } from './constructionSlice';
import Constructor from './Constructor';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 56px;
  margin: 0 auto;
`;

const ConstructionArea = () => {
  const dispatch = useAppDispatch();
  const isConstructionMode = useAppSelector(selectIsConstructionMode);

  const constractorId = 'constactor-parts';
  const calculatorPartsId = 'calculator-parts';

  const sameDestinationDrop: DropHandler = (move) => {
    dispatch(slotPositionChanged(move));
  };

  const otherDestinationDrop: DropHandler = (move) => {
    dispatch(slotMovedToConstructor(move));
  };

  const dropHandler = createDropHanlder(sameDestinationDrop, otherDestinationDrop);

  return <Layout>
    <DragDropContext onDragEnd={dropHandler}>
      <SideBar droppableId={calculatorPartsId} isHidden={!isConstructionMode} />
      <Constructor droppableId={constractorId} />
    </DragDropContext>
  </Layout>;
};

export default ConstructionArea;