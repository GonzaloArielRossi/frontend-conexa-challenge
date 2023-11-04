import { RefObject, useEffect, useRef } from 'react';

export default function useScrollToBottomAction(
  container: RefObject<HTMLUListElement>,
  callback: () => void,
  offset: number = 0
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!container.current) return;
    const handleScroll = () => {
      if (!container.current) return;
      if (
        container.current.scrollTop + container.current.clientHeight >=
        container.current.scrollHeight - offset
      ) {
        callbackRef.current();
      }
    };

    container.current.addEventListener('scroll', handleScroll);

    return () => {
      if (!container.current) return;
      container.current.removeEventListener('scroll', handleScroll);
    };
  }, [container, offset]);
}
