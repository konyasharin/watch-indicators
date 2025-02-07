import { useEffect, useRef, useState } from 'react';

export const useCssVar = (key: string, initialValue?: string) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (!ref.current) return;
    if (value) ref.current.style.setProperty(key, value);
    else setValue(ref.current.style.getPropertyValue(key));
  }, [value]);

  return {
    ref,
    value,
    setValue,
  };
};
