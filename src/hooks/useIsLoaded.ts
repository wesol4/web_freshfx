import { useEffect, useState } from 'react';

export const useIsLoaded = (delay: number = 1500) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
};