import { useEffect, useState, useCallback } from 'react';

type stateProps = {
  width: number;
  height: number;
};
export const GetElementSize = (element: HTMLElement | null) => {
  const [elementSize, setElementSize] = useState<stateProps>({
    width: 0,
    height: 0,
  });

  const handleResize = useCallback(() => {
    if (!element) return;

    setElementSize({
      width: element.clientWidth,
      height: element.clientHeight,
    });
  }, [element]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [element, handleResize]);

  return elementSize;
};
