import { useEffect, useState, useCallback } from 'react';

type stateProps = {
  width: number;
  height: number;
};
export const GetWindowSize = () => {
  const [windowSize, setWindowSize] = useState<stateProps>({
    width: 0,
    height: 0,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    } else {
      return;
    }
  }, [handleResize]);

  return windowSize;
};
