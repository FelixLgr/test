// src/hooks/useDebounce.ts — debounce hook for React inputs

import { useState, useEffect } from "react";

/**
 * Returns a debounced copy of the value, updated after the delay.
 * @param value - The value to debounce.
 * @param delay - Delay in milliseconds (default: 300).
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
