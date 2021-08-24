import { RefObject, useEffect } from 'react';
import { isRef } from '../utils/isRef';

interface UseResizeObserverProps<T> {
  target: RefObject<T> | (() => T | null);
  onChange?: () => void;
}

export function useResizeObserver<T extends Element>({
  target,
  onChange,
}: UseResizeObserverProps<T>) {
  useEffect(() => {
    const targetElement = isRef(target)
      ? (target as RefObject<T>).current
      : (target as Function)();
    if (!targetElement) return;
    const observer = new ResizeObserver(() => onChange?.());
    observer.observe(targetElement);
    return () => observer.disconnect();
  }, []);
}
