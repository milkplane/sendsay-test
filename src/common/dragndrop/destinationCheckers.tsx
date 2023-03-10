import { DraggableLocation, OnDragEndResponder } from 'react-beautiful-dnd';
import { ArrayMove, createArrayMove } from '../array/arrayMove';

type DestinationType = DraggableLocation | null | undefined;
export type DropHandler = (move: ArrayMove) => void;

export const isSameDestination = (destination: DraggableLocation, source: DraggableLocation) => {
  return destination.droppableId === source.droppableId;
};

export const isSameIndex = (destination: DraggableLocation, source: DraggableLocation) => {
  return destination.index === source.index;
};

export const isDroppedOnDroppable = (destination: DestinationType): destination is DraggableLocation => {
  return destination != null;
};

export const isPositionChanged = (
  destination: DestinationType,
  source: DraggableLocation
): destination is DraggableLocation => 
{
  return isDroppedOnDroppable(destination) &&
    (!isSameDestination(destination, source) || !isSameIndex(destination, source));
};

export const isDroppedOnLocation = (
  destination: DraggableLocation,
  locationId: string): boolean =>
{
  return destination.droppableId === locationId;
};

export const isDroppedSameDroppable = (
  destination: DraggableLocation,
  source: DraggableLocation): destination is DraggableLocation =>
{
  return isPositionChanged(destination, source) && isSameDestination(destination, source);
};

export const createDropHanlder = (
  sameDropHandler: DropHandler,
  otherDropHandler: DropHandler
): OnDragEndResponder => (({ destination, source }) =>
{
  if (!isDroppedOnDroppable(destination)) return;

  if (isSameDestination(destination, source)) {
    sameDropHandler(createArrayMove(source.index, destination.index));
  } else {
    otherDropHandler(createArrayMove(source.index, destination.index));
  }
});