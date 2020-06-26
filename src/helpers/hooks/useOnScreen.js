import { useState, useEffect } from 'react';

export function useOnScreen(ref, { threshold = 0, rootMargin = '0px' } = {}, keepWatching = true) {
  const [isIntersecting, setIntersecting] = useState({ inView: false, hasTriggered: false });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0 && entry.isIntersecting && !keepWatching) {
          setIntersecting({
            inView: entry.isIntersecting,
            hasTriggered: true
          });
        } else if (keepWatching) {
          setIntersecting({
            inView: entry.isIntersecting
          });
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current && !isIntersecting.hasTriggered) {
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
}
