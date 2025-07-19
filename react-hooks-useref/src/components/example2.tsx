import { useEffect, useRef } from "react";

export function Demo2() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus(); // useRef is useful if you want to access directly HTML Dom elements
  }, []);

  return (
    <div className="tutorial">
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}
