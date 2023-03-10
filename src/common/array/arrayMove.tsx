export type ArrayMove = {
  oldIndex: number;
  newIndex: number;
}

export const createArrayMove = (  oldIndex: number, newIndex: number): ArrayMove => {
  return {
    oldIndex,
    newIndex,
  };
};