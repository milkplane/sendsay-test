import { cloneElement } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Clone = styled.div`
  & {
    transform: none !important;
  }
`;

type DraggableCopyProps = {
  index: number;
  draggableId: string;
  isCloneable: boolean;
  children: React.ReactElement;
  isDisable?: boolean;
}

const DraggableCopy = (props: DraggableCopyProps) => {
  if (props.isDisable) return props.children;

  return <Draggable draggableId={props.draggableId} index={props.index}>
    {(provided, snapshot) => {
      const contentWithProps = cloneElement(props.children, {
        ref: provided.innerRef,
        ...provided.draggableProps,
        ...provided.dragHandleProps,
        style: {
          ...provided.draggableProps.style,
          transform: (snapshot.isDragging || !props.isCloneable)
            ? provided.draggableProps.style?.transform
            : 'translate(0px, 0px)',
        }
      });

      return <>
        {contentWithProps}
        {snapshot.isDragging && props.isCloneable && <Clone>
          {props.children}
        </Clone>}
      </>;
    }}
  </Draggable>;
};

export default DraggableCopy;