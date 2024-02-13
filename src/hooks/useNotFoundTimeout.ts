import { useEffect, useState } from 'react';

const useNotFoundTimeout = (items: unknown[], isLoading: boolean) => {
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    if (!items.length && !isLoading) {
      const timeoutId = setTimeout(() => {
        setNotFound(true);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setNotFound(false);
    }
  }, [items, isLoading]);

  return notFound;
};

export default useNotFoundTimeout;
