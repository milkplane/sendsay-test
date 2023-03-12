import { useLayoutEffect, useState } from 'react';
import { useWidth } from './useWidth';

export const useAdaptiveFontSize = (ref: React.RefObject<HTMLElement>, content: string, wantFontSize: number) => {
  const [adaptiveFontSize, setAdaptiveFontSize] = useState(wantFontSize);
  const width = useWidth(ref);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      setAdaptiveFontSize(wantFontSize);
      return;
    }

    const computedStyle = getComputedStyle(ref.current);
    const fontFamily = computedStyle.fontFamily;
    const fontWeight = computedStyle.fontWeight;
    context.font = `${fontWeight} ${wantFontSize}px ${fontFamily}`;
    
    const metrics = context.measureText(content);

    if (metrics.width > width) {
      setAdaptiveFontSize(width / metrics.width * wantFontSize);
    } else {
      setAdaptiveFontSize(wantFontSize);
    }

    canvas.remove();
  }, [width, wantFontSize, content, ref]);

  return adaptiveFontSize;
};