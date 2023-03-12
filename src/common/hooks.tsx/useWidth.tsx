import { useLayoutEffect, useState } from 'react';

export const useWidth = (ref: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = useState<number>(0);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const computedStyle = getComputedStyle(ref.current);

    let elementWidth = ref.current.clientWidth;
    elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);

    setWidth(elementWidth);
  }, [ref]);

  return width;
};