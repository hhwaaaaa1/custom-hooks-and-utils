import { RefObject, useEffect } from 'react';

interface UseMutationObserverProps<T> {
  target: RefObject<T>;
  config?: MutationObserverInit;
  onChange?: () => void;
}

const initialConfig: MutationObserverInit = {
  childList: true,
  attributes: true,
};

export function useMutationObserver<T extends HTMLElement>({
  target,
  config = {},
  onChange,
}: UseMutationObserverProps<T>) {
  useEffect(() => {
    if (!target.current) return;
    const observer = new MutationObserver(() => onChange?.());
    observer.observe(target.current, { ...initialConfig, ...config });
    return () => observer.disconnect();
  }, []);
}
