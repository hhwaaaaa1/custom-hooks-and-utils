import { useEffect, useState } from 'react';

interface UseIntersectionObserverProps<T> {
  target?: T | null;
  options?: IntersectionObserverInit;
  onIntersect?: () => void;
  onEscape?: () => void;
}

export function useIntersectionObserver<T extends Element>({
  target,
  options,
  onIntersect,
  onEscape,
}: UseIntersectionObserverProps<T>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      setIntersecting(isIntersecting);
      isIntersecting ? onIntersect?.() : onEscape?.();
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, [target, options, onIntersect, onEscape]);

  return isIntersecting;
}
