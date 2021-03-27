import { useRef, useState } from "react";

const useDebouncedState = (initialValue, debounceTime = 100) => {
  const [value, setValue] = useState(initialValue);
  const debounceTimeoutId = useRef();

  const setDebouncedValue = (value) => {
    window.clearTimeout(debounceTimeoutId.current);
    debounceTimeoutId.current = setTimeout(() => {
      setValue(value);
    }, debounceTime);
  };

  return [value, setDebouncedValue];
};

export default useDebouncedState;
